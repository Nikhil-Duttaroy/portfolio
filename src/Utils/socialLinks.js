import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const socialLinks = [
  {
    icons: <FaGithub size={20} className="group-hover:text-primaryAccent" />,
    name: "Github",
    url: "https://github.com/Nikhil-Duttaroy",
  },
  {
    icons: <FaLinkedin size={20} className="group-hover:text-primaryAccent" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nikhil-duttaroy/",
  },
  {
    icons: <FaInstagram size={20} className="group-hover:text-primaryAccent" />,
    name: "Instagram",
    url: "https://ig.me/m/nikhilduttaroy",
  },
  {
    icons: <IoMdMail size={20} className="group-hover:text-primaryAccent" />,
    name: "Email",
    url: "mailto:nsdr2000@gmail.com",
  },
];
