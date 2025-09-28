import { Link } from "react-router-dom";
import React from "react";
import { twMerge } from "tailwind-merge";

type HistoryPropsInterface = {
  name: string;
  link: string;
  className?: string;
  icon: string | React.ReactNode;
  releaseDate: string;
  description: string;
  children: React.ReactNode | null;
};

const HistoryItem = ({
  name,
  link,
  icon,
  className,
  releaseDate,
  description,
  children,
}: HistoryPropsInterface) => {
  return (
    <li className="mb-10 ltr:ml-[50px] rtl:mr-[50px] max-w-[720px]">
      <span
        className={twMerge(
          "absolute flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full ltr:-left-[25px] ltr:right-[unset] rtl:-right-[25px] rtl:left-[unset] ring-8 ring-white",
          className
        )}
      >
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-contain rounded-full"
          />
        ) : (
          icon
        )}
      </span>
      <Link to={link} className="link link-hover">
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
          {name}{" "}
        </h3>
      </Link>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
        {releaseDate}
      </time>
      <p className="max-w-[600px] mb-4 text-base font-normal text-gray-500">
        {description}
      </p>
      <div className="flex gap-x-4 items-center">{children}</div>
    </li>
  );
};

export default HistoryItem;
