import { createContext } from "react";

const Context = createContext({
    darkMode: false,
    changeMode: (_mode: string) => { },
});

export default Context;