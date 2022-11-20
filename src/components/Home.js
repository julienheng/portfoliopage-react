import React, { useEffect } from "react";
import profile from "../images/profile.jpg";
import "./Home.css";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="h-screen bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4 md:flex-row h-full relative">
        <div className="text-white max-w-screen-lg flex flex-col justify-center w-screen h-full px-10">
          <h2 className="sm:text-4xl text-left w-fit">Hey, it's...</h2>
          <h1 className="name sm:text-8xl pb-3 my-10 w-fit mx-auto">Julien Heng</h1>
          <p className="job sm:text-4xl pb-2 w-fit mx-auto ">SOFTWARE DEVELOPER</p>
        </div>

        <div className="w-1/2">
          <img src={profile} alt="my profile" className="mx-auto w-fit md:w-100 rounded-2xl" />
        </div>
        <section id="section10" className="w-fit h-fit flex flex-col text-white absolute left-[50%] bottom-10">
          <Link to="/about" smooth duration={500}>
            <span></span>Scroll
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
