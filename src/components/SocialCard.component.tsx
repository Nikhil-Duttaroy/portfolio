import React from "react";
import Card from "./Card/Card.component";
import { socialLinks } from "../Utils/socialLinks";
import { FaRocket } from "react-icons/fa";
import CardTitle from "./Card/CardTitle.component";
import CardList from "./Card/CardList.component";
import Pill from "./Pill.component";

const SocialCard = () => {
  return (
    <Card className="col-span-4 row-span-3 col-start-4 row-start-7 flex flex-col items-center gap-6  justify-center">
      <CardTitle title="Online Presence" icon={FaRocket} />
      <CardList
        items={socialLinks}
        className="grid grid-cols-1 lg:grid-cols-2 landscapes:grid-cols-2 "
        renderItem={(social) => (
          <Pill
            key={social.name}
            icon={social.icons}
            name={social.name}
            className="px-6 py-2 justify-center items-center gap-4 w-full hover:text-primaryAccent hover:outline hover:outline-primaryAccent"
            url={social.url}
          />
        )}
      />
    </Card>
  );
};

export default SocialCard;
