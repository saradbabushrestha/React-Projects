export const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>HAMRO MANMA WAIWAI</h1>
        <p>
          THIS NOODLES HAS MATCHED THE TASTE PALETTE OF ALL PEOPLE IN NEPAL.IT'S
          POPULARITY AND DEMAND IS SO HIGH THAT IT'S FOUND & EATEN ALL AGES AMD
          IS THE BEST NOODLES OF NEPAL.
        </p>
        <div className="hero-button">
          <button>BUY NOW</button>
          <button className="secondary-button">FLAVOURES</button>
        </div>
        <div className="Shopping">
          <p>Available On</p>
        </div>
        <div className="brand-icons">
          <img src="./images/Daraz.jpg" alt="Daraz-Logo" />
          <img src="./images/Hamrobazar.png" alt="Hamrobazar-Logo" />
        </div>
      </div>
      <div className="hero-images">
        <img src="./images/waiwai.png" alt="hero-image" />
      </div>
    </main>
  );
};
