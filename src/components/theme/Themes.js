import React, { children, createContext, useContext, useState } from "react";
export  const ThemesContext=createContext();
export const Themesprovider=({children})=>{
    const [darkMode, setdarkMode] = useState(false)
    const toggleMode=()=>{
        setdarkMode(!darkMode);
    }
    const theme={
        darkMode,
        toggleMode,
    };
    return(
    <ThemesContext.Provider value={theme}>
{children}
    </ThemesContext.Provider>);
}
export const useTheme=()=>{
const context = useContext(ThemesContext)   
if(!context){
    throw new Error (`theme me error hai bro`)
}
return context
}