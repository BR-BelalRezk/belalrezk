import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/constants";
import Image from "next/image";

import Link from "next/link";

export default function Certificates() {
  return (
    <Section id="certificates">
      <div className="container">
        <SectionTitle text="Certificates" />
        <ul className="flex flex-col md:flex-row gap-10 items-center">
          {certificates.map((item) => (
            <li key={item.label}>
              <Link href={item.link} target="_blank">
                <figure className=" md:h-72 lg:h-80 bg-stone-700 p-5">
                  <Image
                    src={item.img}
                    alt={item.label}
                    className="size-full"
                  />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
