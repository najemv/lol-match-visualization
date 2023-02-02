import MatchDto from "../api/dto/matchDto";

const getChampionNames = (match: MatchDto) => {
  return match.info.participants.map(p => p.championName);
};

export default getChampionNames;