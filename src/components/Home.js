import profile from "../images/profile.jpg";
import "./Home.css";
import { Link } from "react-scroll";
import Typical from "react-typical";

function Home() {
  return (
    <div name="// home" className="h-screen w-full flex flex-col justify-center md:flex items-center bg-gradient-to-b from-black to-gray-800">
      {/* <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4 md:flex-row h-full relative"> */}
      <div className="text-white max-w-screen-lg my-10 px-10 border-solid border-2 border-white-600">
        <h2 className="text-left text-3xl lg:text-4xl">Hey, it's...</h2>
        <h1 className="name w-full text-center text-5xl my-6 md:text-8xl lg:mx-25 pb-2 tracking-tighter">JULIEN HENG</h1>
        <p className="job text-2xl md:text-5xl text-center mb-5">
          <Typical loop={Infinity} steps={["Software Developer", 2000, "Globetrotter", 2000]} />
        </p>
      </div>

      <img src={profile} alt="my profile" className="w-2/5 md:w-2/5 mx-auto rounded-full md:mx-auto md:rounded-tl-[30%] md:rounded-tr-[70%] md:rounded-bl-[40%] md:rounded-br-[20%] shadow hover:shadow-white border-solid border-2 border-green-600" />

      <section id="section10" className="w-fit h-fit flex flex-col text-white absolute left-[45%] md:left-[50%] bottom-10">
        <Link to="// about" smooth duration={1000}>
          <span></span>Scroll
        </Link>
      </section>
      {/* </div> */}
    </div>
  );
}

export default Home;
