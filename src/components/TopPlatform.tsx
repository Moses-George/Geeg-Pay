import Context from "@/store/context";
import { platforms } from "@/utils/data";
import { useContext } from "react";

const TopPlatForm = () => {

    const { darkMode} = useContext(Context);

    return (
        <div className={` ${darkMode ? "bg-dark-medium-green shadow-xl" : "bg-white glossy"} relative rounded-lg p-4 space-y-6`}>
            {/* <div className="absolute w-full left-0 right-0 bottom-0 h-16 bg-transparent backdrop-blur-md  transition ease-out delay-100 duration-500"></div> */}
            <div className="flex justify-between">
                <h1 className={`${darkMode ? "text-white" : "text-gray-800"} text-2xl`}>Top Platform</h1>
                <p className="text-medium-green text-lg">See All</p>
            </div>
            <div className="space-y-4">
                {platforms.map((platform) => {
                    // const width = 30 + platform.gain;
                    return <div className="space-y-2" key={platform.id}>
                        <p className={`${darkMode ? "text-white" : "text-gray-800"} font-medium`}>{platform.title}</p>
                        <div className="w-full h-fit bg-slate-200 rounded-3xl"><div className={` ${platform.width} ${platform.color} h-3  rounded-3xl`}></div></div>
                        <div className="flex justify-between">
                            <p className={`${darkMode ? "text-gray-200" : "text-gray-600"}`}>{platform.amount}</p>
                            <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>+{platform.gain}%</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TopPlatForm;