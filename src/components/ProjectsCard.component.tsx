"use client";
import React from "react";
import Card from "./Card.component";
import { FaBriefcase } from "react-icons/fa";
import { projectDetails } from "../Utils/projectsDetails";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const ProjectsCard = () => {
  return (
    <Card className="col-span-6 row-span-6 col-start-8 row-start-1 flex flex-col items-center gap-8">
      <h1 className="text-primaryForeground font-bold text-lg flex items-center gap-2">
        <FaBriefcase className="text-primaryAccent" size={24} />
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 transition-all cursor-default overflow-y-auto">
        {projectDetails.map((project) => (
          <a
            key={project.name}
            href={project.siteLink}
            target="_blank"
            className=" border border-primaryBorder text-primaryForeground px-8 py-2 rounded-3xl flex justify-start items-center gap-4 group"
          >
            <Image
              src={project.imgLink}
              alt={project.name}
              width={100}
              height={100}
              className="object-cover rounded-3xl aspect-square "
              priority
            />
            <div className="flex flex-col gap-2">
              <span className="text-primaryForeground">{project.name}</span>
              <button
                className="bg-secondaryBackground px-4 py-1 rounded-3xl flex items-center gap-2 w-fit"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                <FaGithub size={16} />
                Github Link
              </button>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
};

export default ProjectsCard;
