import { GetRegion } from "../Utils/regions";
import { loadSettings } from "../Utils/settings";
import SummonerDto from "./dto/summonerDto";
import exampleData from "./example_data/summoner_by_name.json";
import { send } from "./sender";

export type SummonerByNameResponse = SummonerDto | undefined;

export const getSummonerByName = async (name: string, region: string): Promise<SummonerByNameResponse> => {
  var settings = loadSettings();
  if (settings.usePreview) {
    return exampleData as SummonerDto;
  }

  const reg = GetRegion(region)?.routing1 || "";
  const summonerData = await send(`/lol/summoner/v4/summoners/by-name/${name}`, reg);
  return summonerData;
};

export const getSummonerByPuuid = async (puuid: string, region: string): Promise<SummonerByNameResponse> => {
  var settings = loadSettings();
  if (settings.usePreview) {
    return exampleData as SummonerDto;
  }

  const reg = GetRegion(region)?.routing1 || "";
  const summonerData = await send(`/lol/summoner/v4/summoners/by-puuid/${puuid}`, reg);
  return summonerData;
};



