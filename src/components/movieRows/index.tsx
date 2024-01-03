import { useEffect, useState } from "react";
import { titles } from "../../types/types";
import axios from "axios";
import requests from "../../utils/request";
import Card from "./movieCard";
import { v4 as uuid } from "uuid";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
// @ts-ignore
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { useMovie } from "../../context/movieProvider";
import { options } from "../../utils/helper";

type Row = {
  title: titles;
  url: keyof typeof requests;
  id: string;
  row_id: string;
};
export default function Row({ title, url, id, row_id }: Row) {
  const [movies, setMovies] = useState([]);
  const [movieUrl, setMovieUrl] = useState<string>("");
  const { movieTitle, setMovieTitle, divId, setDivId } = useMovie();

  useEffect(() => {
    axios.get(requests[url]).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  useEffect(() => {
    if (!movieTitle) return;
    movieTrailer(movieTitle)
      .then((url: string) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setMovieUrl(urlParams.get("v") || "");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, [movieTitle]);
  const slideLeft = () => {
    let slider = document.getElementById(row_id);
    if (slider) slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById(row_id);
    if (slider) slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div id={id}>
      <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
      <div className='relative flex items-center group'>
        <CiCircleChevLeft
          onClick={slideLeft}
          size={40}
          className='ms-3 bg-white/80 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
        <div
          id={row_id}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item) => (
            <Card
              setMovieTitle={setMovieTitle}
              id={id}
              setDivId={setDivId}
              key={uuid()}
              item={item}
            />
          ))}
        </div>
        <CiCircleChevRight
          onClick={slideRight}
          size={40}
          className='me-3 bg-white/80 right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
      </div>
      <div>
        {movieUrl && id === divId && (
          <YouTube videoId={movieUrl} opts={options} />
        )}
      </div>
    </div>
  );
}
