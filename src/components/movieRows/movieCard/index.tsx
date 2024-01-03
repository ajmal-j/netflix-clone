import { FaPlay } from "react-icons/fa";
import { baseImageUrl } from "../../../utils/helper";
import { UserAuth } from "../../../context/authProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Card({ item, setMovieTitle, id, setDivId }: any) {
  if (!item?.backdrop_path) return null;
  const navigate=useNavigate()
  const { user } = UserAuth();
  const handleClick = () => {
    if (!user) {
      toast.error("Subscribe to play trailer");
      navigate('/logIn')
      return;
    }
    setMovieTitle(item?.title);
    setDivId(id);
  };
  let title;
  if (item?.title.length > 20) {
    title = item.title.split("").splice(0, 20).join("").concat("...");
  } else title = item?.title || "movie";
  return (
    <div
      key={id}
      className='w-[160px]  sm:w-[200px] lg:w-[240px] md:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all '
    >
      <img
        className='rounded'
        src={baseImageUrl + "/w500" + item?.backdrop_path}
        alt={item?.title}
      />
      <div
        onClick={handleClick}
        className='absolute rounded transition-all duration-100 top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white'
      >
        <p className='white-space-normal text-xs md:text-sm font-bold flex flex-col justify-center items-center h-full text-center'>
          {title}
          <span className='text-white/60 pt-0 text-xs flex flex-col  gap-2'>
            <FaPlay className='mx-auto mt-2' /> click to play trailer
          </span>
        </p>
      </div>
    </div>
  );
}
