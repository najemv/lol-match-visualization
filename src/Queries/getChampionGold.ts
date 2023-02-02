import MatchDto from "../api/dto/matchDto"
import MatchTimelineDto, { ParticipantFrameDto, ParticipantFramesDto } from "../api/dto/matchTimelineDto"

const getChampionGold = (match: MatchDto, timeline: MatchTimelineDto) => {
  const result = [];
  
  for (let i = 1; i <= 10; i++) {
    const data = timeline.info.frames.map(frame => {
      return {
        timestamp: frame.timestamp,
        gold: ((frame.participantFrames as any)[i] as ParticipantFrameDto).totalGold
      }
    });

    result.push(data);
  }
  
  return result;
};

export default getChampionGold;