import React from "react";

interface CardTitleProps {
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  size?: number;
}

const CardTitle = ({ title, icon: Icon, size = 24 }: CardTitleProps) => {
  return (
    <h1 className="text-primaryForeground font-bold text-lg flex items-center gap-2 self-center ">
      <Icon className="text-primaryAccent" size={size} />
      {title}
    </h1>
  );
};

export default CardTitle;
