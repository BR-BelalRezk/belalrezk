import Section from "../../ui/Section";
import { H2Cross } from "@/components/ui/Heading";
import ProjectsOverViewList from "./ProjectsOverViewList";
import ArrowButton from "@/components/ui/ArrowButton";
import ActiveProjectOverView from "@/context/ActiveProjectOverView";

export default function ProjectsOverview() {
  return (
    <Section id="projects">
      <H2Cross text="Some personal projects from my past clients" />
      <div className="container">
        <ActiveProjectOverView>
          <ul className="mt-20 w-full">
            <ProjectsOverViewList />
          </ul>
          <div className="flex items-center gap-5 mt-6 lg:mt-10">
            <ArrowButton type="left" />
            <ArrowButton type="right" />
          </div>
        </ActiveProjectOverView>
      </div>
    </Section>
  );
}
