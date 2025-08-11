import servicesAnimation from "../../helper/animations/servicesAnimation";
import React, { ReactNode } from "react";

interface ServiceCard {
  children: ReactNode;
  title: string;
  description: string;
  list: string[];
}

const ServiceCard = (props: ServiceCard) => {
  React.useEffect(() => {
    servicesAnimation();
  }, []);

  return (
    <div className="relative gsap-services-from service-item flex flex-col gap-3 items-start md:gap-x-8 gap-x-4 p-4 max-h-auto">
      <div className="service-icon p-3 rounded-[20px] bg-blue-50">
        {props.children}
      </div>
      <div className="service-description flex flex-col justify-around gap-2">
        <span className="text-slate-700 text-lg font-semibold">
          {props.title}
        </span>
        {/* <span className="text-slate-400 text-sm">{props.description}</span> */}
        <ul className="flex flex-col gap-2">
          {props.list?.map((item: string, index: number) => (
            <li
              className="flex items-center gap-2"
              key={"services-list-" + index}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary w-[16px] h-[16px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <span className="text-xs text-gray-500">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
