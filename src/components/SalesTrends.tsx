import Context from "@/store/context";
import { ApexOptions } from "apexcharts";
import { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import DropDown from "./UI/DropDown";



const SalesTrends = () => {
    const { darkMode } = useContext(Context);

    const series = [{ name: "bar", data: [10, 20, 30, 40, 50, 90, 20, 50, 80, 67, 9, 44] }]

    const options: ApexOptions = {

        chart: {
            background: "transparent",
            foreColor: darkMode ? "white" : "gray",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            dropShadow: {
                enabled: true,
                top: 3,
                left: 2,
                blur: 4,
                opacity: 1,
                color: darkMode ? '#061b16' : '#ccc'
              }
        },
        legend: {
            show: false,
        },
        grid: {
            show: true,
            strokeDashArray: 7
        },
        xaxis: {
            // categories: [],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
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
            labels: {
                show: true,
                // color: "black"
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: darkMode ? ["white"] :["gray"],
                    fontSize: "12px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 500,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 15,
                // columnWidth: "50%",
                distributed: false,
                borderRadiusApplication: 'end',
            },
        },
        fill: {
            colors: ["#34CAA5"],
        },
        dataLabels: {
            enabled: false,
        },
        title: {
            text: "Sales",
        },
    };




    return (
        <div className={`${darkMode ? "bg-dark-medium-green shadow-xl" : "bg-white glossy"} rounded-lg px-4  pt-4 `}>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 lg:gap-0 mb-8">
                <h1 className={`${darkMode ? "text-white" : "text-gray-800"} text-3xl`}>Sales Trends</h1>
                <div className="flex gap-3 items-center">
                    <span className={`font-medium ${darkMode ? "text-white" : "text-gray-800"} `}>Sort by: </span>
                    <DropDown />
                </div>
            </div>
            <ReactApexChart options={options} series={series} type="bar" />
        </div>
    )
}

export default SalesTrends;