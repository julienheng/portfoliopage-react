import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
          scale: [1, 2, 2, 3, 1],
        }}
        transition={{ duration: 2.5 }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute border border-slate-500 rounded-full h-[50px] w-[50px] md:h-[200px] md:w-[200px] md:mt-52 motion-safe:animate-ping opacity-20" />
        <div className="absolute border border-slate-500 rounded-full h-[120px] w-[120px] md:h-[300px] md:w-[300px] md:mt-52 motion-safe:animate-ping opacity-20" />
        <div className="absolute border border-slate-500 rounded-full h-[190px] w-[190px] md:h-[500px] md:w-[500px] md:mt-52 animate-pulse opacity-5" />
        <div className="absolute border border-slate-500 rounded-full h-[260px] w-[260px] md:h-[650px] md:w-[650px] md:mt-52 animate-pulse opacity-5" />
        <div className="absolute border border-slate-500 rounded-full  h-[320px] w-[320px] md:h-[800px] md:w-[800px] md:mt-52 animate-pulse " />
        <div className="absolute border border-slate-500 rounded-full  h-[390px] w-[390px] md:h-[1000px] md:w-[1000px] md:mt-52 animate-pulse opacity-5" />
      </motion.div>
    </>
  );
}

export default BackgroundCircles;
