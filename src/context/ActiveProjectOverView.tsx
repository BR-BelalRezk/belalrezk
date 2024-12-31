"use client";
import { projects } from "@/constants";
import { createContext, useContext, useState } from "react";
type ActiveProjectOverViewContextType = {
  projectOverviewIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
};
const ActiveProjectOverViewContext =
  createContext<ActiveProjectOverViewContextType | null>(null);

export const useActiveProjectOverview = () => {
  const context = useContext(ActiveProjectOverViewContext);
  if (!context) {
    throw new Error(
      "use the useActiveProjectOverview inside the ActiveProjectOverViewContext component"
    );
  }
  return context;
};

export default function ActiveProjectOverView({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projectOverviewIndex, setProjectOverviewIndex] = useState(0);
  const handlePrev = () => {
    setProjectOverviewIndex((prevState) => {
      if (prevState === 0) {
        return projects.length - 1;
      }
      return prevState - 1;
    });
  };
  const handleNext = () => {
    setProjectOverviewIndex((prevState) => {
      if (prevState === projects.length - 1) {
        return 0;
      }
      return prevState + 1;
    });
  };

  const value = { projectOverviewIndex, handleNext, handlePrev };
  return (
    <ActiveProjectOverViewContext.Provider value={value}>
      {children}
    </ActiveProjectOverViewContext.Provider>
  );
}
