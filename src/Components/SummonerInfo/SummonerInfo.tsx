import SummonerDto from "../../api/dto/summoner-dto";

interface SummonerInformationProps {
  summoner: SummonerDto;
}

const SummonerInfo = ({summoner}: SummonerInformationProps) => {

  return (
    <div>
      <h1>{summoner.name}</h1>
      <p>Level: {summoner.summonerLevel}</p>
      // TODO
    </div>
  );
};

export default SummonerInfo;