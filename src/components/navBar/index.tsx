
 const NavBar = () => {
  return (
    <div className="text-white flex justify-between items-center px-3">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" className="w-[120px] bg"/>
        <div className="">
            <button className="px-3 py-2 cursor-pointer">Sign In</button>
            <button className=" px-3 py-2 bg-red-600 rounded cursor-pointer">Sign Up</button>
        </div>
    </div>
  )
}
export default  NavBar;