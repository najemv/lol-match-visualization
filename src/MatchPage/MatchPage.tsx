import { useParams } from "react-router-dom";
import MatchDto from "../api/dto/match-dto";
import MatchTimelineDto from "../api/dto/match-timeline-dto";
import MapEvents from "../Components/MapEvents/MapEvents";
import "./MatchPage.css";
import useMatchPageData from "./useMatchPageData";

const MatchPage = () => {
  const { matchId } = useParams();
  if (matchId == undefined) {
    return <div>Missing id</div>;
  }

  const [loading, error, matchData, timelineData] = useMatchPageData(matchId);
  
  // TODO Redirect
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error getting the data</div>;
  const match = matchData as MatchDto;
  const timeline = timelineData as MatchTimelineDto;

 
  return (
    <div className="page">
      <div className="left-container">
        <h1>Map events:</h1>
        <MapEvents match={match} timeline={timeline} />
      </div>
      <div className="right-container">
        <h1>Filters:</h1>
        <p>TODO</p>
      </div>
    </div>
  );
};

export default MatchPage;