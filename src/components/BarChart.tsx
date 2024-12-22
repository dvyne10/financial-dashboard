import { Chart, ChartData, ChartOptions, Plugin } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { theme } from "../styles";

const BarChart: React.FC<{
  data: { day: string; deposits: number; withdrawals: number }[];
}> = ({ data }) => {
  const labels = data?.map((item) => item.day);
  const depositData = data?.map((item) => item.deposits);
  const withdrawalData = data?.map((item) => item.withdrawals);

  const legendMargin: Plugin = {
    id: "legendMargin",
    beforeInit: function (chart: Chart) {
      const fitValue = chart.legend!.fit; // Store the original `fit` method

      chart.legend!.fit = function fit() {
        fitValue.bind(chart.legend)(); // Call the original `fit` method
        this.height += 22; // Add custom margin
      };
    },
  };

  const chartData: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "Deposits",
        data: depositData,
        backgroundColor: theme.colors.barBlack,
        borderRadius: 30,
        borderSkipped: false,
        barPercentage: theme.breakpoints.tablet ? 0.5 : 0.6,
        categoryPercentage: theme.breakpoints.tablet ? 0.4 : 0.5,
      },
      {
        label: "Withdraws",
        data: withdrawalData,
        backgroundColor: theme.colors.barBlue,
        borderRadius: 30,
        borderSkipped: false,
        barPercentage: theme.breakpoints.tablet ? 0.5 : 0.6,
        categoryPercentage: theme.breakpoints.tablet ? 0.4 : 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true,
          padding: 20,
          color: theme.colors.lightCardText,
          textAlign: "right",
          font: {
            size: 15,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          color: theme.colors.gridLineColor,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: theme.colors.gridLineColor,
        },
      },
    },
    layout: {
      padding: {
        bottom: 28,
      },
    },
  } as ChartOptions<"bar">;

  return <Bar data={chartData} options={options} plugins={[legendMargin]} />;
};

export default BarChart;
