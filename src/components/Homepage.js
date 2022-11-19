import React, { useEffect } from "react";

function Homepage() {
  return (
    // <section className="p-20 text-center text-white">
    //   <div className="p-5">
    //     <p className="text-4xl mx-20 p-10 text-left">Hey, it's ... </p>
    //     <h1 className="text-8xl p-10">Julien Heng</h1>
    //     <h3 className="text-5xl p-5 font-{primary}">SOFTWARE DEVELOPER</h3>
    //   </div>
    // </section>

    <section className="w-full h-screen flex items-center px-4 border-solid border-2 border-white">
      <div className="text-center text-white ">
        <p className="text-4xl text-left p-10 mx-20">Hey, it's ... </p>
        <h1 className="text-8xl p-10">Julien Heng</h1>
        <h3 className="text-5xl p-5 font-{primary}">SOFTWARE DEVELOPER</h3>
      </div>
    </section>
  );
}

export default Homepage;
