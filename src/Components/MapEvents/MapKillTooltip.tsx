import { useContext } from "react";
import { ParticipantDto } from "../../api/dto/matchDto";
import { ChampionKillEventDto } from "../../api/dto/matchTimelineDto";
import { MatchContext } from "../../Pages/MatchPage/MatchPage";
import { formattedTimestamp } from "../../Utils/helper";

interface MapKillTooltipProps {
  kill: ChampionKillEventDto
}

const MapKillTooltip = ({kill}: MapKillTooltipProps) => {

  const {match} = useContext(MatchContext);
  const killer = match?.info.participants[kill.killerId - 1] as ParticipantDto;
  const victim = match?.info.participants[kill.victimId - 1] as ParticipantDto;
  
  return (
    <div>
      {killer.summonerName} ({killer.championName}) killed<br /> {victim.summonerName} ({victim.championName}) in {formattedTimestamp(kill.timestamp)}
    </div>
  )
};

export default MapKillTooltip;