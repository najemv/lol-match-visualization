import { useEffect, useState } from "react";
import MatchDto from "../api/dto/match-dto";
import MatchTimelineDto from "../api/dto/match-timeline-dto";
import { getMatchByMatchId } from "../api/match";
import { getMatchTimelineByMatchId } from "../api/match-timeline";


const useMatchPageData = (matchId: string) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [timeline, setTimeline] = useState<MatchTimelineDto>();
  const [match, setMatch] = useState<MatchDto>();

  useEffect(() => {
    const fetchData = async () => {
      var match = await getMatchByMatchId(matchId);
      if (match === undefined) {
        setError(true);
        return;
      }

      var timeline = await getMatchTimelineByMatchId(matchId);
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