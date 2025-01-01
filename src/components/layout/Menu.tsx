"use client";
// compound components

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { navbarItems, transition } from "@/constants";
import { useActiveSection } from "@/context/ActiveSection";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useLenis } from "lenis/react";

type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
  isTablet: boolean;
};

const MenuContext = createContext<MenuContextType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("use the useMenu hook inside the Menu context component");
  }
  return context;
};

const Menu = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    if (window.screen.width >= 1024) {
      setToggle(true);
      setIsDesktop(true);
      setIsTablet(false);
    }
  }, []);
  useEffect(() => {
    if (window.screen.width >= 640) {
      setIsTablet(true);
    }
  }, []);
  const value = { toggle, setToggle, isDesktop, isTablet };
  return (
    <MenuContext.Provider value={value}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuToggleButton = ({
  children,
  className,
}: {
  className: string;
  children: React.JSX.Element;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <motion.button
      variants={{
        open: {
          translateX: -15,
          translateY: 10,
          transition: {
            duration: 0.75,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
          },
        },
        close: {
          translateX: 0,
          translateY: 0,
          transition: {
            duration: 0.75,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
            delay: 0.7,
          },
        },
      }}
      initial={"close"}
      animate={toggle ? "open" : "close"}
      className={className}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

const MenuList = ({
  className,
  children,
}: React.HTMLAttributes<HTMLUListElement>) => {
  const { toggle, isDesktop, isTablet } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          variants={{
            open: {
              borderRadius: isDesktop ? 9999 : isTablet ? 0 : 25,
              width: isDesktop ? "auto" : isTablet ? "auto" : 250,
              height: isDesktop ? "auto" : isTablet ? "100dvh" : 350,
              transition: {
                ...transition,
                delayChildren: 0.75,
                staggerChildren: 0.05,
              },
            },
            close: {
              borderRadius: isDesktop ? 9999 : isTablet ? 0 : 25,
              width: isDesktop ? "auto" : isTablet ? "auto" : 44,
              height: isDesktop ? "auto" : isTablet ? 0 : 44,
              transition: { ...transition, delay: 0.7 },
            },
          }}
          initial={"close"}
          animate={"open"}
          exit={"close"}
          className={className}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({
  className,
  sectionName,
}: {
  sectionName: (typeof navbarItems)[number];
} & React.HTMLAttributes<HTMLLIElement>) => {
  const { activeSection, setActiveSection } = useActiveSection();
  const { setToggle, isDesktop } = useMenu();
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveSection(sectionName);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    lenis?.scrollTo(hash, { duration: 2.5 });
    if (!isDesktop) {
      setToggle(false);
    }
  };

  return (
    <motion.li
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 250, damping: 25 },
        },
        close: { opacity: 0, y: 25, transition: { duration: 0.5, delay: 0.7 } },
      }}
      className={className}
    >
      <div className="hidden sm:block lg:hidden absolute w-full bg-stone-700 h-0 transition-all duration-500 bottom-0 group-hover:h-full -z-10" />
      <Link
        href={`#${sectionName}`}
        onClick={handleClick}
        className={twMerge(
          "relative sm:py-8 sm:px-5 flex items-center transition-all z-50 sm:group-hover:pl-10 lg:group-hover:pl-2 duration-500 justify-between w-full lg:z-50 lg:px-2 lg:py-0.5",
          activeSection === sectionName && "text-stone-50"
        )}
      >
        {sectionName}
        {sectionName === activeSection && (
          <motion.span
            layoutId={"menu"}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            className=" size-3 lg:absolute lg:inset-0 lg:size-auto sm:size-5 sm:bg-stone-400 lg:bg-stone-500 lg:-z-10 rounded-full bg-stone-300"
          />
        )}
      </Link>
    </motion.li>
  );
};

export { Menu, MenuToggleButton, MenuList, MenuListItem };
