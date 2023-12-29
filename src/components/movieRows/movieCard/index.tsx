import { baseImageUrl } from "../../../utils/helper";

export default function Card({ item, setMovieTitle, id, setDivId }: any) {
  if (!item?.backdrop_path) return null;
  const handleClick = () => {
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
      className='w-[160px] sm:w-[200px] lg:w-[240px] md:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all '
    >
      <img
        src={baseImageUrl + "/w500" + item?.backdrop_path}
        alt={item?.title}
      />
      <div
        onClick={handleClick}
        className='absolute transition-all duration-100 top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white'
      >
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {title}
        </p>
      </div>
    </div>
  );
}
