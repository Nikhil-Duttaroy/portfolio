import React from "react";
import Card from "./Card/Card.component";
import { techStack } from "../Utils/techStack";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import CardTitle from "./Card/CardTitle.component";
import CardList from "./Card/CardList.component";

const TechStackCard = () => {
  return (
    <Card className="col-span-3 row-span-full flex flex-col items-center gap-8">
      <CardTitle title="Tech Arsenal" icon={HiMiniSquare3Stack3D} />
      <CardList
        items={techStack}
        className="grid grid-cols-1"
        renderItem={(item) => (
          <div
            key={item.name}
            className="bg-secondaryBackground text-primaryForeground px-8 py-2 rounded-3xl flex justify-start items-center gap-4 group"
          >
            {item.icons}
            <span>{item.name}</span>
          </div>
        )}
      />
    </Card>
  );
};

export default TechStackCard;
