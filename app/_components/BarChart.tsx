"use client";

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartData } from "./user/payload";
import { computeData } from "@/utils/helpers";
import { BASE_URL } from "@/utils/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly Signups",
    },
  },
};

export default function BarChart() {
  const [chartData, setChartData] = useState<ChartData[]>();

  useEffect(() => {
    async function getChartData() {
      const res = await fetch(`${BASE_URL}/api/v1/users/monthly-signups`, {
        method: "GET",
        credentials: "include",
      });

      const data: { data: { users: ChartData[] } } = await res.json();

      setChartData(data.data.users);
    }

    getChartData();
  }, []);

  if (!chartData)
    return (
      <div className="h-[260px] md:h-[400px] 2xl:h-[600px] bg-gray-200 dark:opacity-20 animate-pulse rounded-xl"></div>
    );

  return <Bar options={options} data={computeData(chartData || [])} />;
}
