import Card from "../../components/Card/Card";
import { CardList } from "../../components/CardList/CardList";

import Button from "../../components/Button/Button";
import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";
import {
  Container,
  Breadcrumb,
  ProductContent,
  ProductInfo,
  SectionTitle,
  RelatedTitle,
  OptionsContainer,
  BuyButton,
  ColorOption
} from "./style";

export default function ProductDetails() {
  return (
    <Container>
      <Breadcrumb>
        Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
      </Breadcrumb>

      <ProductContent>
        <ImageCarousel />

        <ProductInfo>
          <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>

          <p>Casual | Nike | REF: 38416711</p>

          <p>⭐⭐⭐⭐⭐ <span>4,7</span> (90 avaliações)</p>

          <h2>R$ 219,00</h2>

          <p>Descrição do produto</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi aliquid numquam, error tenetur dolore deserunt tempora.
          </p>

          <SectionTitle>Tamanho</SectionTitle>

          <OptionsContainer>
            {[38, 39, 40, 41, 42, 43].map((size) => (
              <label key={size}>
                <input type="radio" name="size" value={size} />
                {size}
              </label>
            ))}
          </OptionsContainer>

          <SectionTitle>Cor</SectionTitle>

          <OptionsContainer>
            {["#000000", "#00BFFF", "#FF0000", "#808080", "#4169E1"].map(
            (color) => (
          <ColorOption key={color} className="color-option">
          <input
            type="radio"
            name="color"
            value={color}
          />
          <span style={{ backgroundColor: color }} />
          </ColorOption>
    )
  )}
</OptionsContainer>

          <BuyButton>
            <Button>COMPRAR</Button>
          </BuyButton>
        </ProductInfo>
      </ProductContent>

      <RelatedTitle>Produtos Relacionados</RelatedTitle>

      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </Container>
  );
}