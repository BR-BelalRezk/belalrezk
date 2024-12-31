export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
      {text}
    </h2>
  );
}
