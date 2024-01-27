import InputField from "./UI/InputField";
import { ReactComponent as Search } from "@/assets/search.svg";
import { ReactComponent as Calendar } from "@/assets/calendar.svg";
import { ReactComponent as Bell } from "@/assets/bell.svg";
import { ReactComponent as ArrowDown } from "@/assets/arrow-down.svg";
import { ReactComponent as Menu } from "@/assets/hambuger.svg";
import { formatDate } from "@/utils/dateFormatter";
import { useContext, useState } from "react";
import Context from "@/store/context";
import ProfileMenu from "./UI/ProfileMenu";

interface INavProps {
    setIsVisible: (isVisible: boolean | ((prev: boolean) => boolean)) => void | boolean;
}


const Navbar = ({ setIsVisible }: INavProps) => {

    const { darkMode } = useContext(Context);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div
                className={`flex justify-between py-4 px-5 w-full lg:w-[calc(100%-6rem)] lg:left-[6rem] left-0 lg:r-56 shadow-sm fixed top-0  backdrop-blur-md  transition ease-out delay-100 duration-500 z-[100]`}>
                <div className="flex justify-between items-center gap-x-2 w-full">
                    <div className="flex items-center gap-3">
                        <Menu onClick={() => setIsVisible(true)} className={` ${darkMode ? "fill-white" : "fill-gray-500"} w-8 h-8 lg:hidden`} />
                        <h1 className={` ${darkMode ? "text-white" : "text-gray-800"} text-slate-800 text-2xl font-semibold`}>Dashborad</h1>
                    </div>
                    <div className='flex justify-between gap-10 items-center'>
                        <div className="hidden lg:block">
                            <InputField
                                icon={<Search />}
                                id=""
                                name=""
                                type="text"
                                placeholder="Search..."
                                ringColorClass="focus:ring-[#34CAA5]" />
                        </div>
                        <div className="items-center gap-3 hidden lg:flex">
                            <Calendar className={`${darkMode ? "fill-white" : "fill-gray-400"}`} />
                            <span className={`${darkMode ? "text-white" : "text-gray-800"} text-lg font-medium`}>{formatDate(new Date())}</span>
                        </div>
                        <div className="rounded-full p-3 border-2 border-gray-300 hidden lg:block ">
                            <Bell className={`${darkMode ? "fill-white" : "fill-gray-400"}`} />
                        </div>
                        <div className="relative items-center gap-2 border-2 border-gray-300 rounded-3xl px-2 pb-1 hidden lg:flex">
                            <img className="" src="/people/Profile.svg" />
                            <div className="text-center">
                                <p className={`${darkMode ? "text-white" : "text-gray-800"} font-medium`}>Justin Bargson</p>
                                <p className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}>Justin@gmail.com</p>
                            </div>
                            {showMenu && <ProfileMenu />}
                            <ArrowDown className={`${darkMode ? "fill-white" : "fill-gray-800"} ${showMenu ? "rotate-180" : "rotate-0"}`} onClick={() => setShowMenu(prev=> !prev)} />
                        </div>
                    </div>
                    <div className="lg:hidden p-1 rounded-full border-4 border-medium-green">
                    <img className="" src="/people/Profile.svg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;