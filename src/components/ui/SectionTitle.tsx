export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl">{text}</h2>
  );
}
