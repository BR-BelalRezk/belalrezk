import About from "@/components/home/content/About";
import Certificates from "@/components/home/content/Certificates";
import FAQs from "@/components/home/content/FAQs";
import Hero from "@/components/home/content/Hero";
import Skills from "@/components/home/content/Skills";
import Projects from "@/components/home/projects/Projects";
import ProjectsOverview from "@/components/home/projects/ProjectsOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ProjectsOverview />
      <Certificates />
      <Skills />
      <FAQs />
    </>
  );
}
