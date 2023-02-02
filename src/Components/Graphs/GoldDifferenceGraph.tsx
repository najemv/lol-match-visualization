import { useContext } from "react";
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel, VictoryTheme } from "victory";
import { MatchContext } from "../../Pages/MatchPage/MatchPage";
import getGoldDifference, { GoldDifferenceDto } from "../../Queries/getGoldDifference";
import { formattedTimestamp } from "../../Utils/helper";

const findIntersection = (current: GoldDifferenceDto, prev: GoldDifferenceDto) => {
  const diffX = current.timestamp - prev.timestamp;
  const diffY = current.difference - prev.difference;
  const t = -prev.difference / diffY;
  const newX = prev.timestamp + t * diffX;
  const newY = prev.difference + t * diffY;

  return {
    timestamp: newX,
    difference: newY
  }
};

const divideData = (data: any) => {
  let positiveData = [];
  let negativeData = [];

  for ( let i = 1; i < data.length; i++) {
    if (data[i - 1].difference < 0 && data[i].difference < 0) {
      negativeData.push(data[i]);
    }
    if (data[i - 1].difference > 0 && data[i].difference > 0) {
      positiveData.push(data[i]);
    }
    if (data[i - 1].difference < 0 && data[i].difference > 0) {
      const intersection = findIntersection(data[i], data[i - 1]);
      positiveData.push(intersection);
      negativeData.push(intersection);
      positiveData.push(data[i]);
    }
    if (data[i - 1].difference > 0 && data[i].difference < 0) {
      const intersection = findIntersection(data[i], data[i - 1]);
      positiveData.push(intersection);
      negativeData.push(intersection);
      negativeData.push(data[i]);
    }
  }

  return [positiveData, negativeData];
};

const GoldDifferenceGraph = () => {
  const {timeline} = useContext(MatchContext);

  if (!timeline) return <div></div>;
  const data = getGoldDifference(timeline);

  const [positiveData, negativeData] = divideData(data);

  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLabel text="Team gold difference"
          x={20}
          y={20}
          style={{
            fontSize: 20
          }}
        />

        <VictoryLabel text="Team 1"
          x={60}
          y={50}
        />

        <VictoryLabel text="Team 2"
          x={60}
          y={280}
        />
        
        <VictoryAxis
          offsetY={50}
          tickFormat={(x) => formattedTimestamp(x)}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x}`}
          tickCount={10}
        />

        <VictoryArea
          labels={({ data, index }) => data[index].difference != 0 ? data[index].difference : ""}
          labelComponent={<VictoryLabel dy={-5} />}
          style={{
            data: {
              fill: "green"
            },
            labels: {
              fontSize: 8
            }
          }}
          x="timestamp"
          y="difference"
          data={positiveData}
        />

        <VictoryArea
          labels={({ data, index }) => data[index].difference != 0 ? data[index].difference : ""}
          labelComponent={<VictoryLabel dy={5} />}
          style={{
            data: {
              fill: "red"
            },
            labels: {
              fontSize: 8
            }
          }}
          x="timestamp"
          y="difference"
          data={negativeData}
        />
      </VictoryChart>
    </div>
  )
};

export default GoldDifferenceGraph;