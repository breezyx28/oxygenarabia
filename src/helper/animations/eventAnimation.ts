import { gsap } from "gsap";

let tl = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 1.5 },
});

const videoCardFadeInTop = (selector: string) => {
  tl.to(selector, {
    bottom: "-20px",
    opacity: 0,
    duration: 0.4,
  });
};
const videoCardFadeOutBottom = (selector: string) => {
  tl.to(selector, {
    bottom: 0,
    opacity: 1,
    duration: 0.4,
  });
};
const initVideoCardFadeInTop = (selector: string) => {
  tl.from(selector, {
    bottom: 0,
    opacity: 1,
  });
};
const initVideoCardFadeOutBottom = (selector: string) => {
  tl.from(selector, {
    bottom: 0,
    opacity: 1,
  });
};

const eventAnimation = {
  videoCardFadeInTop,
  videoCardFadeOutBottom,
  initVideoCardFadeInTop,
  initVideoCardFadeOutBottom,
};

export default eventAnimation;
