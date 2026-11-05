import Card from "../../components/Card/Card";
import { CardList } from "../../components/CardList/CardList";


export default function ProductDetails() {
  return (
    <>
        <h2>Produtos Relacionados</h2>
        <CardList>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </CardList>
    </>
  );
}
