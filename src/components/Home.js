import profile from "../images/profile.jpg";
import "./Home.css";
import { Link } from "react-scroll";
import Typical from "react-typical";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import ParticleBackground from "./ParticleBackground";
import { useState } from "react";

function Home() {
  const [rotate, setRotate] = useState(false);

  return (
    <div name="// home" className="h-screen w-full flex flex-col justify-center md:flex md:flex-row md:items-center bg-gradient-to-b from-black to-gray-800 relative">
      <ParticleBackground />
      <div className="text-white max-w-screen-lg mx-auto md:mr-5 w-fit flex flex-col justify-center my-3">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <BackgroundCircles />
        </div>
        <h2 className="text-left text-3xl lg:text-4xl">Hey, it's...</h2>
        <h1 className="name w-full text-5xl my-6 md:text-8xl lg:mx-25 pb-2 tracking-tighter">JULIEN HENG</h1>
        <p className="job text-2xl md:text-5xl text-center mb-5">
          <Typical loop={Infinity} wrapper="p" steps={["Software Developer", 2000, "Globetrotter", 2000]} />
        </p>
      </div>

      <motion.img
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => {
          setRotate(!rotate);
        }}
        src={profile}
        alt="my profile"
        className="w-2/5 md:w-3/12 md:flex md:justify-center mx-auto md:ml-5 rounded-full md:rounded-tl-[30%] md:rounded-tr-[70%] md:rounded-bl-[40%] md:rounded-br-[20%] shadow hover:shadow-white z-0"
      />

      <section id="section10" className="w-fit h-fit flex flex-col text-white absolute left-[44%] md:left-[50%] bottom-10 z-0">
        <Link to="// about" smooth duration={1000}>
          <span></span>Scroll
        </Link>
      </section>
    </div>
  );
}

export default Home;
