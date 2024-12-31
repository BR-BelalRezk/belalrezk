"use client";

import { useActiveProjectOverview } from "@/context/ActiveProjectOverView";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";

export default function ArrowButton({ type }: { type: "right" | "left" }) {
  const { handleNext, handlePrev } = useActiveProjectOverview();
  return (
    <button
      onClick={type === "right" ? handleNext : handlePrev}
      className="border border-stone-400 hover:bg-red-orange-500 hover:border-red-orange-500 hover:text-stone-50 transition-all duration-500 size-11 inline-flex items-center justify-center rounded-full"
    >
      {type === "right" ? (
        <HiArrowRight className="size-6" />
      ) : (
        <HiArrowLeft className="size-6" />
      )}
    </button>
  );
}
