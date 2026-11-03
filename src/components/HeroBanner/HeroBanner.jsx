import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <span className="hero-subtitle">
          Melhores ofertas personalizadas
        </span>

        <h1>
          Queima de
          <br />
          estoque Nike 🔥
        </h1>

        <p>
          Consequat culpa exercitation mollit nisi excepteur do
          tempor laboris eiusmod irure consectetur.
        </p>

        <button className="hero-button">
          Ver Ofertas
        </button>
      </div>

      <div className="hero-image">
        {/* Imagem do tênis será adicionada aqui */}
      </div>

      <div className="hero-indicators">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default HeroBanner;
