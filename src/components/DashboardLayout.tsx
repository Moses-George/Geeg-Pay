import { PropsWithChildren, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Backdrop from './UI/Backdrop';

const DashboardLayout = ({ children }: PropsWithChildren) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            {isVisible && (
                <>
                    <Backdrop onClick={()=> setIsVisible(false)} />   
                    <Sidebar 
                        display="block"
                        lg_display="lg:hidden"
                        zIndex="z-[9999]"
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                </>
            )}
            <div className={`h-full w-full mt-32`}>
                <Sidebar setIsVisible={setIsVisible} display="hidden" lg_display="lg:block" />
                <div className={`space-y-6 px-6 lg:pr- pb-12`}>
                    <Navbar setIsVisible={setIsVisible} />
                    <main className="lg:w-[calc(100%-6rem)] w-ful overflow-none lg:ml-[6rem]">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
