import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "subtle" | "strong";
  hover?: boolean;
}

const variants = {
  default: "bg-white/10 backdrop-blur-lg border border-white/20",
  subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
  strong: "bg-white/15 backdrop-blur-md border border-white/30",
};

export function GlassCard({ 
  children, 
  className, 
  variant = "default", 
  hover = false,
  ...motionProps 
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        variants[variant],
        hover && "hover:bg-white/15 transition-all duration-300",
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}