import React from "react";
import LoadingComponent from "../components/loading/Loading";

const Hero = React.lazy(() => import("./sections/Hero"));
const Services = React.lazy(() => import("./sections/Services"));
const About = React.lazy(() => import("./sections/About"));
const History = React.lazy(() => import("./sections/History"));
const Partners = React.lazy(() => import("./sections/Partners"));

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {loading && <LoadingComponent />}
      <main className="mx-auto w-auto h-auto">
        <Hero />
        <Partners />
        <Services />
        <About />
        <History />
        {/* <Subscribe /> */}
      </main>
    </div>
  );
}
