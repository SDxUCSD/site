import Header from "@/components/Header";

export default function Gallery() {
  return (
    <>
      <Header />
      <div className="bg-zinc-900/95 w-full">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <img
            key={i}
            src={`/images/${i}.png`}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-auto block"
          />
        ))}
      </div>
    </>
  );
}