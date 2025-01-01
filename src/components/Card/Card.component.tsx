import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface cardProps {
  className?: string;
  type?:
    | "tech"
    | "intro"
    | "social"
    | "connect"
    | "projects"
    | "counter"
    | "joke";
  children?: ReactNode;
}

const Card = ({ className, type, children }: cardProps) => {
  const animations = {
    tech: { x: ["-100%", 0], opacity: [0, 1] },
    intro: { opacity: [0, 1], scale: [0, 1] },
    social: { y: ["100%", 0], opacity: [0, 1] },
    connect: { x: ["100%", 0], opacity: [0, 1] },
    projects: { x: ["100%", 0], opacity: [0, 1] },
    counter: { y: ["-100%", 0], opacity: [0, 1] },
    joke: { x: ["100%", 0], opacity: [0, 1] },
    default: { opacity: [0, 1], scale: [0, 1] },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={animations[type || "default"]}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      }}
      className={`bg-primaryBackground text-primaryForeground rounded-3xl p-4 border border-primaryBorder lg:overflow-hidden lg:overflow-y-auto ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
