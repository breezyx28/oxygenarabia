// import Spline from "@splinetool/react-spline";

export default function Object() {
  return (
    <div className="relative w-full h-screen overflow-hidden md:mt-16">
      {/* <Spline
        scene="https://draft.spline.design/PZyEcSCUC1rqBKXh/scene.splinecode"
        className="w-full h-full" // make canvas twice as wide
      /> */}

      <iframe
        src="https://my.spline.design/untitled-4a22ffe0366c39778364aec0fabb51b3/"
        frameBorder="0"
        className="absolute top-0 left-0 w-[110%] h-[110%] translate-x-10 translate-y-10 scale-105"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
