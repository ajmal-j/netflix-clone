import { useEffect, useState } from "react";
import requests from "../../utils/request";
import axios from "axios";
import { baseImageUrl } from "../../utils/helper";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const movie: any = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response: any) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>
        {movie && (
          <img
            className='w-full h-full object-cover'
            src={`${baseImageUrl}${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        )}
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className="text-3xl  md:text-4xl mb-4 font-b'">{movie?.title}</h1>
          <div>
            <button className='border bg-gray-300 text-black py-2 px-4'>
              play
            </button>
            <button className='border  py-2 px-4 ms-2'>Watch Later</button>
          </div>
        </div>
      </div>
    </div>
  );
}
