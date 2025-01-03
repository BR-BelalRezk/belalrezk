import { HiChevronDoubleDown } from "react-icons/hi2";
import Button from "../../ui/Button";
import Section from "../../ui/Section";
import { H1 } from "../../ui/Heading";
import IconHoverFlip from "@/components/ui/IconHoverFlip";
import { DoubleViewportHeight, HeroImage } from "@/components/ui/HeroImage";
import HeroImageScroll from "@/context/HeroImageScroll";

export default function Hero() {
  return (
    <Section className="!p-0 scroll-mt-96">
      <HeroImageScroll>
        <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="container">
              <H1 text="Crafting digital experiences through code and creative design" />
              <div className="flex mt-10 gap-5 items-center">
                <Button
                  text="Resume"
                  href={""}
                  download
                  iconAfter={
                    <IconHoverFlip size={6} Icon={HiChevronDoubleDown} />
                  }
                  variant="secondary"
                  className="capitalize"
                  delay={1.75}
                />
                <Button
                  variant="text"
                  className="capitalize"
                  text="let's talk"
                  href={"https://wa.me/+201064467975"}
                  delay={2.2}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <HeroImage />
          </div>
        </div>
        <DoubleViewportHeight />
      </HeroImageScroll>
    </Section>
  );
}
