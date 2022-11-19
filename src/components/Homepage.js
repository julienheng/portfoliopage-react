import React, { useEffect } from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <section className="w-full h-screen flex items-center">
      <div className="p-10 m-auto text-white">
        <p className="animate typewriter text-4xl text-left p-10 mx-20 ml-0">Hey, it's ... </p>
        <h1 className="name text-8xl p-10">Julien Heng</h1>
        <p className="job m-auto p-2 w-fit text-5xl text-center font-{primary}">SOFTWARE DEVELOPER</p>
      </div>
    </section>
  );
}

export default Homepage;
