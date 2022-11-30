import MatchDto from "../../api/dto/match-dto";
import getMatchSummary from "../../Queries/getMatchSummary";

interface SummonerDropdownProps {
  label: string;
  onChange: Function;
  match: MatchDto;
}


const SummonerDropdown = ({label, onChange, match}: SummonerDropdownProps) => {

  var summary = getMatchSummary(match);
  return (
    <div>
      <p>{label}</p>
      <select id="victimSelection" onChange={(e) => onChange(e.target.value)}>
        <option value={0}>Everyone</option>
        {summary.team1.members.map(m => 
          <option value={m.id}>{m.name} (Team 1)</option>
        )}
        {summary.team2.members.map(m => 
          <option value={m.id}>{m.name} (Team 2)</option>
        )}
      </select>
    </div>
  );
};

export default SummonerDropdown;