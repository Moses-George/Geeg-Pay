import SparkAreaChart from "./SparkAreaChart";
import { useContext } from "react";
import Context from "@/store/context";
import { IChartCardProps } from "@/types";


const ChartCard = ({ title, amount, color, icon, image }: IChartCardProps) => {

    const { darkMode } = useContext(Context);

    return (
        <div className={` ${darkMode ? "bg-dark-medium-green shadow-xl" : "bg-white glossy"} rounded-lg shadow-m  px-3 py-6 h-fit flex-grow basis-1/3 space-y-2`}>
            <div className="flex justify-between items-center gap-10">
                {image}
                <SparkAreaChart color={color?.text} />
            </div>
            <p className={` ${darkMode ? "text-white" : "text-gray-500"} text-2xl m-0`}>{title}</p>
            <p className={` ${darkMode ? "text-gray-200" : "text-gray-800"} text-3xl font-medium m-0`}>{amount}</p>
            <div className="flex justify-between items-center gap-3">
                <div className={`flex items-center gap-2 ${color?.background} px-3 rounded-3xl text-[${color?.text}]`}>
                    {icon}
                    <span className="font-medium">23.5%</span>
                </div>
                <span className={` ${darkMode ? "text-white" : "text-gray-500"} text-sm font-medium`}>vs. previous month</span>
            </div>
        </div>
    )
}

export default ChartCard;