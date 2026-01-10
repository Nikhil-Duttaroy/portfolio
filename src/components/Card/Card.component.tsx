"use client";

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

  const variants = {
    tech: { initial: { x: "-100%", opacity: 0 }, animate: { x: 0, opacity: 1 } },
    intro: { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
    social: { initial: { y: "100%", opacity: 0 }, animate: { y: 0, opacity: 1 } },
    connect: { initial: { x: "100%", opacity: 0 }, animate: { x: 0, opacity: 1 } },
    projects: {
      initial: { x: "100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    counter: {
      initial: { y: "-100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    joke: { initial: { x: "100%", opacity: 0 }, animate: { x: 0, opacity: 1 } },
    default: { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  };

  const selectedVariant = variants[type || "default"];

  return isMobile ? (
    <div
      className={`bg-primaryBackground text-primaryForeground rounded-3xl p-4 border border-primaryBorder lg:overflow-hidden lg:overflow-y-auto ${className}`}
    >
      {children}
    </div>
  ) : (
    <MotionDiv
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      whileHover={{ scale: 1.02 }}
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
