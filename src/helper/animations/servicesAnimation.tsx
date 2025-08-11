"use client";
import { gsap } from "gsap";

const servicesAnimation = () => {
  gsap.to(".service-title", {
    scrollTrigger: {
      trigger: ".service-title",
    },
    left: 0,
    opacity: 1,
    duration: 1.4,
  });

  gsap.to(".services-description", {
    scrollTrigger: {
      trigger: ".services-description",
    },
    left: 0,
    opacity: 1,
    duration: 1.4,
  });

  gsap.to(".service-item", {
    scrollTrigger: {
      trigger: ".service-item",
    },
    left: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.4,
  });

  gsap.to(".service-poster", {
    scrollTrigger: {
      trigger: ".service-poster",
      start: "center bottom",
    },
    right: 0,
    opacity: 1,
    duration: 1.4,
  });

  // floating animation
  gsap.set(".text-card", { y: "-=20" });
  gsap.set(".avatar-stack-card", { y: "-=10" });

  // Animate the ".avatar-stack-card"'s position
  gsap.to(".text-card", {
    duration: 2,
    y: "+=20",
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(".avatar-stack-card", {
    duration: 1.5,
    y: "+=10",
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
};

export default servicesAnimation;
