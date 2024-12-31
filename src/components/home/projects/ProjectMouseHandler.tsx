"use client";
import { useActiveProject } from "@/context/ActiveProject";

export default function ProjectMouseHandler({
  index,
  children,
  className,
}: { index: number } & React.HTMLAttributes<HTMLDivElement>) {
  const { setModal } = useActiveProject();
  return (
    <li
      onMouseLeave={() =>
        setModal((prevState) => ({
          ...prevState,
          active: false,
          index: index,
        }))
      }
      onMouseEnter={() =>
        setModal((prevState) => ({
          ...prevState,
          active: true,
          index: index,
        }))
      }
      className={className}
    >
      {children}
    </li>
  );
}
