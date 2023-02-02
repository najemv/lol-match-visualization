import { GetRegion } from "../Utils/regions";
import { loadSettings } from "../Utils/settings";
import MatchTimelineDto from "./dto/matchTimelineDto";
import exampleData from "./example_data/match_timeline_by_matchid.json";
import { send } from "./sender";

export type MatchTimelineByMatchIdResponse = MatchTimelineDto | undefined;

export const getMatchTimelineByMatchId = async (matchId: string, region: string): Promise<MatchTimelineByMatchIdResponse> => {
  var settings = loadSettings();
  if (settings.usePreview) {
    return exampleData as MatchTimelineDto;
  }
  
  const reg = GetRegion(region)?.routing2 || "";
  const matchTimeline = await send(`/lol/match/v5/matches/${matchId}/timeline`, reg);
  return matchTimeline;
};

