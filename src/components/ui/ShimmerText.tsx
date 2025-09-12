import React from "react";

interface ShimmerTextProps {
  className?: string;
  children: React.ReactNode;
  /** Duration of the shimmer animation in seconds (default: 2s) */
  duration?: number;
}

const ShimmerText: React.FC<ShimmerTextProps> = ({
  className,
  children,
  duration = 2,
}) => {
  return (
    <span
      style={{
        animationDuration: `${duration}s`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", // ✅ forces clip inside text glyphs
      }}
      className={`inline-block 
                  bg-gradient-to-r from-blue-500 via-white/40 to-blue-500
                  bg-[length:200%_100%] 
                  animate-shimmer 
                  ${className}`}
    >
      {children}
    </span>
  );
};

export default ShimmerText;
