import Button from "../components/Button";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import FeaturedCategories from "../components/FeaturedCategories/FeaturedCategories";

function HomePage() {
  
  return (
    <main>
      <HeroBanner />
      <FeaturedCollections />
      <FeaturedCategories />
    </main>
  );
}

export default HomePage;