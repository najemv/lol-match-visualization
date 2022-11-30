// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import "./MapEvents.css";
import Map from "../Map/Map";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import MatchDto from "../../api/dto/match-dto";
import MatchTimelineDto from "../../api/dto/match-timeline-dto";
import getMatchSummary from "../../Queries/getMatchSummary";
import getKills from "../../Queries/getKills";
import SummonerDropdown from "../SummonerDropdown/SummonerDropdown";

interface MapEventsProps {
  match: MatchDto;
  timeline: MatchTimelineDto;
}


const MapEvents = ({match, timeline}: MapEventsProps) => {
  const sizer = useRef();
  const slider = useRef();
  const [size, setSize] = useState(0);
  const [mapItems, setMapItems] = useState([]);
  const [summary] = useState(getMatchSummary(match));
  const [filterData, setFilterData] = useState({
    timeFrom: 0,
    timeTo: summary.duration,
    killerId: 0,
    victimId: 0
  });

  const onTimeChange = (values: number[]) => {
    if (values[0] !== filterData.timeFrom || values[1] !== filterData.timeTo) {
      setFilterData({
        ...filterData,
        timeFrom: values[0],
        timeTo: values[1]
      });
    }
  }

  const setKiller = (killerId: string) => {
    killerId = parseInt(killerId);
    if (killerId !== filterData.killerId) {
      setFilterData({
        ...filterData,
        killerId: killerId
      });
    }
  };

  const setVictim = (victimId: string) => {
    victimId = parseInt(victimId);
    if (victimId !== filterData.victimId) {
      setFilterData({
        ...filterData,
        victimId: victimId
      });
    }
  };
  
  useEffect(() => {
    function handleResize() {
      setSize(sizer.current.clientWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const events = getKills(timeline, filterData.timeFrom, filterData.timeTo,
      filterData.killerId, filterData.victimId);
    const data = events.map(e => {
      return {
        position: {
          x: e.position.x / 10000,
          y: e.position.y / 10000
        },
        text: `${e.killerId} killed ${e.victimId} at ${e.timestamp}`
      }
    });
    setMapItems(data);
  }, [filterData])

  return (
    <div ref={sizer}>
      <Map width={size} backgroundImage={"/howling_abyss.webp"} height={size} items={mapItems} />

      <TwoThumbInputRange onChange={onTimeChange} values={[filterData.timeFrom, filterData.timeTo]} min={0} max={summary.duration}/>

      <SummonerDropdown label="Killer:" onChange={setKiller} match={match} />
      <SummonerDropdown label="Victim:" onChange={setVictim} match={match} />
      
    </div>
  );
};

export default MapEvents;