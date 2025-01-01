"use client";

import { useEffect } from "react";
import { stagger, useAnimate, useInView } from "motion/react";
import SplitType from "split-type";

export default function SectionTitle({ text }: { text: string }) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    new SplitType(scope.current, { types: "chars,lines", tagName: "span" });
  }, [scope]);
  const enterAnimation = () =>
    animate(
      scope.current.querySelectorAll(".char"),
      { opacity: 1 },
      { duration: 0.5, delay: stagger(0.2) }
    );
  const isInView = useInView(scope, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      enterAnimation();
    }
  }, [isInView]);
  return (
    <h2
      ref={scope}
      className={
        "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-10 md:mb-16 lg:mb-20"
      }
    >
      {text}
    </h2>
  );
}
