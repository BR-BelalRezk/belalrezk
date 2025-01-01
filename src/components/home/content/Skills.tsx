import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillsList from "@/components/ui/SkillsList";
import { skills } from "@/constants";
import { Fragment } from "react";

export default function Skills() {
  return (
    <Section id="skills" className="overflow-x-clip">
      <div className="container">
        <SectionTitle text="Skills" />
        <div className="overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <SkillsList className="flex flex-none gap-20 pr-20">
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {skills.map((item) => (
                  <li
                    key={item.label}
                    className="border-2 border-stone-500 rounded-full p-7 group relative"
                  >
                    <item.icon className="text-9xl text-stone-700 group-hover:opacity-0 transition-all duration-500" />
                    <span className="text-xl absolute top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {item.label}
                    </span>
                  </li>
                ))}
              </Fragment>
            ))}
          </SkillsList>
        </div>
      </div>
    </Section>
  );
}
