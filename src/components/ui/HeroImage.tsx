"use client";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.jpg";
import { motion } from "motion/react";
import { useHeroImageScroll } from "@/context/HeroImageScroll";

const HeroImage = () => {
  const { width } = useHeroImageScroll();
  return (
    <motion.figure
      className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
      style={{ width }}
    >
      <Image
        src={heroImage}
        alt="belal_rezk-image"
        className="size-full object-cover"
      />
    </motion.figure>
  );
};

const DoubleViewportHeight = () => {
  const { ref } = useHeroImageScroll();
  return <div ref={ref} className="md:h-[200vh]" />;
};

export { HeroImage, DoubleViewportHeight };
