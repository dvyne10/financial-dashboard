import { ChartData, ChartOptions } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { useUserData } from "../hooks/useUserData";

const LineChart = () => {
  const { isLoading, balanceHistory } = useUserData();
  function createGradient(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 250);

    gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
    gradient.addColorStop(1, "rgba(45, 96, 255, 0)");

    return gradient;
  }

  // Data for the chart
  const chartData = {
    labels: balanceHistory?.map((item: any) => item?.month),
    datasets: [
      {
        label: "Performance",
        data: balanceHistory?.map((item: any) => item?.val),
        borderColor: "#1814F3",
        borderWidth: 3,
        backgroundColor: (context) => {
          return createGradient(context.chart.ctx);
        },
        fill: {
          target: "origin",
        },
        tension: 0.6,
        pointRadius: 0,
      },
    ],
  } as ChartData<"line">;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        border: { dash: [4, 4], display: false },
        grid: {
          display: true,
          color: "#DFE5EE",
          tickColor: "#718EBF",
        },
      },
      y: {
        border: { dash: [4, 4], display: false },
        grid: {
          display: true,
          color: "#DFE5EE",
          tickColor: "#718EBF",
        },
        ticks: {
          stepSize: 200,
        },
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  } as ChartOptions<"line">;
  return balanceHistory ? (
    <Line data={chartData} options={chartOptions} />
  ) : (
    <></>
  );
};

export default LineChart;
