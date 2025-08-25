import Spline from "@splinetool/react-spline";

export default function Object() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Spline
        scene="https://prod.spline.design/Rj9c9s2-4NpmTgAM/scene.splinecode"
        className="w-full h-full" // make canvas twice as wide
      />
    </div>
  );
}
