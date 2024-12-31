"use client";
import { createContext, useContext } from "react";
import { MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type HeroImageScrollContextType = {
  width: MotionValue<string>;
  ref: React.RefObject<HTMLDivElement | null>;
};
const HeroImageScrollContext = createContext<HeroImageScrollContextType | null>(
  null
);

export const useHeroImageScroll = () => {
  const context = useContext(HeroImageScrollContext);
  if (!context) {
    throw new Error(
      "use the useHeroImageScroll hook inside the HeroImageScrollContext component"
    );
  }
  return context;
};

export default function HeroImageScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);
  const value = { width, ref };
  return (
    <HeroImageScrollContext.Provider value={value}>
      {children}
    </HeroImageScrollContext.Provider>
  );
}
