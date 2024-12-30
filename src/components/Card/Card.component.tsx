import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Card = ({ className, children }: Props) => {
  return (
    <div
      className={`bg-primaryBackground text-primaryForeground rounded-3xl p-4 border border-primaryBorder lg:overflow-hidden lg:overflow-y-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
