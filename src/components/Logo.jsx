
import logo from '../assets/logo-header.svg';
import './Logo.css';

function Logo() {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Digital Store" />
    </a>
  );
}

export default Logo;
