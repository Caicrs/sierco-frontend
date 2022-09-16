import { Box, Box2 } from "./style";
import "./styles.css";
const Footer = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="col1">
          <p className="heading">Platform</p>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">What's new</a>
            </li>
          </ul>
        </div>

        <div className="col2">
          <p className="heading">Resources</p>
          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <p className="copyright">© 2020 boardme. All rights reserved.</p>

        <div className="policy">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
