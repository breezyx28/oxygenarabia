import React from "react";
import { animate, useMotionValue, useTransform } from "motion/react";

type SpringOptions = {
  bounce?: number;
  duration?: number; // milliseconds or seconds
};

type AnimatedNumberProps = {
  value: number | string;
  duration?: number; // legacy support (ms or s)
  springOptions?: SpringOptions;
  className?: string;
};

export function AnimatedNumber({
  value,
  duration,
  springOptions,
  className,
}: AnimatedNumberProps) {
  const numericPart = React.useMemo(() => {
    const match = String(value).match(/[-+]?[0-9]*\.?[0-9]+/);
    return match ? parseFloat(match[0]) : 0;
  }, [value]);

  const suffix = React.useMemo(
    () => String(value).replace(String(numericPart), ""),
    [value, numericPart]
  );

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    const isFloat = String(numericPart).includes(".");
    return isFloat
      ? Number(latest).toFixed(1)
      : Math.round(Number(latest)).toString();
  });

  React.useEffect(() => {
    const rawDuration = springOptions?.duration ?? duration ?? 1000;
    const seconds = rawDuration > 20 ? rawDuration / 1000 : rawDuration;
    const controls = animate(motionValue, numericPart, {
      type: "spring",
      bounce: springOptions?.bounce ?? 0,
      duration: seconds,
    });
    return controls.stop;
  }, [
    numericPart,
    motionValue,
    springOptions?.bounce,
    springOptions?.duration,
    duration,
  ]);

  return (
    <span className={className}>
      <span>
        {/* @ts-ignore motion value stringify */}
        {rounded as unknown as string}
      </span>
      {suffix}
    </span>
  );
}
