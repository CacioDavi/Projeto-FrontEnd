import { useState } from 'react';
import Logo from '../../assets/logoHeader.svg';
import './Header.css';
import Button from "../Button/Button";
import cartIcon from "../../assets/Buy.svg";
import iconSearch from "../../assets/Search.svg";
import iconSearchActive from "../../assets/SearchActive.svg";
import { Link, NavLink } from 'react-router-dom';
import iconMenu from '../../assets/Menu.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [qtdItensCart, setQtdItensCart] = useState(0);
  const [actvSearchMobile, setActvSearchMobile] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navigationLinks = (
    <>
      <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
      <NavLink to="/products" onClick={closeMenu}>Produtos</NavLink>
      <NavLink to="/categories" onClick={closeMenu}>Categorias</NavLink>
      <NavLink to="/orders" onClick={closeMenu}>Meus Pedidos</NavLink>
    </>
  );

  return (
    <header className="header">
      <div className="header-top">
        
        <img className='menu-toggle' src={iconMenu} onClick={() => setMenuOpen((open) => !open)} alt={menuOpen ? 'Fechar menu' : 'Abrir menu'} />

        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={Logo} alt="Digital Store" className="logo" />
        </Link>

        <form className="search-form" role="search">
          <input
            type="search"
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
          />
          <button type="submit" aria-label="Pesquisar">
            <img src={iconSearch} alt="Pesquisar" />
          </button>
        </form>

        <div className="header-actions">
          <Link to="/register" className="register-link">
            Cadastre-se
          </Link>

          <Button onClick={() => { window.location.href = "/login"; }}>
            Entrar
          </Button>

          <Link to="/cart" className="cart-link" aria-label="Carrinho de compras">
            <img src={cartIcon} alt="" />
            {qtdItensCart > 0 && <span className="cart-count">{qtdItensCart}</span>}
          </Link>
        </div>

        <div className="mobile-actions">
          <button
            type="button"
            className="mobile-search-toggle"
            aria-label="Pesquisar"
            onClick={() => {setActvSearchMobile(!actvSearchMobile); document.querySelector('.mobile-search-form input')?.focus()}}
          >
            <img src={actvSearchMobile ? iconSearchActive : iconSearch} alt="Pesquisar" />
          </button>
          <Link to="/cart" className="cart-link" aria-label="Carrinho de compras">
            <img src={cartIcon} alt="" />
            {qtdItensCart > 0 && <span className="cart-count">{qtdItensCart}</span>}
          </Link>
        </div>
      </div>

      { actvSearchMobile && <form className="search-form mobile-search-form" role="search">
        <input
          type="search"
          placeholder="Pesquisar produto..."
          aria-label="Pesquisar produto"
        />
        <button type="submit" aria-label="Pesquisar">
          <img src={iconSearch} alt="Pesquisar" />
        </button>
      </form>}

      <nav className="navigation" aria-label="Navegação principal">
        {navigationLinks}
      </nav>

      {menuOpen && (
        <div className="mobile-menu-layer">
          <button
            type="button"
            className="menu-backdrop"
            aria-label="Fechar menu"
            onClick={closeMenu}
          />
          <nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Menu de páginas"
          >
            <div className="mobile-navigation-content">
              <h2>Páginas</h2>
              <div className="mobile-navigation-links">
                {navigationLinks}
              </div>
            </div>

            <div className="mobile-navigation-footer">
              <div className="drawer-login">
                <Button onClick={() => { window.location.href = "/login"; }}>
                  Entrar
                </Button>
              </div>
              <Link to="/register" className="register-link" onClick={closeMenu}>
                Cadastre-se
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
