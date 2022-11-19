import React, { useEffect } from "react";

function Header() {
  return (
    <header className="flex justify-between">
      <div className="logo">
        <h3>Julien._Heng</h3>
      </div>

      <ul className="flex ">
        <li>//home</li>
        <li>// about</li>
        <li>// contact</li>
      </ul>
      <div></div>
    </header>
  );
}

export default Header;
