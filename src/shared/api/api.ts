import { apiClient } from "./apiСlient";

export const fetchMetrics = async () => {
  const response = await apiClient.get("/metrics");
  return response.data;
};
