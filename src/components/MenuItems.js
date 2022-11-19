import React from "react";
import { Link } from "react-router-dom";
import closeMenu from "../images/icon-close-menu.svg";

function MenuItems({ showMenu, active }) {
  return (
    <ul className={active ? "flex-col flex items-start fixed inset-0 left-1/4 gap-8 justify-center md:hidden" : "hidden"}>
      <img src={closeMenu} alt="" onClick={showMenu} />
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
  );
}

export default MenuItems;
