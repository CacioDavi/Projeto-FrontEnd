import Button from "../components/Button";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import FeaturedCategories from "../components/FeaturedCategories/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import SpecialOffer from "../components/SpecialOffer/SpecialOffer";

function HomePage() {
  
  return (
    <main>
      <HeroBanner />
      <FeaturedCollections />
      <FeaturedCategories />
      <FeaturedProducts />
      <SpecialOffer />
    </main>
  );
}

export default HomePage;