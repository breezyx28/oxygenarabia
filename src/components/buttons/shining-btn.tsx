"use client";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { twMerge } from "tailwind-merge";

export function HoverBorderGradientDemo({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className={twMerge(className)}
    >
      {children}
    </HoverBorderGradient>
  );
}
