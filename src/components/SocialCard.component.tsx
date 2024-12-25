import React from "react";
import Card from "./Card.component";
import { socialLinks } from "../Utils/socialLinks";
import { FaRocket } from "react-icons/fa";

const SocialCard = () => {
  return (
    <Card className="col-span-4 row-span-3 col-start-4 row-start-7 flex flex-col gap-8 ">
      <h1 className="text-primaryForeground font-bold text-lg flex items-center gap-2 self-center">
        <FaRocket className="text-primaryAccent" size={24} />
        Online Presence
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all cursor-default w-fit self-center">
        {socialLinks.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            className="bg-secondaryBackground text-primaryForeground px-8 py-2 rounded-3xl flex justify-start items-center gap-4 group"
          >
            {tech.icons}
            <span>{tech.name}</span>
          </a>
        ))}
      </div>
    </Card>
  );
};

export default SocialCard;
