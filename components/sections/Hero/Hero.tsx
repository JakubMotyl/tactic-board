import Navbar from "@/components/layout/Navbar";
export default function Hero() {
  return (
    <section className="min-h-screen relative">
      <Navbar />
      <div className="h-screen relative">
        <img
          src="/bg-hero.webp"
          alt="Hero Image"
          className="h-full w-full object-cover"
        />
        <header></header>
      </div>
    </section>
  );
}
