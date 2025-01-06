import React, { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

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

const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  {
    ssr: false, // Disable server-side rendering for motion
  }
);

const Card = ({ className, type, children }: cardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return isMobile ? (
    <div
      className={`bg-primaryBackground text-primaryForeground rounded-3xl p-4 border border-primaryBorder lg:overflow-hidden lg:overflow-y-auto ${className}`}
    >
      {children}
    </div>
  ) : (
    <MotionDiv
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
    </MotionDiv>
  );
};

export default Card;
