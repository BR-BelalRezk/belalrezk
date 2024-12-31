import IconHoverFlip from "@/components/ui/IconHoverFlip";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Project({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="border-t border-stone-400 border-dotted last:border-b flex flex-col">
      <Link
        href={project.link}
        target="_blank"
        className="py-6 md:py-10 lg:py-14 relative group"
      >
        <div className=" absolute bg-stone-300 bottom-0 -z-10 left-0 w-full h-0 group-hover:h-full transition-all duration-500" />
        <figure className="aspect-video md:hidden">
          <Image
            src={project.image}
            alt={project.name}
            className="size-full object-cover"
          />
        </figure>
        <div className="mt-8 md:mt-0 flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl lg:text-5xl group-hover:pl-5 transition-all duration-500">
            {project.name}
          </h3>
          <IconHoverFlip size={7} Icon={HiArrowUpRight} />
        </div>
      </Link>
    </div>
  );
}
