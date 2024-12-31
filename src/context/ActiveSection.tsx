"use client";

import { navbarItems } from "@/constants";
import { createContext, useContext, useState } from "react";

type ActiveSectionType = (typeof navbarItems)[number];

type ActiveSectionContextType = {
  activeSection: ActiveSectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionType>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "use the useActiveSection hook inside the ActiveSection context provider"
    );
  }
  return context;
};

export default function ActiveSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] =
    useState<ActiveSectionType>("about");
  const value = { activeSection, setActiveSection };
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
