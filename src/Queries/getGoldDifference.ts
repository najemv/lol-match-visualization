import MatchTimelineDto from "../api/dto/matchTimelineDto";

export type GoldDifferenceDto = {
  timestamp: number;
  difference: number;
}

const getGoldDifference = (timeline: MatchTimelineDto) => {
  const data = timeline.info.frames.map(frame => {
    const timestamp = frame.timestamp;
    const participants = frame.participantFrames;
    let team1Gold = participants[1].totalGold + 
                    participants[2].totalGold + 
                    participants[3].totalGold + 
                    participants[4].totalGold +
                    participants[5].totalGold;

    let team2Gold = participants[6].totalGold + 
                    participants[7].totalGold + 
                    participants[8].totalGold + 
                    participants[9].totalGold +
                    participants[10].totalGold;
    
    return {
      timestamp: timestamp,
      difference: team1Gold - team2Gold
    }
  });

  return data;
};

export default getGoldDifference;