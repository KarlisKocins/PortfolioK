"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import React from "react";

const cablePath =
  "M 0 60 Q 150 0 300 60 T 600 60 T 900 60 T 1200 60 T 1440 60";

export const AnimatedCable = ({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use provided color or theme-aware color
  const strokeColor = color
    ? color
    : !mounted
    ? "currentColor"
    : theme === "dark"
    ? "#38bdf8" // Tailwind sky-400 (light blue)
    : "#0ea5e9"; // Tailwind sky-600 (darker blue)

  return mounted ? (
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
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Optionally, add glowing effect */}
      <motion.path
        d={cablePath}
        stroke={strokeColor}
        strokeWidth="12"
        strokeLinecap="round"
        style={{ filter: "blur(6px)", opacity: 0.3 }}
        initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  ) : null;
};

export default AnimatedCable; 