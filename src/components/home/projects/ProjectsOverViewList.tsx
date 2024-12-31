"use client";
import { projects } from "@/constants";
import ProjectOverview from "./ProjectOverview";
import { AnimatePresence } from "motion/react";
import { useActiveProjectOverview } from "@/context/ActiveProjectOverView";

export default function ProjectsOverViewList() {
  const { projectOverviewIndex } = useActiveProjectOverview();
  return (
    <AnimatePresence mode="wait" initial={false}>
      {projects.map(
        (project, index) =>
          index === projectOverviewIndex && (
            <ProjectOverview key={project.name} project={project} />
          )
      )}
    </AnimatePresence>
  );
}
