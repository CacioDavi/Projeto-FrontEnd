import "./FeaturedCollections.css";

import collection1 from "../../assets/collection-1.png";
import collection2 from "../../assets/collection-2.png";
import collection3 from "../../assets/collection-3.png";


function FeaturedCollections() {
  return (
    <section className="featured-collections">
      <h2>Coleções em destaque</h2>

      <div className="collections-container">

        <div className="collection-card">
          <img src={collection1} alt="Coleção Supreme" />

          <span className="collection-discount">30% OFF</span>
          <button>Comprar</button>
        </div>

        <div className="collection-card">
          <img src={collection2} alt="Coleção Adidas" />

          <span className="collection-discount">30% OFF</span>
          <button>Comprar</button>
        </div>

        <div className="collection-card">
          <img src={collection3} alt="Coleção Nike" />

          <span className="collection-discount">30% OFF</span>
          <button>Comprar</button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedCollections;