import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="header-logo">
        <img src="/logo.png" />
        <Link to={"/"}>Main page</Link>
      </div>
      <div>
        <input type="text" placeholder="Write summoner's name..." />
        <button type="button">Search</button>
      </div>
      <div>
        <ul className="header-links">
          <li>Link 1</li>
          <li>Link 2</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;