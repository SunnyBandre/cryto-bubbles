import React from "react";
import Chart from "react-apexcharts";

const SparklineChart = ({ data = [], color = "#00FF00" }) => {
  console.log("data in chart", data);

  const options = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: color,
            opacity: 0.4,
          },
          {
            offset: 100,
            color: color,
            opacity: 0,
          },
        ],
      },
    },

    tooltip: {
      enabled: true,
      theme: "dark",
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const timestamp = w.globals.seriesX[seriesIndex][dataPointIndex];
        const value = series[seriesIndex][dataPointIndex];

        const time = new Date(timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        return `
          <div style="padding:6px 10px; font-size:13px">
            <div style="margin-bottom:4px;"><strong>${time}</strong></div>
            <div style="color:${color}; font-weight:bold;">$${value.toFixed(
          2
        )}</div>
          </div>
        `;
      },
    },
    xaxis: {
      type: "datetime",
      crosshairs: {
        show: true,
        stroke: {
          width: 1,
          dashArray: 3,
        },
      },
    },
    colors: [color],
  };

  const series = [
    {
      data,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={250}
      width={"100%"}
    />
  );
};

export default SparklineChart;
