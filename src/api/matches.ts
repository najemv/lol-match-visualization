import exampleData from "./example_data/matches_by_puuid.json";

export type MatchesByPuuidResponse = string[] | undefined;

export const getMatchesByPuuid = async (puuid: string): Promise<MatchesByPuuidResponse> => {
  //await delay(2000);
  const matchesCodes = exampleData as string[];
  return matchesCodes;
};

