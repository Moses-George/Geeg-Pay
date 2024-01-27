import { PropsWithChildren, useEffect, useState } from "react";
import Context from "./context";

const ContextProvider = ({ children }: PropsWithChildren) => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            setDarkMode(true);
        }
    }, []);

    // const setDarkMode = () => 

    const changeMode = (mode: string) => {
        if (mode === "dark") { 
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
        if (!darkMode) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    }

    const values = { darkMode, changeMode }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;