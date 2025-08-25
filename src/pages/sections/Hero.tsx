import React, { Suspense } from "react";
import { Svg } from "../../components/icons";
import VideoModal from "../../components/modals/VideoModal";
import heroAnimation from "../../helper/animations/heroAnimation";
import { DotBackgroundAnimateLayout } from "../../layouts/styled-layouts/dot-bg-animate-layout";
import { Link } from "react-router-dom";

const Object3D = React.lazy(() => import("../../components/3D/Object"));

const Hero = () => {
  React.useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section id="home" className="hero-section">
      <DotBackgroundAnimateLayout>
        <div className="grid grid-flow-cols place-items-center md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-x-4 h-full">
          <div className="w-full h-full">
            <div className="md:pl-20 pl-8 h-full flex flex-col gap-y-8 justify-center text-white">
              <div className="flex flex-col gap-y-2">
                <span className="hero-gsap relative top-[100px] hero-detail-text opacity-0 text-sm font-semibold text-slate-500">
                  Revolutionize Your Customer Experience
                </span>
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4.5rem)", // 2rem (32px) min, 5vw preferred, 4.5rem (72px) max
                    lineHeight: "clamp(2.25rem, 5.5vw, 5rem)",
                  }}
                  className="relative hero-gsap top-[100px] opacity-0 hero-oxygen-phrase md:text-7xl text-slate-800 text-4xl font-bold capitalize"
                >
                  Delight Customers, Every{" "}
                  <span className="text-gradient">Customers</span> Time
                </div>
              </div>
              <div className="relative hero-gsap top-[100px] hero-description opacity-0 text-sm text-slate-500 w-[80%]">
                The fastest, AI-powered cloud contact center in Saudi Arabia.
                Built for simplicity, speed, and unmatched human connection
              </div>
              <div className="hero-buttons relative left-[-100px] opacity-0 flex items-center gap-x-8">
                <Link to={"/services"} className="primary-btn shade-x z-10">
                  Explore
                </Link>
                <VideoModal modalID={"heroSectionVideo"}>
                  <div className="relative flex">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <label
                      htmlFor="heroSectionVideo"
                      className="relative bg-primary shade-x rounded-full inline-flex p-1 z-10 cursor-pointer"
                    >
                      {Svg.playBtn}
                    </label>
                  </div>
                </VideoModal>
              </div>
            </div>
          </div>
          {/* Lazy loaded 3D object */}
          <div className="relative h-full w-full md:flex justify-center hidden">
            <Suspense
              fallback={<div className="text-white">Loading 3D...</div>}
            >
              <Object3D />
            </Suspense>
          </div>
        </div>
      </DotBackgroundAnimateLayout>
    </section>
  );
};

export default Hero;
