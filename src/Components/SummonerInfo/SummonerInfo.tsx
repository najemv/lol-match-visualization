import SummonerDto from "../../api/dto/summonerDto";
import "./SummonerInfo.css";

interface SummonerInformationProps {
  summoner: SummonerDto;
}

const SummonerInfo = ({summoner}: SummonerInformationProps) => {

  return (
    <div>
      <div className="summoner-name">
        <img src="/icons/profile_icon.jpg" className="summoner-icon"/>
        <div>
          <h1>{summoner.name}</h1>
          <p><b>Level:</b> {summoner.summonerLevel}</p>
        </div>
      </div>
    </div>
  );
};

export default SummonerInfo;