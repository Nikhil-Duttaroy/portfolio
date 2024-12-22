import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoFigma,
} from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandSolidjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";

export const techStack = [
  {
    icons: <IoLogoHtml5 size={20} className="group-hover:text-primaryAccent" />,
    name: "HTML",
  },
  {
    icons: <IoLogoCss3 size={20} className="group-hover:text-primaryAccent" />,
    name: "CSS",
  },
  {
    icons: (
      <IoLogoJavascript size={20} className="group-hover:text-primaryAccent" />
    ),
    name: "JavaScript",
  },
  {
    icons: (
      <BiLogoTypescript size={20} className="group-hover:text-primaryAccent" />
    ),
    name: "TypeScript",
  },
  {
    icons: <IoLogoReact size={20} className="group-hover:text-primaryAccent" />,
    name: "React JS",
  },
  {
    icons: (
      <RiNextjsFill size={20} className="group-hover:text-primaryAccent" />
    ),
    name: "Next JS",
  },
  {
    icons: (
      <TbBrandSolidjs size={20} className="group-hover:text-primaryAccent" />
    ),
    name: "Solid JS",
  },
  {
    icons: (
      <RiTailwindCssFill size={20} className="group-hover:text-primaryAccent" />
    ),
    name: "Tailwind CSS",
  },
  {
    icons: <SiRedux size={20} className="group-hover:text-primaryAccent" />,
    name: "Redux",
  },
  {
    icons: <IoLogoFigma size={20} className="group-hover:text-primaryAccent" />,
    name: "Figma",
  },
];
