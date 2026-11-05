import { useState, useEffect } from "react";
import "./HeroBanner.css";

import slide1 from "../../assets/Sapato2.png";
import slide2 from "../../assets/home-slide-2.jpeg";
import slide3 from "../../assets/home-slide-6.jpeg";
import slide4 from "../../assets/home-slide-8.jpeg";

function HeroBanner() {
  const imagens = [slide1, slide2, slide3, slide4];
  const [slideAtual, setSlideAtual] = useState(0);

  useEffect(() => {
  const intervalo = setInterval(() => {
    setSlideAtual((slideAtual) => {
      return (slideAtual + 1) % imagens.length;
    });
  }, 5000);

  return () => clearInterval(intervalo);
  }, [slideAtual]);

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
      <img
        key={slideAtual}
        src={imagens[slideAtual]}
        alt="Tênis em destaque"
        className={slideAtual === 0 ? "imagem-inclinada" : "imagem-reta"}
      />
    </div>

      <div className="hero-indicators">
        {[0, 1, 2, 3].map((slide) => (
          <button
            key={slide}
            className={slideAtual === slide ? "active" : ""}
            onClick={() => setSlideAtual(slide)}
            aria-label={`Ir para o slide ${slide + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroBanner;
