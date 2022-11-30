import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/julien-heng/",
      style: "rounded-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/julienheng",
      style: "rounded-md",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "https://www.google.com",
      style: "rounded-md",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Julien's Resume.pdf",
      style: "rounded-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500" + " " + style}>
            <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
