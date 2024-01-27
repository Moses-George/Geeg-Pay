import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as Logo } from "@/assets/logo.svg";
import { ReactComponent as Sun } from "@/assets/icon-sun.svg";
import { ReactComponent as Moon } from "@/assets/moon.svg";
import { ReactComponent as Back } from "@/assets/back.svg";
import { ReactComponent as Settings } from "@/assets/settings.svg";
import { ReactComponent as Logout } from "@/assets/logout.svg";
import { ISidebarProps } from "@/types";
import Context from "@/store/context";
import { links } from ".";

const Sidebar = ({ display, lg_display, zIndex, isVisible: _isVisible, setIsVisible }: ISidebarProps) => {

    const { darkMode, changeMode } = useContext(Context);

    return (
        <aside
            className={`h-screen ${darkMode ? "bg-dark-green" : "bg-[#E3E3E3] border-r"}  pt-4 fixed top-0 w-[6rem] ${display} ${lg_display}  ${zIndex}`}>
            <div className="relative flex flex-col items-center gap-3">
                <div className={`absolute top-8 left-20 ${darkMode ? "bg-dark-green" : "bg-[#E3E3E3]"} p-2  rounded-3xl lg:hidden`} onClick={()=> setIsVisible(false)}> 
                    <Back className="rotate-180" />
                </div>
                <div className="pb-4">
                    <Logo />
                </div>
                <div className="flex flex-col items-center gap-3 w-full">
                    {links.map((link) => <NavLink
                        className={`${({ isActive }: { isActive: boolean }) =>
                            isActive ? 'active' : 'inactive'} w-full flex items-center justify-center`}
                        key={link.id}
                        to={link.to}
                    >
                        {link.icon}
                    </NavLink>)}
                </div>
                <div className={` ${darkMode ? "bg-gray-200" : "bg-white"} p-2 rounded-3xl space-y-3`}>
                    <div className={`flex items-center justify-center p-1.5 rounded-full ${darkMode ? "bg-transparent" : "bg-medium-green"}`}>
                        <Sun onClick={() => changeMode("light")} className={` ${darkMode ? "fill-medium-green" : "fill-white"} w-6`} />
                    </div>
                    <div className={`px-1.5 py-1 rounded-full ${!darkMode ? "bg-transparent" : "bg-medium-green"}`}>
                        <Moon onClick={() => changeMode("dark")} className={` ${!darkMode ? "fill-medium-green" : "fill-white"} w-6`} />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 mt-14">
                    <Back />
                    <Settings />
                    <Logout />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
