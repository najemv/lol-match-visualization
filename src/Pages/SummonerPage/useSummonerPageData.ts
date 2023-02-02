import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MatchDto from "../../api/dto/matchDto";
import SummonerDto from "../../api/dto/summonerDto";
import { getMatchByMatchId } from "../../api/match";
import { getMatchesByPuuid } from "../../api/matches";
import { getSummonerByName } from "../../api/summoner";

export const useSummonerPageData = () => {
  let { name } = useParams();
  let [searchParams] = useSearchParams();
  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [summoner, setSummoner] = useState<SummonerDto>();
  const [matches, setMatches] = useState<MatchDto[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      const region = searchParams.get("region") || "";

      var summonerData = await getSummonerByName(name || "", region);
      if (summonerData === undefined) {
        setError(true);
        return;
      };

      var matchesIds = await getMatchesByPuuid(summonerData.puuid, region);
      if (matchesIds === undefined) {
        setError(true);
        return;
      }
      
      var matchesData: MatchDto[] = [];
      for (const matchId of matchesIds) {
        var matchData = await getMatchByMatchId(matchId, region);
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
  }, [name]);


  return [loading, error, summoner, matches];
};

export default useSummonerPageData;