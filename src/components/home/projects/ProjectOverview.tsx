import Image from "next/image";
import { projects, transition } from "@/constants";
import { usePresence, motion } from "motion/react";
import { useEffect } from "react";
import useTextSplitedAnimation from "@/hooks/useTextSplitedAnimation";

export default function ProjectOverview({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [isPresent, safeToRemove] = usePresence();

  const {
    scope: quoteScope,
    enterAnimation: quoteAnimate,
    exitAnimation: quoteExit,
  } = useTextSplitedAnimation(0.5, 0.15);
  const {
    scope: citeScope,
    enterAnimation: citeAnimate,
    exitAnimation: citeExit,
  } = useTextSplitedAnimation(0.5, 0.1);

  useEffect(() => {
    if (isPresent) {
      quoteAnimate().then(() => {
        citeAnimate();
      });
    } else {
      Promise.all([quoteExit(), citeExit()]).then(() => safeToRemove());
    }
  }, [isPresent, quoteAnimate, quoteExit, citeAnimate, citeExit, safeToRemove]);

  return (
    <li className="md:flex md:gap-8 lg:gap-10 md:items-center">
      <figure className="aspect-video flex-none md:w-1/2 relative bg-stone-300">
        <motion.div
          className=" absolute h-full bg-stone-500 z-40"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={transition}
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: "auto",
            transition: { ...transition, duration: 1 },
          }}
          exit={{ height: 0, transition: { ...transition, duration: 0.5 } }}
          className="z-10"
        >
          <Image
            src={project.image}
            alt={project.name}
            className="size-full object-cover"
          />
        </motion.div>
      </figure>
      <blockquote className="text-lg sm:text-2xl md:text-base lg:text-2xl xl:text-4xl mt-8 md:mt-0">
        <span ref={quoteScope}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
          praesentium non, corrupti natus harum rerum labore sed neque quidem.
          Ut error corrupti esse. Voluptas ea quaerat accusamus laudantium
          cumque.
        </span>
        <cite
          ref={citeScope}
          className="mt-4 text-sm sm:text-base md:mt-8 md:text-lg not-italic block"
        >
          {project.name}
        </cite>
      </blockquote>
    </li>
  );
}
