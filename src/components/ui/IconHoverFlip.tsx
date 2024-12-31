import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

export default function IconHoverFlip({
  Icon,
  size,
}: {
  size: number;
  Icon: IconType;
}) {
  return (
    <div
      className={twMerge(
        "overflow-hidden",
        size === 5 && "size-5",
        size === 6 && "size-6",
        size === 7 && "size-7"
      )}
    >
      <div
        className={twMerge(
          " flex group-hover:-translate-x-1/2 transition-all duration-500",
          size === 5 && "h-5 w-10",
          size === 6 && "h-6 w-12",
          size === 7 && "h-7 w-14"
        )}
      >
        <Icon
          className={twMerge(
            size === 5 && "size-5",
            size === 6 && "size-6",
            size === 7 && "size-7"
          )}
        />
        <Icon
          className={twMerge(
            size === 5 && "size-5",
            size === 6 && "size-6",
            size === 7 && "size-7"
          )}
        />
      </div>
    </div>
  );
}
