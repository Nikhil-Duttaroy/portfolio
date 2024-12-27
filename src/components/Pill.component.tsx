import React from "react";

interface PillProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
  url?: string;
}

const Pill = ({ icon: Icon, name, className, url }: PillProps) => {
  return url ? (
    <a
      key={name}
      href={url}
      target="_blank"
      className={`bg-secondaryBackground text-primaryForeground rounded-3xl flex  group ${className}`}
    >
      {Icon}
      <span>{name}</span>
    </a>
  ) : (
    <div
      key={name}
      className={`bg-secondaryBackground text-primaryForeground rounded-3xl flex  group ${className}`}
    >
      {Icon}
      <span>{name}</span>
    </div>
  );
};

export default Pill;
