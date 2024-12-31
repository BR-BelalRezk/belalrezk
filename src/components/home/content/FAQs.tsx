"use client";
import Section from "../../ui/Section";
import SectionTitle from "../../ui/SectionTitle";
import FAQList from "@/components/ui/FAQList";

export default function FAQs() {
  return (
    <Section id="faqs">
      <div className="container">
        <SectionTitle text="FAQs" />
        <FAQList />
      </div>
    </Section>
  );
}
