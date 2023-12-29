import { baseImageUrl } from "../../../utils/helper";

export default function Card({ item, setMovieTitle ,id ,setDivId}: any) {
  if (!item?.backdrop_path) return null;
  const halndleClick=()=>{
    setMovieTitle(item?.title);
    setDivId(id);
  }
  return (
    <div key={id} className='w-[160px] sm:w-[200px] lg:w-[240px] md:w-[280px] inline-block cursor-pointer relative p-2'>
      <img
        src={baseImageUrl + "/w500" + item?.backdrop_path}
        alt={item?.title}
        onClick={halndleClick}
      />
    </div>
  );
}
