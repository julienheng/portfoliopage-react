import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.jpg";
import MenuItems from "./MenuItems";
import openMenu from "../images/icon-menu.svg";

function Header() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <header className="w-full flex justify-between p-4 items-center text-white">
      <div className="flex items-center">
        <img src={profile} alt="" className="rounded-full w-12 h-12" />
        <h3 className="mx-3 text-4xl text-center">._Heng</h3>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150 ">
          <img src={openMenu} alt="" onClick={showMenu} />
        </div>
        <ul className="hidden md:flex gap-8 p-2">
          <li>
            <Link to="/">// home</Link>
          </li>
          <li>
            <Link to="/about-me">// about</Link>
          </li>
          <li>
            <Link to="/contact">// contact</Link>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
      <div></div>
    </header>
  );
}

export default Header;
