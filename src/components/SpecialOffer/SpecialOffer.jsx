import "./SpecialOffer.css";
import specialOfferImage from "../../assets/Laye 1.png";

function SpecialOffer() {
  return (
    <section className="special-offer">
      <div className="special-offer-image">
        <img src={specialOfferImage} alt="Tênis em oferta especial" />
      </div>

      <div className="special-offer-content">
        <span>Oferta especial</span>

        <h2>
          Air Jordan edição de colecionador
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, dignissimos necessitatibus. Cumque repellat laudantium eaque quod sit, necessitatibus nisi non sed ut quos quisquam aut doloribus cupiditate libero culpa autem.
        </p>

        <button>Ver Oferta</button>
      </div>
    </section>
  );
}

export default SpecialOffer;