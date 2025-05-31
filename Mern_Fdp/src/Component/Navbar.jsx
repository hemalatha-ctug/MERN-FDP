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
        <li className="element"><Link to="/form">Form</Link></li>
        <li className="element"><Link to="/f">Effect</Link></li>
        <li classname="element"><Link to="/todos">Todos</Link></li>
        <li classname="element"><Link to="/Login">Login</Link></li>
        <li classname="element"><Link to="/SignUp">Signup</Link></li>
      </div></ul>
    </nav>
  );
};

export default Navbar;
