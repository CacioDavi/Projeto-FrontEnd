
import Logo from '../../assets/logoHeader.svg';
import './Header.css';
import Button from "../Button";
import cartIcon from "../../assets/Buy.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      {}
      <div className="header-top">

        <img src={Logo} alt="Logo da loja" className="logo" />

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
          <Link to="/register" className="register-link">
            Cadastre-se
          </Link>

          <Button onClick={()=>{window.location = "/login"}}>Entrar</Button>

          <Link to="/carrinho" className="cart-link">
            <img src={cartIcon} alt="Carrinho de compras" />
          </Link>
        </div>

      </div>

      {/* Menu de navegação */}
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/categories">Categorias</Link>
        <Link to="/orders">Meus Pedidos</Link>
      </nav>
    </header>
  );
}

export default Header;
