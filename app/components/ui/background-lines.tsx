"use client";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "next-themes";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div
      className={cn(
        "h-[20rem] md:h-screen w-full bg-muted dark:bg-muted",
        className
      )}
    >
      <CircuitBoard svgOptions={svgOptions} />
      {children}
    </div>
  );
};

const CircuitBoard = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number;
  };
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const strokeColor = !mounted ? "currentColor" : theme === "dark" ? "#00ff41" : "#00ff41";

  // Circuit board pattern paths
  const circuitPaths = [
    // Horizontal circuit lines
    "M0 100 L1440 100",
    "M0 200 L1440 200", 
    "M0 300 L1440 300",
    "M0 400 L1440 400",
    "M0 500 L1440 500",
    "M0 600 L1440 600",
    "M0 700 L1440 700",
    "M0 800 L1440 800",
    
    // Vertical circuit lines
    "M100 0 L100 900",
    "M200 0 L200 900",
    "M300 0 L300 900",
    "M400 0 L400 900",
    "M500 0 L500 900",
    "M600 0 L600 900",
    "M700 0 L700 900",
    "M800 0 L800 900",
    "M900 0 L900 900",
    "M1000 0 L1000 900",
    "M1100 0 L1100 900",
    "M1200 0 L1200 900",
    "M1300 0 L1300 900",
    
    // Diagonal connections
    "M100 100 L200 200",
    "M300 100 L400 200",
    "M500 100 L600 200",
    "M700 100 L800 200",
    "M900 100 L1000 200",
    "M1100 100 L1200 200",
    "M1300 100 L1340 200",
    
    "M200 200 L300 300",
    "M400 200 L500 300",
    "M600 200 L700 300",
    "M800 200 L900 300",
    "M1000 200 L1100 300",
    "M1200 200 L1300 300",
    
    // More complex circuit patterns
    "M100 300 L200 300 L200 400 L300 400",
    "M400 300 L500 300 L500 400 L600 400",
    "M700 300 L800 300 L800 400 L900 400",
    "M1000 300 L1100 300 L1100 400 L1200 400",
    
    "M200 500 L300 500 L300 600 L400 600",
    "M500 500 L600 500 L600 600 L700 600",
    "M800 500 L900 500 L900 600 L1000 600",
    "M1100 500 L1200 500 L1200 600 L1300 600",
    
    // Binary code pattern
    "M50 50 L60 50 L60 60 L50 60 Z", // 1
    "M70 50 L80 50 L80 60 L70 60 Z", // 1
    "M90 50 L100 50 L100 60 L90 60 Z", // 1
    "M110 50 L120 50 L120 60 L110 60 Z", // 0
    "M130 50 L140 50 L140 60 L130 60 Z", // 0
    "M150 50 L160 50 L160 60 L150 60 Z", // 1
  ];

  if (!mounted) {
    return null;
  }

  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      {circuitPaths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            duration: svgOptions?.duration || 3,
            ease: "easeInOut",
            delay: idx * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          key={`circuit-${idx}`}
        />
      ))}
      
      {/* Circuit nodes */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={Math.random() * 1440}
          cy={Math.random() * 900}
          r="2"
          fill={strokeColor}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{
            duration: 1,
            delay: i * 0.05,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.svg>
  );
};
