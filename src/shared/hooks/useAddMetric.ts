import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddMetric = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newMetric: {
      name: string;
      value: number;
      category: string;
      date: string;
    }) => {
      const response = await fetch("/api/metrics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMetric),
      });

      if (!response.ok) {
        throw new Error("Failed to add metric");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["metrics"] });
    },
  });

  return mutation;
};
