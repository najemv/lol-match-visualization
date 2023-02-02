import MatchDto from "../../api/dto/matchDto";
import SummonerDto from "../../api/dto/summonerDto";
import MatchCard from "../../Components/MatchCard/MatchCard";
import SummonerInfo from "../../Components/SummonerInfo/SummonerInfo";
import InfoPage from "../InfoPage/InfoPage";
import useSummonerPageData from "./useSummonerPageData";
import "./SummonerPage.css";

const SummonerPage = () => {
  const [loading, error, summonerData, matchesData] = useSummonerPageData();
  
  if (loading) return <InfoPage text="Loading..."/>
  if (error) return <InfoPage text="Error retrieving the data"/>;

  const summoner = summonerData as SummonerDto;
  const matches = matchesData as MatchDto[];

  return (
    <div className="summoner-page">
      <div className="summoner-page-content">
        <SummonerInfo summoner={summoner} />
      </div>
      <div className="summoner-page-content">
        <h1>Last matches:</h1>
        {matches.map(m => <MatchCard key={m.info.gameId} match={m} />)}
      </div>
    </div>
  );
};

export default SummonerPage;