import Card from "../../components/Card/Card";
import { CardList } from "../../components/CardList/CardList";

function Products() {

    return (
        <>
            <h1>Produtos</h1>
            <p>Esta é a página dos produtos.</p>
            <CardList>
                <Card URL="/products/any" />
                <Card URL="/products/any" />
                <Card URL="/products/any" />
                <Card URL="/products/any" />
                <Card URL="/products/any" />
                <Card URL="/products/any" />
            </CardList>
        </>
    )

}
export default Products;