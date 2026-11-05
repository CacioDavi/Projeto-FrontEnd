import Card from "../Card/Card";
import { CardList } from "../CardList/CardList";
import "./FeaturedProducts.css";

import sapato from "../../assets/Sapato.png";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="featured-products-header">
        <h2>Produtos em alta</h2>
        <a href="/products">Ver todos →</a>
      </div>

      <CardList>
        <Card ProductName="Tênis Nike Revolution" ProductImage={sapato} />
        <Card ProductName="Tênis Adidas Runfalcon" ProductImage={sapato} />
        <Card ProductName="Tênis K-Swiss V8" ProductImage={sapato} />
        <Card ProductName="Tênis Puma Flyer" ProductImage={sapato} />
        <Card ProductName="Tênis Nike Air Max" ProductImage={sapato} />
        <Card ProductName="Tênis Adidas Galaxy" ProductImage={sapato} />
        <Card ProductName="Tênis Olympikus" ProductImage={sapato} />
        <Card ProductName="Tênis Mizuno" ProductImage={sapato} />
      </CardList>
    </section>
  );
}

export default FeaturedProducts;