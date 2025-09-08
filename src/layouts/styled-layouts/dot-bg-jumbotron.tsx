import { cn } from "@/lib/utils";

export function DotBackgroundJumbotron({ title }: { title: string }) {
  return (
    <div className="relative flex h-[60vh] w-full items-center justify-center bg-primary">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
          //   "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 text-white py-8 text-4xl font-bold  sm:text-7xl">
        {title}
      </p>
    </div>
  );
}
