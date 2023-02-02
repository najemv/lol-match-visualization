import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MatchDto from "../../api/dto/matchDto";
import MatchTimelineDto from "../../api/dto/matchTimelineDto";
import { getMatchByMatchId } from "../../api/match";
import { getMatchTimelineByMatchId } from "../../api/matchTimeline";


const useMatchPageData = () => {
  const { matchId } = useParams();
  let [searchParams] = useSearchParams();
  
  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [timeline, setTimeline] = useState<MatchTimelineDto>();
  const [match, setMatch] = useState<MatchDto>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const region = searchParams.get("region") || "";

      var match = await getMatchByMatchId(matchId || "", region);
      if (match === undefined) {
        setError(true);
        return;
      }

      var timeline = await getMatchTimelineByMatchId(matchId || "", region);
      if (timeline === undefined) {
        setError(true);
        return;
      };
      
      setMatch(match);
      setTimeline(timeline);
      setLoading(false);
    }

    fetchData();
  }, []);


  return [loading, error, match, timeline];
}

export default useMatchPageData;