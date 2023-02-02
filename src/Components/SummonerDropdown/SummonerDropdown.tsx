import MatchDto from "../../api/dto/matchDto";
import getMatchSummary from "../../Queries/getMatchSummary";
import "./SummonerDropdown.css";

interface SummonerDropdownProps {
  label: string;
  onChange: Function;
  match: MatchDto;
}

const SummonerDropdown = ({label, onChange, match}: SummonerDropdownProps) => {

  var summary = getMatchSummary(match);
  return (
    <div className="dropdown-wrapper">
      <p className="dropdown-label">{label}</p>
      <select className="dropdown-select" onChange={(e) => onChange(e.target.value)}>
        <option value={0}>Everyone</option>
        <optgroup label="Team 1:">
          {summary.team1.members.map(m => 
            <option key={m.id} value={m.id}>{m.name} ({m.champion})</option>
          )}
        </optgroup>
        <optgroup label="Team 2:">
          {summary.team2.members.map(m => 
            <option key={m.id} value={m.id}>{m.name} ({m.champion})</option>
          )}
        </optgroup>
        
      </select>
    </div>
  );
};

export default SummonerDropdown;