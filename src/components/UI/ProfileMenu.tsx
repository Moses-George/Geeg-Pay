import { ReactComponent as Settings } from "@/assets/settings.svg";
import { ReactComponent as Logout } from "@/assets/logout.svg";
import { ReactComponent as Divide } from "@/assets/divide.svg";

const ProfileMenu = () => {

    return (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg">
            <div className="flex items-center gap-2 border-b px-4 py-2 bg-gray-100 rounded-t-lg  hover:bg-gray-100">
            <img className="" src="/people/Profile.svg" />
                <span className="">My account</span>
            </div>
            <div className="flex items-center gap-2 border-b px-4 py-1 hover:bg-gray-100">
                <Divide className="-ml-3" />
                <span className="">Analytics</span>
            </div>
            <div className="flex items-center border-b px-4 py-1 hover:bg-gray-100">
                <Settings className="-ml-3" />
                <span className="">Settings</span>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 rounded-b-lg hover:bg-gray-100">
                <Logout />
                <span className="">Logout</span>
            </div>
        </div>
    )
}

export default ProfileMenu;