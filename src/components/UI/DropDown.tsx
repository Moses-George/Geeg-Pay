import Context from "@/store/context";
import { useContext } from "react";


const DropDown = () => {

    const { darkMode } = useContext(Context);

    return (
        <div className="">
            <select id="" className={` border border-gray-300 ${darkMode ? "text-white bg-dark-green" : "text-gray-800 bg-transparent"} text-sm  rounded-3xl focus:ring-4 focus:ring-medium-green focus:border-gray-300 focus:outline-none block w-full py-2.5 px-4`}>
                <option selected>Weekly</option>
                <option value="US">Daily</option>
                <option value="CA">Monthly</option>
                <option value="FR">Yearly</option>
            </select>
        </div>
    )
}

export default DropDown;