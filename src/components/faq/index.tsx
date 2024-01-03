import { FaChevronRight, FaPlus } from "react-icons/fa";

export default function FAQ() {
  const faq = [
    "What is Netflix?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?",
  ];
  return (
    <div className='container mx-auto flex flex-col gap-3 ps-4 pe-4'>
      <span className='block text-white font-bold text-3xl text-center pb-3 pt-10'>
        Frequently Asked Questions
      </span>
      {faq.map((val, i) => (
        <div
          key={i}
          className='bg-white/20 px-3 py-5 font-semibold text-white/90 flex justify-between mx-auto w-full max-w-[1000px]'
        >
          <span>{val}</span>{" "}
          <span className=' inline-block'>
            <FaPlus />
          </span>
        </div>
      ))}
      <div className='container mx-auto w-full max-w-[1000px]'>
        <span className='block text-white/90 pt-5 text-center'>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className='flex justify-center gap-4 w-full mt-4 flex-wrap'>
          <input
            type='text'
            className='px-3 py-4 bg-white/10 border  border-white/30 rounded placeholder:text-white/80 flex-grow'
            placeholder='Email address'
          />
          <button className='text-white flex px-7 py-4 bg-red-600 font-bold text-xl rounded items-center hover:bg-red-700'>
            Get Started <FaChevronRight className='ps-2' />
          </button>
        </div>
      </div>
    </div>
  );
}
