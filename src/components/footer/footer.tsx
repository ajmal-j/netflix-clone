import { FaChevronDown, FaLanguage } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='mt-20 p-7 border-t-[6px] border-t-white/20 pt-10 '>
      <div className='container mx-auto'>
        <span className='text-white/70  pb-6 block'>
          Questions? Call <u className='cursor-pointer'>000-800-919-1694</u>
        </span>
        <ul className='flex gap-5 flex-wrap'>
          <ul className='flex flex-col gap-3'>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              FAQ
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Help Centre
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Account
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Media Centre
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Investor Relations
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Jobs
            </li>
          </ul>

          <ul className='flex flex-col gap-3  ms-auto me-[20vw]'>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Ways to Watch
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Terms of Use
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Privacy
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Cookie Preferences
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Corporate Information
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Contact Us
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Speed Test
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Legal Notices
            </li>
            <li className='text-gray-400 text-sm underline cursor-pointer'>
              Only on Netflix
            </li>
          </ul>
        </ul>
        <button className='text-white mt-4 px-3 py-2 flex gap-2 items-center text-white/90 border '>
          <FaLanguage /> English <FaChevronDown />
        </button>
        <span className='pt-4 block text-sm  text-white/60'>Netflix India</span>
      </div>
    </div>
  );
}
