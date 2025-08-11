import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

export const tl = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 1.5 },
});

export const scrollTrigger = ScrollTrigger;
