// @ts-nocheck
import interpolate from "color-interpolate";
import { useContext, useEffect, useRef, useState } from "react";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import { MatchContext } from "../../Pages/MatchPage/MatchPage";
import getKills from "../../Queries/getKills";
import getMatchSummary from "../../Queries/getMatchSummary";
import { getMapImage } from "../../Utils/helper";
import Map from "../Map/Map";
import SummonerDropdown from "../SummonerDropdown/SummonerDropdown";
import "./MapEvents.css";
import MapKillTooltip from "./MapKillTooltip";

const MapEvents = () => {
  const {match, timeline} = useContext(MatchContext);
  const sizer = useRef();
  const [size, setSize] = useState(0);
  const [mapItems, setMapItems] = useState([]);
  const [summary] = useState(getMatchSummary(match));
  const [filterData, setFilterData] = useState({
    timeFrom: 0,
    timeTo: summary.duration,
    killerId: 0,
    victimId: 0
  });
 
  const colormap = interpolate(['red', 'yellow', 'lightgreen']);

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
    setFilterData({...filterData});
  }, []);

  useEffect(() => {
    const events = getKills(timeline, filterData.timeFrom, filterData.timeTo,
      filterData.killerId, filterData.victimId);
    const data = events.map(e => {
      const start = filterData.timeFrom;
      const end = filterData.timeTo;
      const actual = e.timestamp / 60000;
      const percentage = (actual - end) / (start - end);
      return {
        position: {
          x:  e.position.x / 15000,
          y: e.position.y / 15000,
        },
        color: colormap(percentage),
        tooltip: <MapKillTooltip kill={e} />
      }
    });
    setMapItems(data);
  }, [filterData]);

  return (
    <div ref={sizer} className="map-events">
      <Map width={size} backgroundImage={getMapImage(match.info.gameMode)} height={size} items={mapItems} />

      <div className="two-thumb-wrapper">
        <p>Interval:</p>
        <TwoThumbInputRange
          onChange={onTimeChange} values={[filterData.timeFrom, filterData.timeTo]}
          min={0} max={summary.duration}
          trackColor={"black"}
          thumbColor={"black"}
          labelStyle={{
            backgroundColor: "black",
            color: "white",
            height: "30px",
            borderRadius: "10px"
          }}
          inputStyle={{
            width: size - 132,
          }}
          labelTextStyle={{
            fontSize: "20px"
          }}
          />
      </div>

      <SummonerDropdown label="Killer:" onChange={setKiller} match={match} />
      <SummonerDropdown label="Victim:" onChange={setVictim} match={match} />
      
    </div>
  );
};

export default MapEvents;