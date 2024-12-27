import React from "react";
import Card from "./Card/Card.component";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { introTags } from "../Utils/introTags";
const IntroCard = () => {
  return (
    <Card className="col-span-4 row-span-4 col-start-4 row-start-3 flex flex-col">
      <div className=" w-full flex gap-4">
        <Image
          src="/assets/Nikhil.jpeg"
          alt="Profile Picture"
          width={100}
          height={100}
          className="object-cover w-[35%] aspect-square rounded-3xl"
          priority
        />
        <div className="flex flex-col my-2 justify-between gap-2 md:gap-0">
          <div className="text-secondaryForeground text-xs flex items-center justify-between gap-2">
            <div className="flex justify-center items-center gap-2 text-xs md:text-sm">
              <span className="bg-green-500 size-2 rounded-full "></span>
              Avaialble to Work
            </div>
            <a href="/Nikhil_Duttaroy.pdf" download>
              <FaDownload
                size={16}
                className="text-primaryAccent cursor-pointer"
              />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl md:text-2xl">Nikhil Duttaroy</h1>
            <span className="text-primaryForeground text-sm">
              I&apos;m a{" "}
              <span className="text-primaryAccent font-medium">
                Software Developer{" "}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap my-4 gap-2">
        {introTags.map((tag) => (
          <div
            key={tag.name}
            className="bg-secondaryBackground text-primaryForeground rounded-3xl flex justify-start items-center gap-2 w-fit px-2 py-1"
          >
            {tag.icons}
            <span className="text-xs md:text-sm">{tag.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default IntroCard;
