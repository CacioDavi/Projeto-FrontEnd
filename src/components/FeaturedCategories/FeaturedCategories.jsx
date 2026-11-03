import "./FeaturedCategories.css";

import camisetas from "../../assets/Group 53591.png";
import calcas from "../../assets/Group 53590.png";
import bones from "../../assets/Group 53589.png";
import headphones from "../../assets/Group 53588.png";
import tenis from "../../assets/Group 53587.png";

function FeaturedCategories() {
  const categories = [
    { name: "Camisetas", image: camisetas },
    { name: "Calças", image: calcas },
    { name: "Bonés", image: bones },
    { name: "Headphones", image: headphones },
    { name: "Tênis", image: tenis },
  ];

  return (
    <section className="featured-categories">
      <h2>Coleções em destaque</h2>

      <div className="categories-container">
        {categories.map((category) => (
          <div className="category-item" key={category.name}>
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCategories;