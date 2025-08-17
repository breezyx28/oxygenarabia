import React from "react";
import aboutAnimation from "../../helper/animations/aboutAnimation";
import { Link } from "react-router-dom";
// import CanvasPlayground from "@/components/3D/CanvasPlayground";
// import Object from "@/components/3D/Object";

const About = () => {
  React.useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <section
      id="about"
      className="section-container relative overflow-hidden z-20 flex flex-col h-full justify-center bg-primary md:py-[0] py-[70px]"
    >
      <div className="absolute pattern-wave z-10"></div>
      <div className="about-wrapper container px-6">
        <div className="grid grid-flow-cols md:grid-cols-2 grid-cols-1 w-full h-full">
          <div className="h-full flex flex-col gap-y-10">
            <div className="relative about-animation fade-left section-text">
              <span className="text-white text-5xl">About Us</span>
            </div>
            <div className="relative about-animation fade-left md:text-xl text-lg font-semibold text-white md:w-[60%] w-[90%]">
              The best reliable partner that meets your demands Information
            </div>
            <div className="about-description fade-left about-animation text-white text-sm md:w-[70%] w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, architecto commodi! Odio eaque, a enim at officiis
              placeat dolore ea corrupti corporis temporibus accusamus, quia,
              eveniet suscipit provident cumque blanditiis.
            </div>
            <Link
              to={"/contact"}
              className="btn relative about-animation fade-left bg-slate-800 px-4 py-3 w-[200px] z-10 rounded-[20px] shade-x"
            >
              Explore More
            </Link>
          </div>
          <div className="relative about-animation fade-left md:flex flex-col items-center hidden">
            <div className="flex flex-col justify-center items-center w-full h-full z-10">
              <img
                src="/icons/oxygen_3d.png"
                className="w-1/2 h-1/2 object-contain"
              />
              {/* <Object /> */}
              {/* <CanvasPlayground /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
