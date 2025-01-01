import { faqs } from "@/constants";
import FAQ from "../ui/FAQ";
import { useState } from "react";

export default function FAQList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ul>
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
