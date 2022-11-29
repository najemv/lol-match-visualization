import MatchDto from "../api/dto/match-dto";
import { getFormatedDate } from "./helper";

interface TeamMemberData {
  name: string;
  id: number;
  champion: string;
  kills: number;
  deaths: number;
  assists: number;
};

interface TeamData {
  win: boolean;
  members: TeamMemberData[];
}

interface MatchSummaryData {
  date: string;
  gameMode:string;
  duration: number;
  team1: TeamData;
  team2: TeamData;
}

const getTeamMemberData = (match: MatchDto, win: boolean = false): TeamMemberData[] => {
  return match.info.participants.filter(p => p.win == win).map(p => {
    return {
      name: p.summonerName,
      id: p.participantId,
      champion: p.championName,
      kills: p.kills,
      deaths: p.deaths,
      assists: p.assists
    };
  });
};

const getMatchSummary = (match: MatchDto): MatchSummaryData => {
  return {
    date: getFormatedDate(match.info.gameCreation),
    gameMode: match.info.gameMode,
    duration: Math.ceil(match.info.gameDuration / 60),
    team1: {
      win: false,
      members: getTeamMemberData(match, false)
    },
    team2: {
      win: true,
      members: getTeamMemberData(match, true)
    }
  };
};

export default getMatchSummary;