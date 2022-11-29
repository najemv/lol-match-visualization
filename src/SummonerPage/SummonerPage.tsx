import { assert } from "console";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDto from "../api/dto/match-dto";
import SummonerDto from "../api/dto/summoner-dto";
import { getMatchesByPuuid } from "../api/matches";
import { getSummonerByName } from "../api/summoner";
import MatchCard from "../Components/MatchCard/MatchCard";
import Navbar from "../Components/Navbar/Navbar";
import SummonerInfo from "../Components/SummonerInfo/SummonerInfo";
import useSummonerPageData from "./useSummonerPageData";
import "./SummonerPage.css";

const SummonerPage = () => {
  let { name } = useParams();
  if (name === undefined) {
    // TODO redirect to not found
    return <div>Missing name</div>;
  }
  const [loading, error, summonerData, matchesData] = useSummonerPageData(name);
  console.log(loading, error);
  // TODO Redirect
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error getting the data</div>;
  const summoner = summonerData as SummonerDto;
  const matches = matchesData as MatchDto[];


  return (
    <div className="page">
      <div className="left-container">
        <SummonerInfo summoner={summoner} />
      </div>
      <div className="right-container">
        <h1>Last matches:</h1>
        {matches.map(m => <MatchCard match={m} />)}
      </div>
    </div>
  );
};

export default SummonerPage;