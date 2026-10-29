import Button from "../components/Button";

function HomePage() {
  function comprarAgora() {
    alert("Você clicou em Comprar agora!");
  }

  function verDetalhes() {
    alert("Você clicou em Ver detalhes!");
  }

  return (
    <main>
      <h1>Digital Store</h1>
      <p>Teste dos botões da loja.</p>

      <Button variant="secundary" onClick={comprarAgora}>
        Comprar
      </Button>

      {" "}

      <Button variant="primary" onClick={verDetalhes}>
        Ver detalhes
      </Button>
    </main>
  );
}

export default HomePage;