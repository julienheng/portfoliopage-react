import profile from "../images/profile.jpg";
import "./Home.css";
import { Link } from "react-scroll";
import Typical from "react-typical";

function Home() {
  return (
    <div name="// home" className="h-screen w-full flex flex-col justify-center md:flex md:flex-row md:items-center bg-gradient-to-b from-black to-gray-800">
      <div className="text-white max-w-screen-lg mx-auto md:mr-5 w-fit flex flex-col justify-center my-3">
        <h2 className="text-left text-3xl lg:text-4xl">Hey, it's...</h2>
        <h1 className="name w-full text-5xl my-6 md:text-8xl lg:mx-25 pb-2 tracking-tighter">JULIEN HENG</h1>
        <p className="job text-2xl md:text-5xl text-center mb-5">
          <Typical loop={Infinity} steps={["Software Developer", 2000, "Globetrotter", 2000]} />
        </p>
      </div>

      <img src={profile} alt="my profile" className="w-2/5 md:w-4/12 md:flex md:justify-center mx-auto md:ml-5 rounded-full md:rounded-tl-[30%] md:rounded-tr-[70%] md:rounded-bl-[40%] md:rounded-br-[20%] shadow hover:shadow-white" />

      <section id="section10" className="w-fit h-fit flex flex-col text-white absolute left-[44%] md:left-[50%] bottom-10">
        <Link to="// about" smooth duration={1000}>
          <span></span>Scroll
        </Link>
      </section>
    </div>
  );
}

export default Home;
