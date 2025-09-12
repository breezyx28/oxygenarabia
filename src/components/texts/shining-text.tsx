import { cn } from "@/lib/utils";
// @ts-ignore
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { twMerge } from "tailwind-merge";

export function AnimatedShinyText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        {/* @ts-ignore */}
        <AnimatedShinyText
          className={twMerge(
            "inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",
            className
          )}
        >
          {children}
        </AnimatedShinyText>
      </div>
    </div>
  );
}
