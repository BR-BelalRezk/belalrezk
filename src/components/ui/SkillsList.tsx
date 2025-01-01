"use client";
import {
  AnimationPlaybackControls,
  motion,
  useAnimate,
  useInView,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function SkillsList({
  children,
  className,
}: React.HTMLAttributes<HTMLUListElement>) {
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, [animate, scope]);
  useEffect(() => {
    if (animation.current) {
      if (hover) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [hover]);
  return (
    <motion.ul
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={scope}
      className={className}
    >
      {children}
    </motion.ul>
  );
}
