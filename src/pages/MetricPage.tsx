"use client";

import MetricsForm from "@/widgets/metricsForm/MetricsForm";
import MetricsTable from "@/widgets/metricsTable/MetricsTable";
import dynamic from "next/dynamic";

const MetricsChart = dynamic(
  () => import("@/widgets/metricsChart/MetricsChart"),
  {
    ssr: false,
  }
); // As ApexChart need window object

export default function MetricPage() {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-auto">
      <MetricsTable />
      <MetricsChart />
      <MetricsForm />
    </div>
  );
}
