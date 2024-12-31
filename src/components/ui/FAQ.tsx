import { faqs } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { BsPlusLg } from "react-icons/bs";

export default function FAQ({
  item,
  index,
  selectedIndex,
  setSelectedIndex,
}: {
  index: number;
  item: (typeof faqs)[number];
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <li
      onClick={() => {
        if (index === selectedIndex) {
          setSelectedIndex(null);
        } else {
          setSelectedIndex(index);
        }
      }}
      className="border-t group cursor-pointer relative last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-9 xl:py-10"
    >
      <div
        className={twMerge(
          " absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 transition-all duration-500 group-hover:h-full",
          index === selectedIndex && "h-full"
        )}
      />
      <div
        className={twMerge(
          "flex items-center group-hover:px-0.5 sm:group-hover:px-2.5 md:group-hover:px-5 lg:group-hover:px-8 justify-between gap-5 transition-all duration-500",
          index === selectedIndex && "px-0.5 sm:px-2.5 md:px-5 lg:px-8 "
        )}
      >
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {item.question}
        </div>
        <div
          className={twMerge(
            "inline-flex items-center justify-center size-11 border bg-stone-200 border-stone-400 rounded-full shrink-0 transition-all duration-500",
            index === selectedIndex && "rotate-45"
          )}
        >
          <BsPlusLg className="size-5" />
        </div>
      </div>
      <AnimatePresence>
        {selectedIndex === index && (
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: "auto",
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
            }}
            className="overflow-hidden px-0.5 sm:px-2.5 md:px-5 lg:px-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
              }}
              exit={{
                opacity: 0,
                y: 25,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className="text-sm sm:text-base md:text-lg lg:text-xl mt-4"
            >
              {item.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
