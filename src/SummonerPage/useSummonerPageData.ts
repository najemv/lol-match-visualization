import { useEffect, useState } from "react";
import MatchDto from "../api/dto/match-dto";
import SummonerDto from "../api/dto/summoner-dto";
import { getMatchByMatchId } from "../api/match";
import { getMatchesByPuuid } from "../api/matches";
import { getSummonerByName } from "../api/summoner";

export const useSummonerPageData = (name: string) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [summoner, setSummoner] = useState<SummonerDto>();
  const [matches, setMatches] = useState<MatchDto[]>();

  useEffect(() => {
    const fetchData = async () => {
      var summonerData = await getSummonerByName(name);
      if (summonerData === undefined) {
        setError(true);
        return;
      };

      var matchesIds = await getMatchesByPuuid(summonerData.puuid);
      if (matchesIds === undefined) {
        setError(true);
        return;
      }
      
      var matchesData: MatchDto[] = [];
      for (const matchId of matchesIds) {
        var matchData = await getMatchByMatchId(matchId);
        if (matchData === undefined) {
          setError(true);
          return;
        }
        matchesData.push(matchData);
      }

      
      setSummoner(summonerData);
      setMatches(matchesData);
      setLoading(false);
    }

    fetchData();
  }, []);


  return [loading, error, summoner, matches];
};

export default useSummonerPageData;