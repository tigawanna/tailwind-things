import { createContext } from "react";

export type TCssVariable = [string, string]

type ThemeContext = {
    themes:TCssVariable[]
    setThemes: (themes:(prev:TCssVariable[] )=>TCssVariable[]) => void;
}

export const ThemeContext = createContext<ThemeContext>({
    themes:[],
setThemes:()=>{}
});
