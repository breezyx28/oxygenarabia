// import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { InfiniteSlider } from "@/components/core/infinite-slider";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  return (
    <section
      id="partners"
      className="partners relative w-full h-full min-h-[90px] py-[3rem]"
    >
      <div className="partners-wrapper w-full flex flex-col gap-y-6 items-center">
        <div className="w-full h-full flex flex-wrap md:p-0 p-6 justify-evenly items-center relative">
          <div className="relative w-full overflow-hidden">
            {/* Left fade overlay */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            {/* Right fade overlay */}
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <InfiniteSlider speedOnHover={20} gap={100}>
              {partners?.map((item: any) => (
                <div key={item.id} className="flex items-center">
                  <img
                    className="grayscale brightness-100 duration-100 ease-in hover:grayscale-0 hover:brightness-100 opacity-60 hover:opacity-100 md:scale-100 scale-75 cursor-pointer"
                    src={item.src}
                    alt={item.alt}
                    width={item.width / 2}
                    height={item.height / 2}
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

let partners = [
  {
    id: 1,
    alt: "صفوت المهيدب",
    width: "180",
    height: "80",
    src: "/icons/companies/safwa-almeheadeb.png",
  },
  {
    id: 2,
    alt: "Zain",
    width: "180",
    height: "77",
    src: "/icons/companies/zain_text.png",
  },
  {
    id: 3,
    alt: "MTN",
    width: "137",
    height: "137",
    src: "/icons/companies/mtn.png",
  },
  {
    id: 4,
    alt: "Mastery Gulf",
    width: "137",
    height: "137",
    src: "/icons/companies/Mastery-Gulf.png",
  },
  {
    id: 5,
    alt: "OZ",
    width: "150",
    height: "150",
    src: "/icons/companies/oz.png",
  },
  {
    id: 6,
    alt: "Solar",
    width: "175",
    height: "175",
    src: "/icons/companies/solar.png",
  },
];

export default Partners;
