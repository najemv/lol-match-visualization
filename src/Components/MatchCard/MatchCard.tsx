import { Link, useSearchParams } from "react-router-dom";
import MatchDto from "../../api/dto/matchDto";
import getMatchSummary from "../../Queries/getMatchSummary";
import "./MatchCard.css";

interface MatchCardProps {
  match: MatchDto;
}

const MatchCard = ({match}: MatchCardProps) => {

  let [searchParams] = useSearchParams();
  const region = searchParams.get("region") || "";
  var summary = getMatchSummary(match);

  return (
    <Link to={`/match/${match.metadata.matchId}?region=${region}`} className="match-card">
      <div className="match-card-info">
        <div className="match-card-info-item">
          <p>Type:</p>
          <p>{summary.gameMode}</p>
        </div>
        <div className="match-card-info-item">
          <p>Duration:</p>
          <p>{summary.duration} min</p>
        </div>
        <div className="match-card-info-item">
        <p>Date:</p>
        <p>{summary.date}</p>
        </div>
      </div>
      <div className="match-card-players">
        <div className=" team left-team">
          <ul>
          <div className={"team-status " + (summary.team1.win ? "winner" : "looser")}>
              {summary.team1.win ? "WIN" : "LOOSE"}
            </div>

            {summary.team1.members.map(m =>
              <li key={m.id}>
                <span className="match-card-kda-left">
                  {m.kills} / {m.deaths} / {m.assists}
                </span>
              <Link to={`/summoner/${m.name}?region=${region}`}>
                {m.name}
              </Link>
            </li>
            )}
          </ul>
        </div>

        <div className="match-card-separator">
          <img src="/icons/crossed_swords_icon.png" />
        </div>

        <div className="team right-team">
          <ul>
            <div className={"team-status " + (summary.team2.win ? "winner" : "looser")}>
              {summary.team2.win ? "WIN" : "LOOSE"}
            </div>
            
            {summary.team2.members.map(m =>
              <li key={m.id}>
                <Link to={`/summoner/${m.name}?region=${region}`}>
                  {m.name}
                </Link>
              <span className="match-card-kda-right">
                {m.kills} / {m.deaths} / {m.assists}
              </span>
            </li>
            )}
          </ul>
        </div>
      </div>      
    </Link>
  );
};

export default MatchCard;