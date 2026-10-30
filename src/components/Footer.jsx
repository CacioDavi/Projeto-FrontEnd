import "./Footer.css";
import logoFooter from "../assets/logo-footer.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <img
            src={logoFooter}
            alt="Digital Store"
            className="footer-logo"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="" />
            </a>

            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="" />
            </a>

            <a href="#" aria-label="Twitter">
              <img src={twitterIcon} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-info">
          <h3>Informação</h3>
          <a href="#">Sobre Drip Store</a>
          <a href="#">Segurança</a>
          <a href="#">Wishlist</a>
          <a href="#">Blog</a>
          <a href="#">Trabalhe conosco</a>
          <a href="#">Meus Pedidos</a>
        </div>

        <div className="footer-info">
          <h3>Categorias</h3>
          <a href="#">Camisetas</a>
          <a href="#">Calças</a>
          <a href="#">Bonés</a>
          <a href="#">Headphones</a>
          <a href="#">Tênis</a>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>
          <p>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota,
            Fortaleza - CE, 60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Digital Store</p>
      </div>

    </footer>
  );
}

export default Footer;
