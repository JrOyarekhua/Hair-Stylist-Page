import "./hero.css";
function Hero() {
  return (
    <section className="hero container">
      <h1 className="hero-title">LauriiKayStylez</h1>
      <p className="hero-subtitle">crafting beauty one strand at a time</p>
      <span className="hero-btn-container">
        <button className="hero-learn-btn">learn More</button>
        <button className="hero-book-btn">Book Now</button>
      </span>
    </section>
  );
}

export default Hero;
