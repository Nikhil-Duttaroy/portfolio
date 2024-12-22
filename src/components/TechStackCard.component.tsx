import React from "react";
import Card from "./Card.component";
import { techStack } from "../Utils/techStack";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";

const TechStackCard = () => {
  return (
    <Card className="col-span-3 row-span-full flex flex-col items-center gap-8">
      <h1 className="text-primaryForeground font-bold text-lg flex items-center gap-2">
        <HiMiniSquare3Stack3D className="text-primaryAccent" size={24} />
        Tech Arsenal
      </h1>
      <div className="grid grid-cols-1 gap-4 transition-all cursor-default ">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="bg-secondaryBackground text-primaryForeground px-8 py-2 rounded-3xl flex justify-start items-center gap-4 group"
          >
            {tech.icons}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TechStackCard;
