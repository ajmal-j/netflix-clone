import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/authProvider";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='signUpBackground'
      />
      <div className='top-0 left-0 fixed w-full h-screen bg-black/50'></div>
      <div className='w-full fixed  px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className='p-3 my-2 bg-gray-700 rounded '
                type='email'
                placeholder='Email'
              />
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className='p-3 my-2 bg-gray-700 rounded '
                type='password'
                placeholder='Password'
              />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                Sign In
              </button>
              <div className='flex justify-between items-center text-sm text-gray-500'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember Me
                </p>
                <p>Need help?</p>
              </div>
              <div className='py-8'>
                <span className=' text-gray-600'>New to Netflix?</span>{" "}
                <Link to='/signUp'>Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
