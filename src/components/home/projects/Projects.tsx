import { projects } from "@/constants";
import Project from "./Project";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";
import ActiveProject from "@/context/ActiveProject";
import ProjectMouseHandler from "./ProjectMouseHandler";
import ModalImage from "./ModalImage";
import Modal from "./Modal";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="container">
        <SectionTitle text="Projects" />
        <ActiveProject>
          <ul>
            {projects.map((project, index) => (
              <ProjectMouseHandler key={project.name} index={index}>
                <Project key={project.name} project={project} />
              </ProjectMouseHandler>
            ))}
          </ul>
          <Modal>
            {projects.map((item) => (
              <ModalImage key={item.name} item={item} />
            ))}
          </Modal>
        </ActiveProject>
      </div>
    </Section>
  );
}
