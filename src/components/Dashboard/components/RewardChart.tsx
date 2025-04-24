import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef } from "react";

interface Props {
  className: string;
}

const activityData = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 20 },
  { month: "Mar", value: 10 },
  { month: "Apr", value: 20 },
  { month: "May", value: 30 },
  { month: "Jun", value: 18 },
  { month: "Jul", value: 32 },
  { month: "Aug", value: 10 },
  { month: "Sep", value: 32 },
  { month: "Oct", value: 25 },
  { month: "Nov", value: 18 },
  { month: "Dec", value: 25 },
];
const RewardChart = ({ className }: Props) => {
  const chartRef = useRef<HTMLDivElement>(null!);

  const refreshMode = () => {
    const chart = new ApexCharts(chartRef.current, getChartOptions());
    chart.render();
    return chart;
  };

  useEffect(() => {
    const chart = refreshMode();
    return () => chart?.destroy();
  }, []);

  const chartSeries = [
    {
      name: "Rewards",
      data: activityData.map((item) => item.value),
    },
  ];
  function getChartOptions(): ApexOptions {
    const labelColor = "#00000";
    const baseColor = "#EDE8F0";
    return {
      chart: {
        fontFamily: "inherit",
        type: "bar",
        height: 250,
        width: "100%",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [baseColor],
      series: chartSeries,
      stroke: {
        curve: "smooth",
        show: true,
        colors: ["#EDE8F0"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#00000",
            fontSize: "12px",
            fontWeight: 600,
          },
        },
      },
      yaxis: [
        {
          labels: {
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
            offsetY: -10,
            offsetX: 23,
          },
        },
      ],
      tooltip: {
        marker: {
          fillColors: [baseColor],
        },
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return `${val}`;
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        offsetX: 0,
        fontSize: "13px",
        fontWeight: 600,
        labels: {
          colors: "#071437",
        },
        markers: {
          offsetX: -4,
          strokeWidth: 0,
          fillColors: [baseColor],
        },
      },
      grid: {
        strokeDashArray: 1,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };
  }

  return (
      <div className={className}>
        <div className="w-full">
          <div
              ref={chartRef}
              id="kt_charts_widget_3_chart"
              style={{ height: "264px", width: "100%" }}
          ></div>
        </div>
      </div>
  );
};

export default RewardChart;