
import Logo from './Logo';
import './Header.css';
import Button from "../components/Button";
import cartIcon from "../assets/mini-cart.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      {}
      <div className="header-top">

        <Logo />

        <form className="search-form">
          <input
            type="search"
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
          />

          <button type="submit" aria-label="Pesquisar">
            ⌕
          </button>
        </form>

        <div className="header-actions">
          <Link to="/cadastro" className="register-link">
            Cadastre-se
          </Link>

          <Button>Entrar</Button>

          <Link to="/carrinho" className="cart-link">
            <img src={cartIcon} alt="Carrinho de compras" />
          </Link>
        </div>

      </div>

      {/* Menu de navegação */}
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/meus-pedidos">Meus Pedidos</Link>
      </nav>
    </header>
  );
}

export default Header;
