import React, {useEffect, useRef} from 'react';
import ApexCharts, {ApexOptions} from "apexcharts";

interface Props {
    className?: string,
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
]
const RewardChart = ({className} : Props) => {
    const chartRef = useRef<HTMLDivElement | null>(null)
    // const {mode} = useThemeMode()
    const refreshMode = () => {
        if (!chartRef.current) return;

        // Clear previous chart
        // if(chartRef.current && chartRef.current.innerHTML){
        //     chartRef.current.innerHTML = "";
        //
        // }

        const chart = new ApexCharts(chartRef.current, getChartOptions());
        chart.render();

        return chart;
    };

    useEffect(() => {
        const chart = refreshMode()

        return () => {
            if (chart) {
                chart.destroy()
            }
        }
    }, [chartRef, activityData])

    const chartSeries = [
        {
            name: 'Rewards',
            data: activityData.map(item => item.value)
        }
    ]
    function getChartOptions(): ApexOptions {
        const labelColor = "#00000"
        const baseColor = "#EDE8F0"
        return {
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: 250,
                width: '100%',
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar:{
                    horizontal: false,
                    columnWidth: "50%",
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [baseColor],
            series: chartSeries,
            stroke: {
                curve: 'smooth',
                show: true,
                // width: 2,
                colors: ["#EDE8F0"],
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#00000",
                        fontSize: '12px',
                        fontWeight: 600
                    },
                    // offsetX: 10,
                },
            },
            yaxis: [
                {
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px',

                        },
                        offsetY:-10,
                        offsetX:23
                    },
                    // axisBorder: {
                    //     show: true,
                    //     offsetX: -20,
                    //     offsetY: 50
                    // },
                },
            ],
            tooltip: {
                marker: {
                    fillColors: [baseColor],
                },
                style: {
                    fontSize: '12px',
                },
                y: {
                    formatter: function (val) {
                        return  `${val}`
                    },
                },
            },
            legend: {
                show: true,
                position: "bottom",
                horizontalAlign: "center",
                offsetX: 0,
                fontSize: '13px',
                fontWeight:600,
                labels: {
                    colors: "#071437",
                },
                markers: {
                    // shape: 'square',
                    width: 21,
                    height: 8,
                    radius:0,
                    offsetX: -4,
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: [baseColor],
                },
            },
            grid: {
                // borderColor: borderColor,
                strokeDashArray: 1,
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
            },
        }
    }

    return (
        <div className={className}>
            <div className='w-100'>
                <div ref={chartRef} id='kt_charts_widget_3_chart' style={{height: '264px', width:"100%"}}></div>
            </div>
        </div>
    );
};

export default RewardChart;