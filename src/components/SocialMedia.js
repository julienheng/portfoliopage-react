import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";

function SocialMedia() {
  return (
    <>
      <div className="mt-3">
        <ul className="flex flex-row justify-center ">
          <li className="mx-2 text-[#4968ad] hover:scale-150 duration-500">
            <a href="https://www.linkedin.com/in/julien-heng/" target="_blank">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="mx-2 text-[#A8594F] hover:scale-150 duration-500">
            <a href="https://github.com/julienheng/" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li className="mx-2 text-[#E34133] hover:scale-150 duration-500">
            <a href="https://www.google.com" target="_blank">
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="mx-2 text-[#4968ad] hover:scale-150 duration-500">
            <a href="https://www.facebook.com/julian.heng.5/" target="_blank">
              <BsFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialMedia;
