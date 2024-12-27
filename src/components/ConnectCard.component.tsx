"use client";
import React from "react";
import Card from "./Card/Card.component";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { connectLinks } from "../Utils/connectLinks";
import CardTitle from "./Card/CardTitle.component";
import CardList from "./Card/CardList.component";

const ConnectCard = () => {
  return (
    <Card className="col-span-6 row-span-2 col-start-8 row-start-7 flex flex-col gap-8">
      <CardTitle title="Let's Work Together " icon={HiMiniSquare3Stack3D} />
      <CardList
        items={connectLinks}
        className="grid grid-cols-2"
        renderItem={(item) => (
          <div
            key={item.name}
            className="bg-secondaryBackground text-primaryForeground px-8 py-2 rounded-3xl flex justify-start items-center gap-4 group"
          >
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                className="flex justify-center items-center gap-4"
              >
                {item.icons}
                <span>{item.name}</span>
              </a>
            ) : (
              <>
                {item.icons}
                {item.name}
              </>
            )}
          </div>
        )}
      />
    </Card>
  );
};

export default ConnectCard;
