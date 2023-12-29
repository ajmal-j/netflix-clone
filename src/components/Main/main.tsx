import { useEffect, useState } from "react";
import requests from "../../utils/request";
import axios from "axios";
import { baseImageUrl } from "../../utils/helper";
// @ts-ignore
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState<string>("");
  const [movie, setBannerMovie] = useState<any>();

  useEffect(() => {
    axios.get(requests.requestPopular).then((response: any) => {
      setMovies(response.data.results);
    });
  }, []);
  useEffect(() => {
    const movie: any = movies[Math.floor(Math.random() * movies.length)];
    setBannerMovie(movie);
  }, [movies]);
  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovieClick = () => {
    if (!movie) return;
    movieTrailer(movie?.title)
      .then((url: string) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setVideoId(urlParams.get("v") || "");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>
          {movie && (
            <img
              className='w-full h-full object-cover'
              src={`${baseImageUrl}/original${movie?.backdrop_path}`}
              alt={movie?.title}
            />
          )}
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className="text-3xl  md:text-4xl font-b'">{movie?.title}</h1>
            <div className='my-4'>
              <button
                onClick={handleMovieClick}
                className='border bg-gray-300 text-black py-2 px-4'
              >
                play
              </button>
              <button className='border  py-2 px-4 ms-2'>Watch Later</button>
            </div>
            <p className='text-gray-400 mb-2 text-sm'>
              Released : {movie?.release_date}
            </p>
            <p className='text-gray-200 w-full md:max-w-[70%] xl:max-w-[35%]'>
              {movie?.overview}
            </p>
          </div>
        </div>
      </div>
      <div>
        {videoId.length > 0 && <YouTube videoId={videoId} opts={options} />}
      </div>
    </>
  );
}
