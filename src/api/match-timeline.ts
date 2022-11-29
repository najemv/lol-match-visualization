import exampleData from "./example_data/match_timeline_by_matchid.json";
import { useEffect, useState } from "react";
import MatchTimelineDto from "./dto/match-timeline-dto";
import { delay } from "./api-helper";

export type MatchTimelineByMatchIdResponse = MatchTimelineDto | undefined;

export const getMatchTimelineByMatchId = async (matchId: string): Promise<MatchTimelineByMatchIdResponse> => {
  //await delay(2000);
  const data: MatchTimelineDto = exampleData as MatchTimelineDto;
  return data;
};

