"use client";
import { useLenis } from "lenis/react";
import Link from "next/link";

export default function Logo() {
  const lenis = useLenis();
  return (
    <Link
      onClick={(e) => {
        const url = new URL(e.currentTarget.href);
        const hash = url.hash;
        lenis?.scrollTo(hash, { duration: 2.5 });
      }}
      href={"#home"}
      className="flex items-end justify-center z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        version="1"
        viewBox="0 0 375 375"
      >
        <defs>
          <clipPath id="896c17ef3a">
            <path d="M60 1h255v372H60zm0 0"></path>
          </clipPath>
        </defs>
        <g clipPath="url(#896c17ef3a)">
          <path
            className="fill-stone-500"
            d="M223.844 133.344c-12.66-3.61-25.258 5.945-25.258 19.12v202.731c0 11.32 10.539 19.79 21.562 17.184 54.344-12.8 94.918-61.703 94.918-119.906 0-56.348-38.011-103.965-91.222-119.13zm-47.477-10.754v232.605c0 11.32-10.535 19.79-21.558 17.184-54.344-12.793-94.918-61.703-94.918-119.906V15.547c0-8.89 8.113-15.578 16.84-13.883 56.703 11.016 99.636 61.055 99.636 120.926zm0 0"
          ></path>
        </g>
      </svg>
      <span className="text-xl font-bold lowercase -ml-1.5 text-stone-500">
        elal_rezk
      </span>
    </Link>
  );
}
