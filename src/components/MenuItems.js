import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MenuItems() {
  return (
    <ul className="">
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
  );
}

export default MenuItems;
