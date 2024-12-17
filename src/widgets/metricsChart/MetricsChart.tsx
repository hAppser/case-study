import { useMemo } from "react";
import { useMetricsQuery } from "@/shared/hooks/useMetricsQuery";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const MetricsChart = () => {
  const { data: metrics = [], isLoading, error } = useMetricsQuery();

  const chartData = useMemo(() => {
    const labels = metrics.map((metric) => metric.name);
    const values = metrics.map((metric) => metric.value);

    const options: ApexOptions = {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      colors: ["#00C1D4", "#9C27B0", "#00B39F"],
      xaxis: {
        categories: labels,
      },
      yaxis: {
        title: {
          text: "Values",
        },
        labels: {
          style: {
            colors: "#fff",
          },
        },
      },
      title: {
        text: "Metrics Overview",
        align: "center",
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          color: "#fff",
        },
      },
      theme: {
        mode: "dark",
      },
      grid: {
        show: true,
        borderColor: "#ddd",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
    };

    return {
      series: [
        {
          name: "Values",
          data: values,
        },
      ],
      options,
    };
  }, [metrics]);

  if (isLoading)
    return <div className="text-center py-10">Loading chart...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading chart data
      </div>
    );

  return (
    <div className="w-full py-6">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default MetricsChart;
