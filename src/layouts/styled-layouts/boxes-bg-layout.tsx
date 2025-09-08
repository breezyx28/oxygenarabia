"use client";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export function BackgroundBoxesLayout({
  title,
  subtitle,
  className,
  containerClassName,
}: {
  title: string;
  subtitle: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={twMerge(
        "h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg",
        className
      )}
    >
      <div
        className={twMerge(
          "absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:linear-gradient(to_bottom,transparent_0%,white_100%)]",
          containerClassName
        )}
      />

      <Boxes />
      <motion.h1
        className={cn("md:text-5xl text-xl font-bold text-white relative z-20")}
      >
        {title || "...Loading"}
      </motion.h1>
      <motion.p className="text-center mt-2 text-neutral-300 relative z-20 max-w-2xl px-4 md:text-lg text-sm">
        {subtitle || "...Loading"}
      </motion.p>
    </div>
  );
}
