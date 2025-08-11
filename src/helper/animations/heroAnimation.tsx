import { gsap } from "gsap";

const heroAnimation = () => {
  // Start animation right after DOM is ready
  requestAnimationFrame(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1.5 },
    });
    tl.to(".hero-gsap", {
      top: "0px",
      opacity: 1,
      stagger: 0.2,
      duration: 1.4,
    })
      .to(".hero-buttons", { opacity: 1, left: "0%" }, "-=1.4")
      .to(
        ".oxygen-hero-circle",
        {
          stagger: 0.2,
          opacity: 1,
          scale: 1,
          rotate: "0deg",
        },
        "-=1.4"
      );
  });
};

export default heroAnimation;
