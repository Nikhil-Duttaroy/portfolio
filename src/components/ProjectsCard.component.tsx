"use client";
import React from "react";
import Card from "./Card/Card.component";
import { FaBriefcase } from "react-icons/fa";
import { projectDetails } from "../Utils/projectsDetails";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";

import CardTitle from "./Card/CardTitle.component";
import CardList from "./Card/CardList.component";
import Pill from "./Pill.component";

const ProjectsCard = () => {
  return (
    <Card className="col-span-6 row-span-6 col-start-8 row-start-1 flex flex-col items-center gap-8">
      <CardTitle title="Projects" icon={FaBriefcase} />
      <CardList
        items={projectDetails}
        className="grid grid-cols-1 lg:grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden w-full"
        renderItem={(project) => (
          <div
            key={project.name}
            className="border border-primaryBorder text-primaryForeground px-2 py-2 rounded-3xl flex flex-col lg:flex-row justify-start items-start gap-4"
          >
            <Image
              src={project.imgLink}
              alt={project.name}
              width={100}
              height={100}
              className="object-cover rounded-3xl aspect-viedo self-center w-full lg:w-auto"
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <div className="flex flex-col gap-2 items-center justify-around h-full w-full">
              <div className="text-primaryForeground text-base lg:text-xl font-semibold flex flex-col items-center lg:items-baseline">
                {project.name}
                <span className="text-secondaryForeground text-xs font-normal leading-3">
                  {project.description}
                </span>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-2">
                <Pill
                  name="Live Project"
                  url={project.siteLink}
                  icon={<FaGlobe />}
                  className="px-4 py-1 w-fit justify-center items-center gap-4 hover:text-primaryAccent hover:outline hover:outline-primaryAccent"
                />
                <Pill
                  name="Github"
                  url={project.githubLink}
                  icon={<FaGithub />}
                  className="px-4 py-1 w-fit justify-center items-center gap-4 hover:text-primaryAccent hover:outline hover:outline-primaryAccent"
                />
              </div>
            </div>
          </div>
        )}
      />
    </Card>
  );
};

export default ProjectsCard;
