import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div name="// about" className="w-full h-screen px-5 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="pb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold inline border-b-4 border-purple-500">About Me</h2>
        </motion.div>
        <p className=" text-lg md:text-2xl mt-10 leading-normal text-center">
          Fuelled by a passion for software development, I have a deep desire to learn, excel and continuously improve on my work. Proudly based in Singapore and pursuing a career as a <span className="italic text-[#39C600]">full stack developer</span>. I hope to become the best developer I can possibly be because I believe everyday is a chance at improvement. I am also <span className="italic text-[#39C600]">globetrotter</span> who is sensitive to cultural differences and has been to 58 countries and counting.
        </p>
      </div>
    </div>
  );
}

export default About;
