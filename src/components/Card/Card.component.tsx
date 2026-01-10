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

  // Spotlight Effect
  const divRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return isMobile ? (
    <div
      className={`bg-primaryBackground text-primaryForeground rounded-3xl p-4 border border-primaryBorder lg:overflow-hidden lg:overflow-y-auto ${className}`}
    >
      {children}
    </div>
  ) : (
    <MotionDiv
      ref={divRef}
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      }}
      className={`relative bg-primaryBackground text-primaryForeground rounded-3xl p-4 border border-primaryBorder lg:overflow-hidden lg:overflow-y-auto ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(145, 108, 231, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </MotionDiv>
  );
};

export default Card;
