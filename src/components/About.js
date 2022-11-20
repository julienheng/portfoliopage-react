import React, { useEffect } from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">About</p>
        </div>
        <p className="text-xl mt-20">Hi I am an aspiring software developer in Singapore</p>
      </div>
    </div>
  );
}

export default About;
