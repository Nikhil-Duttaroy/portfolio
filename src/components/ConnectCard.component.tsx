"use client";
import React from "react";
import Card from "./Card.component";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { connectLinks } from "../Utils/connectLinks";

const ConnectCard = () => {
  return (
    <Card className="col-span-6 row-span-2 col-start-8 row-start-7 flex flex-col gap-8">
      <h1 className="text-primaryForeground font-bold text-lg flex items-center gap-2 self-center">
        <HiMiniSquare3Stack3D className="text-primaryAccent" size={24} />
        Let&apos;s Work Together
      </h1>
      <div className="grid grid-cols-2 gap-4 transition-all cursor-default ">
        {connectLinks.map((item) => (
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
        ))}
      </div>
    </Card>
  );
};

export default ConnectCard;
