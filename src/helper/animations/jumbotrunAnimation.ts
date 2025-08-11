import { gsap } from "gsap";

let tl = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 1.5 },
});

const jumbotrunFadeInBottom = (selector: string) => {
  tl.from(selector, {
    y: "-100",
    opacity: 0,
    duration: 2,
  });
};

const jumbotrunAnimation = {
  jumbotrunFadeInBottom,
};

export default jumbotrunAnimation;
