import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextShimmerProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number; // seconds
};

export function TextShimmer({
  children,
  className,
  duration = 1.5,
}: TextShimmerProps) {
  return (
    <motion.span
      className={cn("bg-clip-text text-transparent", className)}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.2) 100%)",
        backgroundSize: "200% 100%",
        display: "inline-block",
      }}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
}
