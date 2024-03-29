//@ts-nocheck
import React from "react";
import { Bar } from "react-chartjs-2";

function MarketCharts({ weekplot }) {
  console.log(weekplot, 6);
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          datasets: [
            {
              lineTension: 0.17,

              label: "Revenue Generated this week ($)",
              data: weekplot,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: [
              {
                gridLines: {
                  show: false,
                },
              },
            ],
            y: [
              {
                gridLines: {
                  show: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default MarketCharts;
