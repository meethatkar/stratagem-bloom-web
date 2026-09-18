import aboutHero from "@/assets/eon-about-hero.jpg";

export const AboutHero = () => {
  return (
    <section className="hero-section min-h-[80svh]" aria-labelledby="about-title">
      <img
        src={aboutHero}
        alt="A corporate keynote stage with warm architectural lighting and an engaged audience"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="hero-image"
      />
      <div className="hero-overlay" />
      <div className="site-container relative z-10 flex min-h-[80svh] flex-col justify-end pb-12 pt-32 lg:pb-16">
        <p className="hero-kicker">Who We Are</p>
        <h1 id="about-title" className="hero-title">
          <span>About</span>
          <span className="text-accent">Eon Media</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted lg:mt-8">
          We are the integrated partner organisations rely on when events, communications, brand,
          marketing and business growth must work as one.
        </p>
      </div>
    </section>
  );
};
