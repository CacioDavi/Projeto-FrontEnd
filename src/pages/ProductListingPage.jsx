
import Card from "../components/Card/Card";
import { CardList } from "../components/CardList/CardList";

function ProductListingPage() {
  const products = [
    {
      id: 1,
      name: "Tênis Nike Revolution",
      category: "Tênis",
      discount: 30,
      image: "/src/assets/sapato.png",
      prices: [160, 200],
    },
    {
      id: 2,
      name: "Tênis Adidas Runfalcon",
      category: "Tênis",
      discount: 20,
      image: "/src/assets/sapato.png",
      prices: [240, 300],
    },
    {
      id: 3,
      name: "Tênis K-Swiss",
      category: "Tênis",
      discount: 0,
      image: "/src/assets/sapato.png",
      prices: [250],
    },
  ];

  return (
    <main>
      <h1>Lista de produtos</h1>

      <CardList>
        {products.map((product) => (
          <Card
            key={product.id}
            ProductName={product.name}
            ProductCategory={product.category}
            DiscountRate={product.discount}
            ProductImage={product.image}
            Prices={product.prices}
          />
        ))}
      </CardList>
    </main>
  );
}

export default ProductListingPage;
