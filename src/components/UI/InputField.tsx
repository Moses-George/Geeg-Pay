import Context from "@/store/context";
import { InputFieldProps } from "@/types";
import { useContext, useState } from "react";


const InputField = ({ icon, type, id, name, placeholder, ringColorClass }: InputFieldProps) => {

    const { darkMode } = useContext(Context);
    const [searchParam, setSearchParam] = useState("")

    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-10 pointer-events-none">
                {icon}
            </div>
            <input
                type={type}
                id={id}
                name={name}
                onChange={(e)=> setSearchParam(e.target.value)}
                value={searchParam}
                className={` ${darkMode ? "bg-dark-green focus:bg-dark-medium-green text-gray-200" : "bg-gray-50 focus:bg-white text-gray-900"}  border border-gray-300 text-sm rounded-3xl focus:ring-4 focus:outline-none ${ringColorClass} block w-80 pl-9 p-2.5`}
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default InputField;