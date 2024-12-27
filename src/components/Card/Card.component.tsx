import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Card = ({ className, children }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
      className={`bg-primaryBackground text-primaryForeground rounded-3xl p-4 border border-primaryBorder ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
