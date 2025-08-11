import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  React.useEffect(() => {
    gsap.to(".partner-title", {
      scrollTrigger: {
        trigger: ".partners",
      },
      bottom: 0,
      opacity: 1,
      duration: 1.4,
    });

    gsap.to(".gsap-partner-companies", {
      scrollTrigger: {
        trigger: ".partners",
      },
      opacity: 1,
      bottom: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      id="partners"
      className="partners relative bg-slate-50 w-full h-full min-h-[90px] py-[3rem]"
    >
      <div className="partners-wrapper w-full flex flex-col gap-y-6 items-center">
        {/* <div className="gsap-from-bottom partner-title text-2xl text-slate-600 font-semibold capitalize">
          our partners
        </div> */}
        <div className="w-full h-full flex flex-wrap md:gap-x-[100px] md:p-0 p-6 gap-8 justify-center items-center md:justify-center">
          {/* <div className="w-full md:max-h-[300px] h-auto flex flex-wrap md:gap-x-[100px] gap-[50px] md:p-0 p-6 items-center md:justify-center"> */}
          {partners?.map((item: any) => (
            <div
              key={item.id}
              className="gsap-partner-companies gsap-from-bottom"
            >
              <img
                className="grayscale duration-100 ease-in hover:grayscale-0 opacity-60 hover:opacity-100"
                src={item.src}
                alt={item.alt}
                width={item.width / 1.5}
                height={item.height / 1.5}
              />
            </div>
          ))}
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
