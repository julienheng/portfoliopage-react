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
        <div className="absolute border border-slate-500 rounded-full md:h-[200px] md:w-[200px] mt-52 motion-safe:animate-ping opacity-20" />
        <div className="absolute border border-slate-500 rounded-full md:h-[300px] md:w-[300px] mt-52 motion-safe:animate-ping opacity-20" />
        <div className="absolute border border-slate-500 rounded-full md:h-[500px] md:w-[500px] mt-52 animate-pulse opacity-5" />
        <div className="absolute border border-slate-500 rounded-full md:h-[650px] md:w-[650px] mt-52 animate-pulse opacity-5" />
        <div className="absolute border border-slate-500 rounded-full  md:h-[800px] md:w-[800px] mt-52 animate-pulse " />
        <div className="absolute border border-slate-500 rounded-full  md:h-[1000px] md:w-[1000px] mt-52 animate-pulse opacity-5" />
      </motion.div>
    </>
  );
}

export default BackgroundCircles;
