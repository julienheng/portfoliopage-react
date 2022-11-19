import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profile from "../images/profile.jpg";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "// home",
    },
    {
      id: 2,
      link: "// about",
    },
    {
      id: 3,
      link: "// experience",
    },
    {
      id: 4,
      link: "// contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
      <div className="flex items-center">
        <img src={profile} alt="" className="rounded-full w-12 h-12" />
        <h3 className="mx-3 text-4xl text-center font-signature">J.Heng</h3>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer font-medium hover:scale-150 duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen text-white">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl font-medium hover:scale-150 duration-200">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;