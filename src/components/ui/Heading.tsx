"use client";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import useTextSplitedAnimation from "@/hooks/useTextSplitedAnimation";

const H1 = ({ text }: { text: string }) => {
  const { scope, enterAnimation } = useTextSplitedAnimation(0.5, 0.2);
  useEffect(() => {
    enterAnimation();
  }, [enterAnimation]);
  return (
    <motion.h1
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-4xl md:text-5xl xl:text-7xl mt-40 md:mt-0"
    >
      {text}
    </motion.h1>
  );
};

const H2 = ({ text, className }: { className: string; text: string }) => {
  const { scope, enterAnimation } = useTextSplitedAnimation(0.5, 0.2);
  const isInView = useInView(scope, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      enterAnimation();
    }
  }, [isInView, enterAnimation]);
  return (
    <h2 ref={scope} className={className}>
      {text}
    </h2>
  );
};

const H2Cross = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  return (
    <h2
      ref={ref}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl flex flex-col overflow-hidden"
    >
      <motion.span style={{ x: transformTop }} className="whitespace-nowrap">
        {text}
      </motion.span>
      <motion.span
        style={{ x: transformBottom }}
        className=" whitespace-nowrap self-end text-red-orange-500"
      >
        {text}
      </motion.span>
    </h2>
  );
};

export { H1, H2, H2Cross };
