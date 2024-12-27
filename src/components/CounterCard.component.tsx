import React from "react";
import Card from "./Card/Card.component";
import { FaPlus } from "react-icons/fa";

interface CounterCardProps {
  count: number; // The count to display
  icon: React.ComponentType<{ className?: string; size?: number }>; // The icon component
  label: string; // The label for the counter
}

const CounterCard = ({ count, icon: Icon, label }: CounterCardProps) => {
  return (
    <Card className="col-span-2 row-span-2 flex flex-col justify-around items-center">
      <div className="flex justify-center items-center gap-2">
        <h1 className="text-7xl">{count}</h1>
        <FaPlus className="text-primaryAccent" />
      </div>
      <span className="flex justify-center items-center gap-2 text-sm">
        <Icon size={18} className="text-primaryAccent" />
        {label}
      </span>
    </Card>
  );
};

export default CounterCard;
