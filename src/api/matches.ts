import { GetRegion } from "../Utils/regions";
import { loadSettings } from "../Utils/settings";
import exampleData from "./example_data/matches_by_puuid.json";
import { send } from "./sender";

export type MatchesByPuuidResponse = string[] | undefined;

export const getMatchesByPuuid = async (puuid: string, region: string, count: number = 10): Promise<MatchesByPuuidResponse> => {
  var settings = loadSettings();
  if (settings.usePreview) {
    return exampleData as string[];
  }
  
  const reg = GetRegion(region)?.routing2 || "";
  const match = await send(`/lol/match/v5/matches/by-puuid/${puuid}/ids`, reg, {count: 10});
  return match;
};

