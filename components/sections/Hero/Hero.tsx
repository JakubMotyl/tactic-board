export default function Hero() {
  return (
    <section
      className="min-h-dvh object-cover bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-hero.webp')" }}
    >
      <div className="absolute inset-0 h-dvh w-full bg-black/30"></div>
      <header className="relative flex flex-col items-center justify-center min-h-dvh">
        <div className="xl:max-w-7xl max-w-4xl px-4 mx-auto w-full flex flex-col md:gap-6 gap-4 items-center text-center">
          <h1 className="xl:text-[4.5rem] md:text-[4rem] text-[3rem] font-logo leading-14">
            Build Your Dream Team
          </h1>
          <p className="md:text-[1.75rem] text-[1.35rem] font-light">
            Simple and intuitive tactic board for every football fan.
          </p>
        </div>
        <a
          href="#creator"
          className="absolute bottom-4 flex flex-col gap-0.5 items-center cursor-pointer hover:scale-95 active:scale-95 duration-300"
        >
          <span className="go-to-text">Go to creator</span>
          <div className="go-to-arrow"></div>
        </a>
      </header>
    </section>
  );
}
