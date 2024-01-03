import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  }, [setNav]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("logOut successful");
      navigate("/logIn");
    } catch (error) {
      console.log(error);
    }
  };
  let name = user?.email;
  return (
    <div
      className={`text-white flex justify-between items-center px-3 fixed top-0 left-0 right-0 z-[100] ${
        nav && "bg-black"
      } transition-colors duration-700`}
    >
      <Link to={"/"}>
        <img src='/main.png' alt='logo' className='w-[100px] md:w-[120px] ' />
      </Link>
      {user?.email ? (
        <div className=''>
          <button onClick={handleLogOut} className='px-3 py-2 cursor-pointer'>
            Log Out
          </button>
          <button className=' px-3 py-2 text-red-500 font-bold text-xl cursor-pointer'>
            {name?.split("").splice(0, 6).join("").concat("...")}
          </button>
        </div>
      ) : (
        <div className=''>
          <Link to={"/logIn"}>
            <button className='px-3 py-2 cursor-pointer'>Log In</button>
          </Link>
          <Link to={"/signUp"}>
            <button className=' px-3 py-2 bg-black text-red-600 text-lg rounded cursor-pointer '>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default NavBar;
