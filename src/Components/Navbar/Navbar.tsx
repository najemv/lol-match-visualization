import { Link, useNavigate } from "react-router-dom";
import { REGIONS } from "../../Utils/regions";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const formSubmit = (e: any) => {
    e.preventDefault();
    const summonerName = e.target["0"].value;
    const region = e.target["1"].value;
    return navigate(`/summoner/${summonerName}?region=${region}`);
  }

  return (
    <header>
      <div className="header-logo">
        <Link to={"/"}><img src="/logo.png" /></Link>
      </div>
      <form onSubmit={formSubmit}>
        <input className="textbox-name" type="text" placeholder="Write summoner's name..." />
        <select className="dropdown-region" name="region">
          {REGIONS.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
        </select>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div>
        <ul className="header-links">
          <li><a href="https://u.gg/" target="_blank">U.GG</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;