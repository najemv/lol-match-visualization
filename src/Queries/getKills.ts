import MatchTimelineDto, { ChampionKillEventDto } from "../api/dto/match-timeline-dto";


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

  console.log(timeFrom, timeTo, killerId, victimId);
  console.log(timeline.info.frames.filter(f => f.timestamp >= timeFrom * 60000 && f.timestamp <= timeTo * 60000))
  const result = timeline.info.frames
    .filter(f => f.timestamp >= timeFrom * 60000 && f.timestamp <= timeTo * 60000)
    .map(f => f.events
      .filter(e => e.type === "CHAMPION_KILL")
      .map(e => e as ChampionKillEventDto)
      .filter(e => filterBySummoner(e)))
    .reduce((e1, e2) => e1.concat(e2), []);

  return result;
};

export default getKills;