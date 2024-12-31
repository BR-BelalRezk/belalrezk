"use client";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

export default function Button({
  className,
  text,
  variant,
  iconAfter,
  delay,
  ...rest
}: {
  variant: "primary" | "secondary" | "text";
  iconAfter?: React.ReactNode;
  text: string;
  delay?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <button
        className={twMerge(
          " h-10 px-5 rounded-xl group relative transition-all duration-500 border border-red-orange-500 uppercase inline-flex items-center justify-center gap-2.5",
          variant === "secondary" &&
            "hover:bg-red-orange-500 hover:text-stone-50",
          variant === "primary" && "bg-red-orange-500 text-stone-50",
          variant === "text" &&
            "h-auto px-0 border-transparent after:content-[''] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:left-0 after:bg-red-orange-500 hover:after:w-full",
          className
        )}
        {...rest}
      >
        <span className=" relative">{text}</span>
        {iconAfter}
      </button>
    </motion.div>
  );
}
