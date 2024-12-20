import { ChartData, ChartOptions } from "chart.js";
import React, { Component } from "react";
import { PolarArea } from "react-chartjs-2";
import { theme } from "../styles";

const data = {
  labels: ["Entertainment", "Investment", "Bill Expense", "Others"],
  datasets: [
    {
      label: "Expense Distribution",
      data: [30, 20, 15, 35], // Percentages
      backgroundColor: [
        theme.colors.darkBluePieColor, // Entertainment
        theme.colors.orangePieColor, //  Investment
        theme.colors.barBlue, // Bill Expense
        theme.colors.text, // Others
      ],
      borderWidth: 10,
    },
  ],
};

const options = {
  responsive: true,
  elements: {
    arc: {
      angle: [108, 72, 54, 126],
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          return `${context.label}: ${context.raw}%`;
        },
      },
    },
  },
  scales: {
    r: {
      startAngle: 90,
      grid: {
        display: false,
      },
      ticks: {
        display: false, // Hide the radial axis labels
      },
    },
  },
} as ChartOptions<"polarArea">;

const labelInsideSegments = {
  id: "labelInsideSegments",
  afterDatasetDraw(chart: any) {
    const { ctx, data, chartArea } = chart;
    const dataset = data.datasets[0];
    const centerX = chartArea.width / 2 + chartArea.left; // Chart center X
    const centerY = chartArea.height / 2 + chartArea.top; // Chart center Y

    dataset.data.forEach((value: number, index: number) => {
      const arc = chart.getDatasetMeta(0).data[index];
      const { startAngle, endAngle, outerRadius } = arc;

      // Calculate the midpoint angle
      const angle = (startAngle + endAngle) / 2;

      // Calculate the label position (midpoint of the segment)
      const x = centerX + Math.cos(angle) * (outerRadius / 1.5);
      const y = centerY + Math.sin(angle) * (outerRadius / 1.5);

      // Draw the label text
      ctx.save();
      ctx.fillStyle = "#ffffff"; // Label color
      ctx.font = "12px Inter";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${data.labels[index]}`, x, y - 10); // Draw the label
      ctx.fillText(`${value}%`, x, y + 10); // Draw the percentage
      ctx.restore();
    });
  },
};

const PieChart = () => {
  return (
    <PolarArea data={data} options={options} plugins={[labelInsideSegments]} />
  );
};

export default PieChart;
