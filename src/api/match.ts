import MatchDto from "./dto/match-dto";
import exampleData from "./example_data/match_by_matchid.json";

export type MatchByMatchIdResponse = MatchDto | undefined;

export const getMatchByMatchId = async (matchId: string): Promise<MatchByMatchIdResponse> => {
  //await delay(2000);
  const matchData = exampleData as MatchDto;
  return matchData;
};

