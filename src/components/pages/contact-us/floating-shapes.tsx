import React from "react";
import { motion } from "motion/react";

export const FloatingShapes: React.FC = () => {
  const shapes = [
    {
      id: 1,
      size: "w-20 h-20",
      position: "top-20 left-10",
      duration: 6,
      delay: 0,
      color: "from-[#1f70c1]/20 to-[#1557a3]/30",
    },
    {
      id: 2,
      size: "w-16 h-16",
      position: "top-40 right-20",
      duration: 8,
      delay: 1,
      color: "from-blue-400/20 to-indigo-400/30",
    },
    {
      id: 3,
      size: "w-12 h-12",
      position: "bottom-40 left-20",
      duration: 7,
      delay: 2,
      color: "from-[#1f70c1]/15 to-purple-400/25",
    },
    {
      id: 4,
      size: "w-14 h-14",
      position: "bottom-20 right-16",
      duration: 9,
      delay: 0.5,
      color: "from-cyan-400/20 to-[#1f70c1]/30",
    },
    {
      id: 5,
      size: "w-8 h-8",
      position: "top-1/3 left-1/4",
      duration: 5,
      delay: 1.5,
      color: "from-[#1557a3]/25 to-blue-300/35",
    },
    {
      id: 6,
      size: "w-10 h-10",
      position: "top-2/3 right-1/3",
      duration: 10,
      delay: 3,
      color: "from-indigo-300/20 to-[#1f70c1]/25",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.position} bg-gradient-to-br ${shape.color} rounded-2xl blur-sm`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric patterns */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[#1f70c1]/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-dashed border-indigo-200/40"
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(31,112,193,0.03)_1px,_transparent_0)] bg-[length:50px_50px]" />
    </div>
  );
};
