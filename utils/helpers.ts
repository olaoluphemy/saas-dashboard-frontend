import { ChartData } from "@/app/_components/user/payload";

export function computeData(dataArr: ChartData[]) {
  const data = {
    labels: dataArr.map((cur) => cur.month),
    datasets: [
      {
        label: "Month",
        data: dataArr.map((data) => data.count),
        backgroundColor: "#2f80ed",
        borderRadius: 500,
      },
    ],
  };

  return data;
}
