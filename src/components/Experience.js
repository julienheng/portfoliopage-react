import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import rails from "../images/rails.png";
import mongo from "../images/mongo.png";
import react from "../images/react.png";
import next from "../images/next.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";
import { motion } from "framer-motion";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: next,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: rails,
      title: "Ruby on Rails",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: mongo,
      title: "DB Mongo",
      style: "shadow-green-600",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
  ];

  return (
    <div name="// experience" className="w-full h-full md:h-screen bg-gradient-to-b from-black to-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white text-center ">
        <motion.h2
          initial={{ opacity: 0, x: -100 }} // initial state
          whileInView={{ opacity: 1, x: 0 }} // only appear when see
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl mx-auto border-b-4 border-yellow-500 p-2"
        >
          Skills
        </motion.h2>
        <p className="py-6 sm:text-xl">These are the technologies I've learned and worked with</p>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-24 md:px-28">
          {techs.map(({ id, src, title, style }, i) => (
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.05, delay: i * 0.05 }} key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-14 md:w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
