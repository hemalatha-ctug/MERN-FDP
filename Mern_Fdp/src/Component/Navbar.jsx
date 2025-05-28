import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="navbar">
        <li className="element"><Link to="/">Home</Link></li>
        <li className="element"><Link to="/ab">About</Link></li>
        <li className="element"><Link to="/ser">Service</Link></li>
        <li className="element"><Link to="/con">Contact Us</Link></li>
      </div></ul>
    </nav>
  );
};

export default Navbar;
