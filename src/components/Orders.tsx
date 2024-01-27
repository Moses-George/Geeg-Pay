import { ReactComponent as Document } from "@/assets/download.svg";
import Context from "@/store/context";
import { orders } from "@/utils/data";
import { useContext, useState } from "react";
import { ReactComponent as ArrowDown } from "@/assets/arrow-down.svg";
import { IOrder } from "@/types";

const Orders = () => {

    const [tableData, setTableData] = useState<IOrder[]>(orders);
    const { darkMode } = useContext(Context);

    const sortTable = (key: string, direction: string) => {
        const sortAscending = tableData?.slice().sort((a: IOrder, b: IOrder) => {
            const firstValue = a[key as keyof typeof a];
            const secondValue = b[key as keyof typeof b];
            return firstValue.localeCompare(secondValue);
        });

        console.log(sortAscending)

        const sortDescending = tableData?.slice().sort((a: IOrder, b: IOrder) => {
            const firstValue = a[key as keyof typeof a];
            const secondValue = b[key as keyof typeof b];
            return secondValue.localeCompare(firstValue);
        });
        if (direction === "asc") {
            // const updatedData = sortAscending;
            setTableData(sortAscending);
        }

        if (direction === "dsc") {
            setTableData(sortDescending);
        }
    }

    return (
        <div className={` ${darkMode ? "bg-dark-green shadow-xl" : "bg-white glossy"} rounded-lg p-4 space-y-6`}>
            <div className="flex justify-between">
                <h1 className={`${darkMode ? "text-white" : "text-gray-800"} text-3xl`}>Last Orders</h1>
                <p className="text-medium-green text-lg">See All</p>
            </div>


            <div className="relative overflow-x-auto  sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className={`text-xs uppercase ${darkMode ? "bg-dark-green text-gray-300" : "bg-gray-50 text-gray-400"} border-b`}>
                        <tr className="">
                            <th scope="col" className="px-6 py-3 flex items-center gap-2">
                                <span>Name</span>
                                <div className="">
                                    <ArrowDown className={`${darkMode ? "fill-white" : "fill-gray-800"} w-3 rotate-180 hover:fill-gray-500`} onClick={() => sortTable("name", "asc")} />
                                    <ArrowDown className={`${darkMode ? "fill-white" : "fill-gray-800"} w-3 hover:fill-gray-500`} onClick={() => sortTable("name", "dsc")} />
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 flex items-center gap-2">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Invoice
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(order =>
                            <tr key={order.id} className={` ${darkMode ? "odd:bg-dark-medium-green  even:bg-dark-green text-white hover:opacity-50" : "odd:bg-white  even:bg-gray-50 hover:bg-gray-200"}`}>
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <img className=" " src={order.image_src} alt="" />
                                        <span className="">{order.name}</span>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    {order.date}
                                </td>
                                <td className="px-6 py-4 font-semibold">
                                    ${order.amount}
                                </td>
                                <td className={`px-6 py-4 ${order.status === "Paid" ? "text-[#34CAA5]" : "text-red-400"}`}>
                                    {order.status}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Document className={`${darkMode ? "fill-white" : "fill-gray-500"}`} />
                                        <span className="">View</span>
                                    </div>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders;