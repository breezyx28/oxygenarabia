import { twMerge } from "tailwind-merge";

export const ServiceCard = ({
  title,
  subtitle,
  icon,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={twMerge(
        "group p-4 lg:p-6 rounded-[24px] flex flex-col gap-y-4 lg:gap-y-6 bg-gray-50 hover:bg-blue-600 transition cursor-pointer",
        className
      )}
    >
      <div className="card-icon rounded-full w-[fit-content] p-[1rem] bg-blue-100 flex items-center justify-center transition">
        {icon}
      </div>
      <div className="card-details flex flex-col gap-y-2 lg:gap-y-4">
        <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-white transition">
          {title}
        </h3>
        <p className="text-xs lg:text-sm text-gray-500 group-hover:text-white transition">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

// Icon mapping for each card type
// const cardIcons: Record<
//   "mission" | "vision" | "values" | "why" | "goals" | "vision2030",
//   React.ReactNode
// > = {
//   mission: <Target className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
//   vision: <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
//   values: <Star className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
//   why: <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
//   goals: <Award className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
//   vision2030: <Globe2 className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
// };
