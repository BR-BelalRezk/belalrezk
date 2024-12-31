import { faqs } from "@/constants";
import FAQ from "../ui/FAQ";
import { useState } from "react";

export default function FAQList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ul className="mt-10 md:mt-16 lg:mt-20">
      {faqs.map((item, index) => (
        <FAQ
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          index={index}
          item={item}
          key={item.answer}
        />
      ))}
    </ul>
  );
}
