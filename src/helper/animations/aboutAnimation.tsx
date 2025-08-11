import { gsap } from "gsap";

const aboutAnimation = () => {
  gsap.to(".about-animation", {
    scrollTrigger: {
      trigger: ".about-animation",
    },
    stagger: 0.2,
    left: 0,
    opacity: 1,
    duration: 1.4,
  });
};

export default aboutAnimation;
