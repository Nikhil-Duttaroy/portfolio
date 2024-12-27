"use client";
import React from "react";
import Card from "./Card/Card.component";
import { FaBriefcase } from "react-icons/fa";
import { projectDetails } from "../Utils/projectsDetails";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import CardTitle from "./Card/CardTitle.component";
import CardList from "./Card/CardList.component";

const ProjectsCard = () => {
  return (
    <Card className="col-span-6 row-span-6 col-start-8 row-start-1 flex flex-col items-center gap-8">
      <CardTitle title="Projects" icon={FaBriefcase} />
      <CardList
        items={projectDetails}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto overflow-x-hidden w-full"
        renderItem={(project) => (
          <a
            key={project.name}
            href={project.siteLink}
            target="_blank"
            className="border border-primaryBorder text-primaryForeground px-2 py-2 rounded-3xl flex flex-col justify-start items-center gap-4 group "
          >
            <Image
              src={project.imgLink}
              alt={project.name}
              width={100}
              height={100}
              className="object-cover rounded-3xl aspect-[16/9]"
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <div className="flex flex-col gap-2 items-center">
              <span className="text-primaryForeground text-base lg:text-xl font-semibold">
                {project.name}
              </span>
              <button
                className="bg-secondaryBackground px-4 py-1 rounded-3xl flex items-center gap-2 w-fit"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                <FaGithub size={16} />
                Github
              </button>
            </div>
          </a>
        )}
      />
    </Card>
  );
};

export default ProjectsCard;
