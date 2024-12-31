import { projects } from "@/constants";
import Image from "next/image";

export default function ModalImage({
  item,
}: {
  item: (typeof projects)[number];
}) {
  return (
    <figure
      key={item.name}
      className="relative h-full flex items-center justify-center p-5 bg-stone-500"
    >
      <Image
        className="h-auto w-auto aspect-video object-cover object-center"
        height={0}
        width={0}
        src={item.image}
        alt={item.name}
      />
    </figure>
  );
}
