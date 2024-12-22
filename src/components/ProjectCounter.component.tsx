import React from "react";
import CounterCard from "./CounterCard.component";
import { FaFlag } from "react-icons/fa";

const ProjectCounter = () => {
  return <CounterCard count={10} icon={FaFlag} label="Projects" />;
};

export default ProjectCounter;
