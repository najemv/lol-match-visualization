import { Link } from "react-router-dom";
import MatchDto from "../../api/dto/match-dto";
import getMatchSummary from "../../Queries/getMatchSummary";
import "./MatchCard.css";

interface MatchCardProps {
  match: MatchDto;
}

const MatchCard = ({match}: MatchCardProps) => {

  var summary = getMatchSummary(match);

  return (
    <Link to={`/match/${match.metadata.matchId}`}>
      <div className="match-card">
        <div>
          <p>{summary.gameMode}</p>
          <p>{summary.duration}</p>
          <p>{summary.date}</p>
        </div>
        <div>
          <ul>
            {summary.team1.win ? "WIN" : "LOOSE"}
            {summary.team1.members.map(m =>
              <li>{m.kills}/{m.deaths}/{m.assists} <Link to={`/summoner/${m.name}`}>{m.name}</Link></li>
            )}
          </ul>
        </div>
        <div>
          <p>X</p>

        </div>
        <div>
          <ul>
            {summary.team2.win ? "WIN" : "LOOSE"}
            {summary.team2.members.map(m =>
              <li><Link to={`/summoner/${m.name}`}>{m.name}</Link> {m.kills}/{m.deaths}/{m.assists}</li>
            )}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default MatchCard;