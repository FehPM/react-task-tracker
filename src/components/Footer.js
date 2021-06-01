import { Link } from "react-router-dom";
import { CgCoffee } from "react-icons/all";

const Footer = () => {
  return (
    <div>
      <p>
        Made with <CgCoffee /> by FehPM
      </p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Footer;
