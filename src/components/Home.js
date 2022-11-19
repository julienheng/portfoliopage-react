import React, { useEffect } from "react";
import profile from "../images/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="text-white flex flex-col justify-center h-full">
          <h2 className="">Hey, it's...</h2>
          <h1 className="text-4xl sm:text-7xl font-bold">Julien Heng</h1>
          <p>Software Developer</p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={profile} alt="my profile" className="rounded-2xl mx-auto w-1/3 md:w-100" />
        </div>
      </div>
    </div>
  );
}

export default Home;
