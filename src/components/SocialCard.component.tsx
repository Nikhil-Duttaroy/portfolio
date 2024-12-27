import React from "react";
import Card from "./Card/Card.component";
import { socialLinks } from "../Utils/socialLinks";
import { FaRocket } from "react-icons/fa";
import CardTitle from "./Card/CardTitle.component";
import CardList from "./Card/CardList.component";

const SocialCard = () => {
  return (
    <Card className="col-span-4 row-span-3 col-start-4 row-start-7 flex flex-col gap-8 ">
      <CardTitle title="Online Presence" icon={FaRocket} />
      <CardList
        items={socialLinks}
        className="grid grid-cols-1 md:grid-cols-2 w-fit self-center"
        renderItem={(tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            className="bg-secondaryBackground text-primaryForeground px-8 py-2 rounded-3xl flex justify-start items-center gap-4 group"
          >
            {tech.icons}
            <span>{tech.name}</span>
          </a>
        )}
      />
    </Card>
  );
};

export default SocialCard;
