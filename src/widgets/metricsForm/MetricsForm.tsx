"use client";

import { useAddMetric } from "@/shared/hooks/useAddMetric";
import { useState } from "react";
import moment from "moment";
import InputField from "./ui/InputField";

const MetricsForm = () => {
  const [metricName, setMetricName] = useState("");
  const [metricValue, setMetricValue] = useState("");
  const [metricCategory, setMetricCategory] = useState("");

  const { mutate: addMetric, isPending, error } = useAddMetric();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!metricName || !metricValue) {
      return;
    }

    addMetric({
      name: metricName,
      category: metricCategory,
      value: parseInt(metricValue),
      date: moment().format("YYYY-MM-DD"),
    });

    setMetricName("");
    setMetricCategory("");
    setMetricValue("");
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 rounded-md border">
      <h3 className="text-xl font-semibold mb-4">Add New Metric</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          id="metric-name"
          label="Metric Name"
          type="text"
          value={metricName}
          onChange={(e) => setMetricName(e.target.value)}
          className="w-full p-2 border border-gray-700 text-black rounded"
        />
        <InputField
          id="metric-category"
          label="Metric Category"
          type="text"
          value={metricCategory}
          onChange={(e) => setMetricCategory(e.target.value)}
          className="w-full p-2 border border-gray-700 text-black rounded"
        />
        <InputField
          id="metric-value"
          label="Metric Value"
          type="number"
          value={metricValue}
          onChange={(e) => setMetricValue(e.target.value)}
          className="w-full p-2 border border-gray-700 text-black rounded"
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {isPending ? "Adding..." : "Add Metric"}
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">Error: {error.message}</div>}
    </div>
  );
};

export default MetricsForm;
