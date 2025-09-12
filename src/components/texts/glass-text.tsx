import React from "react";

interface GlassTextProps {
  className?: string;
  children: React.ReactNode;
  /** Duration of the liquid glass animation in seconds (default: 6s) */
  duration?: number;
}

const GlassText: React.FC<GlassTextProps> = ({
  className,
  children,
  duration = 6,
}) => {
  return (
    <span
      style={{
        animationDuration: `${duration}s`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", // keeps glass effect inside text
      }}
      className={`relative inline-block 
        bg-[length:300%_300%]
        bg-gradient-to-r 
        from-white/70 via-blue-200/40 to-white/60
        animate-glass 
        ${className}`}
    >
      {children}
    </span>
  );
};

export default GlassText;
