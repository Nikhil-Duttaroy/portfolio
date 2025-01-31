import React from "react";
import Card from "./Card/Card.component";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { introTags } from "../Utils/introTags";
import Pill from "./Pill.component";
import { motion } from "motion/react";
import profilePic from "../../public/assets/Nikhil.jpeg";

const IntroCard = () => {
  const text = "Software Developer".split("");
  return (
    <Card
      className="col-span-4 row-span-4 col-start-4 row-start-3 flex flex-col"
      type="intro"
    >
      <div className=" w-full flex gap-4">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={100}
          height={100}
          className="object-cover w-[35%] aspect-square rounded-full"
          priority
          placeholder="blur"
        />
        <div className="flex flex-col my-2 justify-between gap-2 lg:gap-0">
          <div className="text-secondaryForeground text-xs flex items-center justify-between gap-2">
            <div className="flex justify-center items-center gap-2 text-xs lg:text-sm">
              <span className="bg-green-500 size-2 rounded-full "></span>
              Avaialble to Work
            </div>
            <a
              href="/Nikhil_Duttaroy.pdf"
              download
              className="bg-secondaryBackground px-2 py-1 rounded-md border border-primaryBorder hover:border-primaryAccent transition-all"
            >
              <FaDownload
                size={16}
                className="text-primaryAccent cursor-pointer"
              />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl lg:text-2xl">Nikhil Duttaroy</h1>
            <span className="text-primaryForeground text-sm">
              I&apos;m a{" "}
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.7 + i / 10,
                  }}
                  key={i}
                  className="text-primaryAccent font-medium"
                >
                  {el}
                </motion.span>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap my-4 gap-2">
        {introTags.map((tag) => (
          <Pill
            key={tag.name}
            icon={tag.icons}
            name={tag.name}
            className="justify-start items-center w-fit px-2 py-1 gap-2"
          />
        ))}
      </div>
    </Card>
  );
};

export default IntroCard;
