import { useQuery } from "@tanstack/react-query";
import { fetchMetrics } from "../api/api";

export interface Metric {
  id: number;
  name: string;
  value: number;
  date: string;
  category: string;
}

export const useMetricsQuery = () => {
  return useQuery<Metric[]>({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
  });
};
