import React from "react";
import LoadingComponent from "../components/loading/Loading";
import ContactUs from "./sections/ContactUs";
import { AboutSection } from "./sections/About-figam";

const Hero = React.lazy(() => import("./sections/Hero"));
const Services = React.lazy(() => import("./sections/Services"));
// const About = React.lazy(() => import("./sections/About"));
// const History = React.lazy(() => import("./sections/History"));
const Partners = React.lazy(() => import("./sections/Partners"));

export default function Home() {
  return (
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
  );
}
