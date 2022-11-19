import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.jpg";
import MenuItems from "./MenuItems";

function Header() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    // <header className="flex p-3 justify-between text-white">
    //   <div className="flex items-center px-4">
    //     <img src={profile} alt="" className="-auto rounded-full w-12 h-12" />
    //     <h3 className="mx-3 md:text-2xl lg:text-4xl">Julien._Heng</h3>
    //   </div>

    //   <nav className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
    //     <Link className="text-l mx-2 hover:text-[#B828E6] duration-500" to="/">
    //       // home
    //     </Link>{" "}
    //     <Link className="text-l mx-2 hover:text-[#B828E6] duration-500" to="/about-me">
    //       // about
    //     </Link>{" "}
    //     <Link className="ltext-l mx-2 hover:text-[#B828E6] duration-500" to="/contact">
    //       // contact
    //     </Link>
    //   </nav>
    //   <div></div>
    // </header>

    <header className="text-white fixed w-full flex justify-between p-4 items-center">
      <div className="flex items-center">
        <img src={profile} alt="" className="rounded-full w-12 h-12" />
        <h3 className="mx-3 text-4xl text-center">Julien._Heng</h3>
      </div>

      <nav>
        <div className="">
          <MenuOutlined />
        </div>
        <ul className="hidden md:flex gap-8 p-2 bg-white/10">
          <li>
            <Link to="/">// home</Link>
          </li>
          <li>
            <Link to="/">// about</Link>
          </li>
          <li>
            <Link to="/">// contact</Link>
          </li>
        </ul>
        <MenuItems />
      </nav>
      <div></div>
    </header>
  );
}

export default Header;
