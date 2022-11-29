import { Link } from "react-router-dom";
import { testFn } from "../api/test";


const LandingPage = () => {
  testFn();
  return (
    <div>
      Landing page
      <Link to={"match/EUN1_3256227670"}>Matches</Link>
      <Link to={"summoner/Freeze"}>Example Player</Link>
    </div>
  );
};

export default LandingPage;