import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authProvider";

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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`text-white  flex justify-between items-center px-3 fixed top-0 left-0 right-0 z-[100] ${
        nav && "bg-black"
      } transition-colors duration-700`}
    >
      <Link to={"/"}>
        <img
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='logo'
          className='w-[120px] bg'
        />
      </Link>
      {user?.email ? (
        <div className=''>
          <button onClick={handleLogOut} className='px-3 py-2 cursor-pointer'>
            Log Out
          </button>
          <Link to={"/account"}>
            <button className=' px-3 py-2 text-red-500 font-bold text-xl cursor-pointer'>
              Account
            </button>
          </Link>
        </div>
      ) : (
        <div className=''>
          <Link to={"/logIn"}>
            <button className='px-3 py-2 cursor-pointer'>Log In</button>
          </Link>
          <Link to={"/signUp"}>
            <button className=' px-3 py-2 text-red-500 font-bold text-xl cursor-pointer'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default NavBar;
