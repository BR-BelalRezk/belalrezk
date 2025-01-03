import { HiArrowDown } from "react-icons/hi2";
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
          <div className="grid sm:grid-cols-3 md:items-center">
            <div className="sm:col-span-2">
              <H2
                text="Enough talk. Let's make something great together."
                className="text-3xl sm:text-4xl md:text-5xl  lg:text-6xl xl:text-7xl 2xl:8xl mt-8  font-extralight"
              />
              <Button
                text="Resume"
                download
                href={""}
                variant="secondary"
                iconAfter={<IconHoverFlip size={5} Icon={HiArrowDown} />}
                className="mt-8"
              />
            </div>
            <ul className="flex flex-col gap-8 mt-16 sm:mt-0 sm:items-end">
              {contacts.map((item) => (
                <li key={item.name}>
                  <Button
                    href={item.url}
                    text={item.name}
                    iconAfter={
                      <item.icon className="text-3xl absolute left-[calc(100%+10px)] hidden sm:block" />
                    }
                    variant="text"
                    className="text-sm"
                  />
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
