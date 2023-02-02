import { GetRegion } from "../Utils/regions";
import { loadSettings } from "../Utils/settings";
import MatchDto from "./dto/matchDto";
import exampleData from "./example_data/match_by_matchid.json";
import { send } from "./sender";

export type MatchByMatchIdResponse = MatchDto | undefined;

export const getMatchByMatchId = async (matchId: string, region: string): Promise<MatchByMatchIdResponse> => {
  var settings = loadSettings();
  if (settings.usePreview) {
    return exampleData as MatchDto;
  }
  
  const reg = GetRegion(region)?.routing2 || "";
  const matches = await send(`/lol/match/v5/matches/${matchId}`, reg);
  return matches;
};

