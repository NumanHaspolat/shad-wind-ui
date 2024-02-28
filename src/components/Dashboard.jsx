import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";

const Dashboard = () => {
  const data = [
    { quarter: 1, earnings: Math.random() * 100000 },
    { quarter: 2, earnings: Math.random() * 100000 },
    { quarter: 3, earnings: Math.random() * 100000 },
    { quarter: 4, earnings: Math.random() * 100000 },
    { quarter: 5, earnings: Math.random() * 100000 },
    { quarter: 6, earnings: Math.random() * 100000 },
    { quarter: 7, earnings: Math.random() * 100000 },
    { quarter: 8, earnings: Math.random() * 100000 },
    { quarter: 9, earnings: Math.random() * 100000 },
    { quarter: 10, earnings: Math.random() * 100000 },
    { quarter: 11, earnings: Math.random() * 100000 },
    { quarter: 12, earnings: Math.random() * 100000 },
  ];

  const barStyle = {
    data: {
      fill: "white",
    },
  };

  return (
    <VictoryChart domainPadding={{ x: 50 }} maxWidth={1000}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        tickFormat={[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]}
        style={{
          axis: { stroke: "#09090B" },
          ticks: { stroke: "#09090B" },
          tickLabels: {
            fill: "#6A6A6B",
            fontSize: 11,
            padding: 5,
            angle: 0,
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => `$${x / 1000}k`}
        style={{
          axis: { stroke: "#09090B" },
          ticks: { stroke: "#09090B" },
          tickLabels: {
            fill: "#6A6A6B",
            fontSize: 11,
            textAnchor: "end",
            verticalAnchor: "middle",
          },
        }}
      />
      <VictoryBar
        data={data}
        x="quarter"
        y="earnings"
        style={barStyle}
        barWidth={20}
      />
    </VictoryChart>
  );
};

export default Dashboard;
