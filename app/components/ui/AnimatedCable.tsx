"use client";
import { motion } from "framer-motion";
import React from "react";

const cablePath =
  "M 0 60 Q 150 0 300 60 T 600 60 T 900 60 T 1200 60 T 1440 60";

export const AnimatedCable = ({
  className = "",
  color = "#00ff41",
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <motion.svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-32 pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.path
        d={cablePath}
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Glowing effect */}
      <motion.path
        d={cablePath}
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
        style={{ filter: "blur(6px)", opacity: 0.3 }}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default AnimatedCable;