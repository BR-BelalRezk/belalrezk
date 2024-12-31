import { H2 } from "../../ui/Heading";
import Section from "../../ui/Section";

export default function About() {
  return (
    <Section id="about" className="mt-12 md:mt-16 lg:mt-20">
      <div className="container">
        <H2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          text="Building beautiful websites with clean code and thoughtful design to
          help your business grow and stand out online"
        />
      </div>
    </Section>
  );
}
