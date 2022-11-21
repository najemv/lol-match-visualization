import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header>
      <div>
        <Link to={"/"}>Main page</Link>
      </div>
      <div>
        <input type="text" placeholder="Write player name..." />
      </div>
      <div>
        <div>Link 1</div>
        <div>Link 2</div>
      </div>
    </header>
  );
};

export default Navbar;