"use client";
import React from "react";
import Card from "./Card/Card.component";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { connectLinks } from "../Utils/connectLinks";
import CardTitle from "./Card/CardTitle.component";
import CardList from "./Card/CardList.component";
import Pill from "./Pill.component";

const ConnectCard = () => {
  return (
    <Card className="col-span-6 row-span-2 col-start-8 row-start-7 flex flex-col gap-6  justify-center ">
      <CardTitle title="Your Vision, My Code" icon={HiMiniSquare3Stack3D} />
      <CardList
        items={connectLinks}
        className="flex flex-col lg:flex-row w-full justify-center"
        renderItem={(item) => (
          <Pill
            key={item.name}
            icon={item.icons}
            name={item.name}
            className="px-6 py-2 justify-center items-center gap-4 hover:text-primaryAccent hover:outline hover:outline-primaryAccent"
            url={item.url}
          />
        )}
      />
    </Card>
  );
};

export default ConnectCard;
