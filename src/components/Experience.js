import React, { useEffect } from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import rails from "../images/rails.png";
import mongo from "../images/mongo.png";
import react from "../images/react.png";
import node from "../images/node.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";

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
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: rails,
      title: "Ruby on Rails",
      style: "shadow-red-500",
    },
    {
      id: 9,
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
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl font-bold border-b-4 broder-gray-500 p-2 inline">Experience</p>
        <p className="py-6">These are the technologies I've worked with</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
