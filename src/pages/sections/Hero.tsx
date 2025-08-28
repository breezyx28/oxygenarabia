import React, { Suspense } from "react";
import { Svg } from "../../components/icons";
import VideoModal from "../../components/modals/VideoModal";
import heroAnimation from "../../helper/animations/heroAnimation";
import { DotBackgroundAnimateLayout } from "../../layouts/styled-layouts/dot-bg-animate-layout";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Zap, Cloud, Shield } from "lucide-react";

const Object3D = React.lazy(() => import("../../components/3D/Object"));

const Hero = () => {
  React.useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section id="home" className="hero-section mt-[2rem]">
      <DotBackgroundAnimateLayout>
        <div className="grid grid-flow-cols place-items-center md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-x-4 h-full">
          <div className="w-full h-full">
            <div className="md:pl-20 pl-8 h-full flex flex-col gap-y-8 justify-center text-white">
              <div className="flex flex-col md:gap-y-2 gap-y-6">
                <motion.div
                  className="inline-flex w-[fit-content] items-center space-x-2 bg-blue-50 text-primary px-4 py-2 rounded-full border border-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Revolutionize Your Digital Experience
                  </span>
                </motion.div>
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4.5rem)", // 2rem (32px) min, 5vw preferred, 4.5rem (72px) max
                    lineHeight: "clamp(2.25rem, 5.5vw, 5rem)",
                  }}
                  className="relative hero-gsap top-[100px] text-foreground text-5xl lg:text-6xl font-bold leading-tight capitalize"
                >
                  Delight Your <span className="text-primary">Customers</span>,
                  Every Time
                </div>
              </div>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                The fastest, AI-powered cloud contact center in Saudi Arabia.
                Built for simplicity, speed, and unmatched human connection
              </motion.p>
              {/* Feature highlights */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { icon: Cloud, text: "Cloud-Native" },
                  { icon: Shield, text: "Enterprise Security" },
                  { icon: Zap, text: "Lightning Fast" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-muted-foreground"
                  >
                    <feature.icon className="w-4 h-4 text-blue-500" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </motion.div>
              <div className="hero-buttons relative left-[-100px] opacity-0 flex items-center gap-x-8">
                <Link
                  to={"/services"}
                  className="primary-btn shadow-none z-10 text-[14px] font-[500]"
                >
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
