import { Link } from "react-router-dom";
import { testFn } from "../api/test";


const LandingPage = () => {
  testFn();
  return (
    <div>
      <h1>Landing page</h1>
      <p><Link to={"match/EUN1_3256227670"}>Example match</Link></p>
      <p><Link to={"summoner/Freeze"}>Example Player</Link></p>
    </div>
  );
};

export default LandingPage;