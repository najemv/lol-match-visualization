import SummonerDto from "./dto/summoner-dto";
import exampleData from "./example_data/summoner_by_name.json";

export type SummonerByNameResponse = SummonerDto | undefined;

export const getSummonerByName = async (name: string): Promise<SummonerByNameResponse> => {
  //await delay(2000);
  const summonerData = exampleData as SummonerDto;
  return summonerData;
};

export const getSummonerByPuuid = async (puuid: string): Promise<SummonerByNameResponse> => {
  //await delay(2000);
  const summonerData = exampleData as SummonerDto;
  return summonerData;
};



