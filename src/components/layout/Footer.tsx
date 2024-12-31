import { HiArrowUpRight } from "react-icons/hi2";
import Button from "../ui/Button";
import Link from "next/link";
import { H2 } from "../ui/Heading";
import IconHoverFlip from "../ui/IconHoverFlip";
import { contacts } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-50 w-full h-screen">
      <div className="h-full container">
        <div className="flex items-start justify-center size-full flex-col">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-500 animate-pulse" />
            <span className="uppercase">let&apos;s work together</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <H2
                text="Enough talk. Let's make something great together."
                className="text-3xl sm:text-4xl md:text-5xl  lg:text-6xl xl:text-7xl 2xl:8xl mt-8  font-extralight"
              />
              <Button
                text="projects"
                variant="secondary"
                iconAfter={<IconHoverFlip size={5} Icon={HiArrowUpRight} />}
                className="mt-8"
              />
            </div>
            <ul className="flex flex-col gap-8 mt-16 md:mt-0 md:items-end">
              {contacts.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} target={"_blank"}>
                    <Button
                      text={item.name}
                      iconAfter={
                        <item.icon className="text-3xl absolute left-[calc(100%+10px)] hidden md:block" />
                      }
                      variant="text"
                      className="text-sm"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className=" text-stone-50/50 text-sm mt-16">
            Copyright &copy; Belal Rezk &bull; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
