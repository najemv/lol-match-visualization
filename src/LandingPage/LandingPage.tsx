import { Link } from "react-router-dom";


const LandingPage = () => {

  return (
    <div>
      Landing page
      <Link to={"match"}>Matches</Link>
      <Link to={"player"}>Players</Link>
    </div>
  );
};

export default LandingPage;