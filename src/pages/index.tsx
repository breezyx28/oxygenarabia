import React from "react";
import ContactUs from "./sections/ContactUs";
import { AboutSection } from "./sections/About-figam";
import SEOLayout from "@/layouts/main/SEOLayout";

const Hero = React.lazy(() => import("./sections/Hero"));
const Services = React.lazy(() => import("./sections/Services"));
// const About = React.lazy(() => import("./sections/About"));
// const History = React.lazy(() => import("./sections/History"));
const Partners = React.lazy(() => import("./sections/Partners"));

export default function Home() {
  return (
    <SEOLayout
      title="Oxygen Arabia ICT - Leading Technology Solutions Provider"
      description="Oxygen Technology Co., Ltd., a leading company in information technology and telecommunications services (ICT) Industry in Saudi Arabia. Driving digital transformation with innovative solutions."
      keywords="ICT, technology, Saudi Arabia, telecommunications, software development, digital transformation, Vision 2030"
      image="/icons/oxygen/Oxygen.png"
    >
      <div className="overflow-x-hidden">
        {/* {loading && <LoadingComponent />} */}
        <main className="mx-auto w-auto h-auto">
          <Hero />
          <Partners />
          <Services />
          <AboutSection />
          <ContactUs />
          {/* <History /> */}
          {/* <Subscribe /> */}
        </main>
      </div>
    </SEOLayout>
  );
}
