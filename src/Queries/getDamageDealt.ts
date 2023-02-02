import MatchDto from "../api/dto/matchDto";

type DamageDealtDto = {
  participantId: number;
  summonerName: string;
  championName: string;
  totalDamage: number;
  label: number;
};

const getDamageDealt = (match: MatchDto) : DamageDealtDto[] => {
  const damageDealt = match.info.participants.map(paticipant => {
    return {
      participantId: paticipant.participantId,
      summonerName: paticipant.summonerName,
      championName: paticipant.championName,
      totalDamage: paticipant.totalDamageDealtToChampions,
      label: paticipant.totalDamageDealtToChampions
    }
  });

  return damageDealt;
};

export default getDamageDealt;