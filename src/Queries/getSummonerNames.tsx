import MatchDto from "../api/dto/matchDto";

const getSummonerNames = (match: MatchDto) => {
  return match.info.participants.map(p => p.summonerName);
};

export default getSummonerNames;