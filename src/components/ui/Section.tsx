"use client";
import { navbarItems } from "@/constants";
import { useActiveSection } from "@/context/ActiveSection";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Section({
  className,
  children,
  id,
  ...rest
}: {
  id?: (typeof navbarItems)[number];
} & React.HTMLAttributes<HTMLElement>) {
  const { setActiveSection } = useActiveSection();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView && id) {
      setActiveSection(id);
    }
  }, [id, setActiveSection, isInView]);

  return (
    <section
      ref={ref}
      id={id || "home"}
      className={twMerge("py-24 md:py-32 lg:py-40", className)}
      {...rest}
    >
      {children}
    </section>
  );
}
