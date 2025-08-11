import React from "react";
import Pattern from "./Pattern";
import jumbotrunAnimation from "../../helper/animations/jumbotrunAnimation";

type JumboProps = {
  pageName: String;
};

const Jumbotrun = ({ pageName }: JumboProps) => {
  let { jumbotrunFadeInBottom } = jumbotrunAnimation;

  React.useEffect(() => {
    jumbotrunFadeInBottom("#jumbotrun-text");
  }, []);

  return (
    <section className="w-full h-[50vh] bg-primary relative">
      <div className="absolute left-0 top-0 w-full h-[50vh]">
        <div className="overflow-hidden h-full">
          <Pattern />
        </div>
      </div>
      <div
        id="jumbotrun-text"
        className="absolute h-full w-full flex flex-col justify-center items-center md:text-7xl text-4xl md:pt-0 pt-10 text-white font-extrabold capitalize"
      >
        {pageName}
      </div>
    </section>
  );
};

export default Jumbotrun;
