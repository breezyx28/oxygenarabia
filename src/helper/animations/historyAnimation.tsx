import { gsap } from "gsap";

const historyAnimation = () => {
  gsap.to(".history-animation", {
    scrollTrigger: {
      trigger: ".history-animation",
    },
    stagger: 0.2,
    y: 0,
    opacity: 1,
    duration: 1.4,
  });
};

export default historyAnimation;
