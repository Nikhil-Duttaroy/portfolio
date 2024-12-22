import React from "react";
import CounterCard from "./CounterCard.component";
import { SlCalender } from "react-icons/sl";

const ExperienceCounter = () => {
  return <CounterCard count={3} icon={SlCalender} label="Years" />;
};

export default ExperienceCounter;
