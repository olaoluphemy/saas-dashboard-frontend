export interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  avatar: string;
}

export interface ChartData {
  month: string;
  count: number;
  id: number;
}

export type MetricType = "blue" | "danger" | "green";
