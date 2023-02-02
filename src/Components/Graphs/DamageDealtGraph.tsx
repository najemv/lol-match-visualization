import { useContext } from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme, VictoryTooltip } from "victory";
import { MatchContext } from "../../Pages/MatchPage/MatchPage";
import getDamageDealt from "../../Queries/getDamageDealt";

const DamageDealtGraph = () => {
  const {match} = useContext(MatchContext);
  
  if (!match) return <div></div>;
  const data = getDamageDealt(match);

  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        height={300}
        domainPadding={10}
        padding={{left: 100, bottom: 50, top: 50}}
      >
        <VictoryLabel text="Damage dealt to champions"
          x={20}
          y={20}
          style={{
            fontSize: 20
          }}
        />

        <VictoryAxis
          style={{
            axisLabel: {padding: 20}
          }}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x / 1000}k`}
          style={{
            grid: { stroke: 'black', strokeWidth: 1 }
          }}
        />

        <VictoryBar
          horizontal
          data={data}
          x="championName"
          y="totalDamage"
          labelComponent={<VictoryTooltip />}
          style={{
            data: {
              fill: "darkgoldenrod"
            }
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default DamageDealtGraph;