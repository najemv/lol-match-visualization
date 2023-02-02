import React from "react";
import MatchDto from "../../api/dto/matchDto";
import MatchTimelineDto from "../../api/dto/matchTimelineDto";
import ChampionGoldGraph from "../../Components/Graphs/ChampionGoldGraph";
import DamageDealtGraph from "../../Components/Graphs/DamageDealtGraph";
import GoldDifferenceGraph from "../../Components/Graphs/GoldDifferenceGraph";
import MapEvents from "../../Components/MapEvents/MapEvents";
import InfoPage from "../InfoPage/InfoPage";
import useMatchPageData from "./useMatchPageData";
import "./MatchPage.css";

interface MatchContextInterface {
  match: MatchDto | undefined;
  timeline: MatchTimelineDto | undefined;
}

export const MatchContext = React.createContext<MatchContextInterface>({
  match: undefined,
  timeline: undefined,
});

const MatchPage = () => {
  const [loading, error, matchData, timelineData] = useMatchPageData();

  if (loading) return <InfoPage text="Loading..."/>
  if (error) return <InfoPage text="Error retrieving the data"/>;

  const match = matchData as MatchDto;
  const timeline = timelineData as MatchTimelineDto;
 
  return (
    <div className="match-page">
      <MatchContext.Provider value={{
        match: match,
        timeline: timeline
      }}>
        <div className="left-container">
          <h1>Events:</h1>
          <MapEvents />
        </div>
        <div className="right-container">
          <h1>Graphs:</h1>
          <DamageDealtGraph />
          <GoldDifferenceGraph />
          <ChampionGoldGraph />
        </div>
      </MatchContext.Provider>
    </div>
  );
};

export default MatchPage;