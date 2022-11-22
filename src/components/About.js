import React from "react";

function About() {
  return (
    <div name="// about" className="w-full h-screen px-5 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-3xl md:text-5xl font-bold inline border-b-4 border-purple-500">About Me</p>
        </div>
        <p className=" text-lg md:text-2xl mt-10 leading-normal text-center">
          Fuelled by a passion for software development, I have a deep desire to learn, excel and continuously improve on my work. Proudly based in Singapore and pursuing a career as a <span className="italic text-[#39C600]">full stack developer</span>. I hope to become the best developer I can possibly be because I believe everyday is a chance at improvement. I am also <span className="italic text-[#39C600]">globetrotter</span> who is sensitive to cultural differences and has been to 58 countries and counting.
        </p>
      </div>
    </div>
  );
}

export default About;
