import logo from "../assets/logo/logo.svg";
import '../styles/Footer.css';

function FooterComp() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p>
        © 2023 Real Estate Solutions. All rights reserved.
        <img src={logo} alt=" logo" />
      </p>
      <ul className="footer-links">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </footer>
  );
}

export default FooterComp;
