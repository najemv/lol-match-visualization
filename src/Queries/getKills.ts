import MatchTimelineDto, { ChampionKillEventDto } from "../api/dto/matchTimelineDto";

const getKills = (
  timeline: MatchTimelineDto,
  timeFrom: number,
  timeTo: number,
  killerId: number,
  victimId: number) => {
  
  const filterBySummoner = (e: ChampionKillEventDto): boolean => {
    let passed = true;
    if (killerId !== 0) {
      passed &&= e.killerId === killerId;
    }

    if (victimId !== 0) {
      passed &&= e.victimId === victimId;
    }

    return passed;
  };
  
  const result = timeline.info.frames
    // why the time must be shifted??
    .filter(f => (f.timestamp / 60000) >= timeFrom + 1 && (f.timestamp / 60000) < timeTo + 1)
    .map(f => f.events
      .filter(e => e.type === "CHAMPION_KILL")
      .map(e => e as ChampionKillEventDto)
      .filter(e => filterBySummoner(e)))
    .reduce((e1, e2) => e1.concat(e2), []);
  
  return result;
};

export default getKills;