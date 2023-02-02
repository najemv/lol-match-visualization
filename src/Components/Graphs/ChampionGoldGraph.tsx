import { useContext, useState } from "react";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLegend, VictoryLine, VictoryTheme } from "victory";
import { MatchContext } from "../../Pages/MatchPage/MatchPage";
import getChampionGold from "../../Queries/getChampionGold";
import getChampionNames from "../../Queries/getChampionNames";
import { formattedTimestamp } from "../../Utils/helper";


const ChampionGoldGraph = () => {
  const {match, timeline} = useContext(MatchContext);
  const [hovered, setHovered] = useState(-1);

  if (!match ||!timeline) return <div></div>;
  const data = getChampionGold(match, timeline);
  const names = getChampionNames(match);

  let colormap = require('colormap');
  let colors = colormap({
    colormap: 'jet',
    nshades: 10,
    format: 'hex',
    alpha: 1
  });

  let legend = [];
  for (let i = 0; i < names.length; i++) {
    legend.push({
      name: names[i],
      symbol: {
        fill: hovered === -1 || hovered == i ? colors[i] : "gray"
      },
      labels: {
        fill: hovered === -1 || hovered == i ? "black" : "gray"
      }
    });
  }

  const lines = [];
  for (let i = 0; i < data.length; i++) {
    lines.push(
      <VictoryLine
        key={i}
        events={[{
          target: "data",
          eventHandlers: {
            onMouseOver: () => {
              setHovered(i);
            },
            onMouseOut: () => {
              setHovered(-1);
            }
          }
        }]}
        name={`line-${i}`}
        data={data[i]}
        x="timestamp"
        y="gold"
        style={{
          data: {
            stroke: hovered == -1 || i == hovered ? colors[i] : "gray",
            strokeWidth: i == hovered ? 5 : 1.5
          }
        }}
      />
    );
  }

  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        height={300}
      >

        <VictoryLabel text="Champion gold"
          x={20}
          y={20}
          style={{
            fontSize: 20
          }}
        />

        <VictoryAxis
          tickFormat={(x) => formattedTimestamp(x)}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => x}
        />

        <VictoryLegend x={50} y={50}
          name="team-1-legend"
          title="Team 1"
          centerTitle
          orientation="vertical"
          gutter={20}
          style={{
            border: {
              stroke: "black",
              fill: "white"
            },
            title: {
              fontSize: 10
            },
            labels: {
              fontSize: 8,
              lineHeight: 0.5
            }
          }}
          events={
            [
              {
                target: "data",
                eventHandlers: {
                  onMouseOver: (props) => {
                    return [
                      {
                        target: "data",
                        mutation: (props) => setHovered(props.index)
                      }
                    ]
                  },
                  onMouseOut: () => {
                    setHovered(-1);
                  }
                }
              },
              {
                target: "labels",
                eventHandlers: {
                  onMouseOver: (props) => {
                    return [
                      {
                        target: "data",
                        mutation: (props) => setHovered(props.index)
                      }
                    ]
                  },
                  onMouseOut: () => {
                    setHovered(-1);
                  }
                }
              },
            ]
          }
          data={legend.slice(0, 5)}
        />

        <VictoryLegend x={240} y={160}
          name="team-2-legend"
          title="Team 2"
          centerTitle
          orientation="vertical"
          gutter={20}
          style={{
            border: {
              stroke: "black",
              fill: "white"
            },
            title: {
              fontSize: 10
            },
            labels: {
              fontSize: 8,
              lineHeight: 0.5,
              padding: 10
            }
          }}
          events={
            [
              {
                target: "data",
                eventHandlers: {
                  onMouseOver: (props) => {
                    return [
                      {
                        target: "data",
                        mutation: (props) => setHovered(props.index + 5)
                      }
                    ]
                  },
                  onMouseOut: () => {
                    setHovered(-1);
                  }
                }
              },
              {
                target: "labels",
                eventHandlers: {
                  onMouseOver: (props) => {
                    return [
                      {
                        target: "data",
                        mutation: (props) => setHovered(props.index + 5)
                      }
                    ]
                  },
                  onMouseOut: () => {
                    setHovered(-1);
                  }
                }
              },
            ]
          }
          data={legend.slice(5, 10)}
        />
        
        {lines}
        
      </VictoryChart>
    </div>
  )
};

export default ChampionGoldGraph;