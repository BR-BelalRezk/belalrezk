"use client";
import { transition } from "@/constants";
import { motion } from "motion/react";

export default function Hamburger({ toggle }: { toggle?: boolean }) {
  return (
    <>
      <motion.span
        animate={
          toggle
            ? { translateY: 4.5, rotate: 45, transition }
            : {
                translateY: 0,
                rotate: 0,
                transition: { ...transition, delay: 0.7 },
              }
        }
        className="rounded-full h-0.5 w-6 bg-stone-100"
      />
      <motion.span
        animate={
          toggle
            ? { translateY: -4.5, rotate: -45, transition }
            : {
                translateY: 0,
                rotate: 0,
                transition: { ...transition, delay: 0.7 },
              }
        }
        className="rounded-full h-0.5 w-6 bg-stone-100"
      />
    </>
  );
}
