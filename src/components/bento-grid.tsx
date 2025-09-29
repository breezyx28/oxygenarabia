import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function BentoGridComponent() {
  const { t } = useTranslation();
  
  const items = [
    {
      title: t('events.oxygenEvent.title'),
      description: t('events.oxygenEvent.description'),
      header: <EventSlideshow images={eventImages.slice(0, 3)} alt={t('events.oxygenEvent.title')} />,
      className: "md:col-span-2",
      icon: <span className="text-2xl">🎯</span>,
    },
    {
      title: t('events.innovationSummit.title'),
      description: t('events.innovationSummit.description'),
      header: <EventSlideshow images={eventImages.slice(3, 6)} alt={t('events.innovationSummit.title')} />,
      className: "md:col-span-1",
      icon: <span className="text-2xl">💡</span>,
    },
    {
      title: t('events.techConference.title'),
      description: t('events.techConference.description'),
      header: <EventSlideshow images={eventImages.slice(6, 9)} alt={t('events.techConference.title')} />,
      className: "md:col-span-1",
      icon: <span className="text-2xl">🚀</span>,
    },
    {
      title: t('events.digitalTransformation.title'),
      description: t('events.digitalTransformation.description'),
      header: <EventSlideshow images={eventImages.slice(9, 12)} alt={t('events.digitalTransformation.title')} />,
      className: "md:col-span-2",
      icon: <span className="text-2xl">⚡</span>,
    },
  ];

  return (
    <BentoGrid className="relative w-full mx-auto md:auto-rows-[25rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const EventSlideshow = ({ images, alt }: { images: string[]; alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const rafRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const randomDelayRef = useRef<number>(Math.random() * 4000);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 1400);
    }, 800);
  }, [images.length]);

  const animate = useCallback(
    (timestamp: number) => {
      if (!isVisibleRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      if (timestamp - lastTimeRef.current >= 5000 + randomDelayRef.current) {
        nextSlide();
        lastTimeRef.current = timestamp;
        randomDelayRef.current = Math.random() * 3000;
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [nextSlide]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(
      `slideshow-${alt.replace(/\s+/g, "-")}`
    );
    if (element) observer.observe(element);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [animate, alt]);

  const currentImage = useMemo(
    () => images[currentIndex],
    [images, currentIndex]
  );
  const nextImage = useMemo(
    () => images[(currentIndex + 1) % images.length],
    [images, currentIndex]
  );

  return (
    <div
      id={`slideshow-${alt.replace(/\s+/g, "-")}`}
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-neutral-200"
    >
      <div
        className={`absolute inset-0 bg-cover bg-top will-change-transform transition-transform duration-500 ease-in-out ${
          isTransitioning
            ? "transform -translate-x-full"
            : "transform translate-x-0"
        }`}
        style={{ backgroundImage: `url(${currentImage})` }}
        role="img"
        aria-label={alt}
      />
      <div
        className={`absolute inset-0 bg-cover bg-top will-change-transform transition-transform duration-500 ease-in-out ${
          isTransitioning
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
        style={{ backgroundImage: `url(${nextImage})` }}
        aria-hidden="true"
      />
    </div>
  );
};

const eventImages = [
  "/images/events/Frame_Oxy.jpg",
  "/images/events/Frame_Oxy2.jpg",
  "/images/events/Frame_Oxy3.jpg",
  "/images/events/Frame_Oxy7.jpg",
  "/images/events/Frame_Oxy8.jpg",
  "/images/events/Frame_Oxy9.jpg",
  "/images/events/Frame_Oxy12.jpg",
  "/images/events/Frame_Oxy13.jpg",
  "/images/events/Frame_Oxy14.jpg",
  "/images/events/Frame_Oxy16.jpg",
  "/images/events/Frame_Oxy19.jpg",
  "/images/events/Frame_Oxy20.jpg",
];


