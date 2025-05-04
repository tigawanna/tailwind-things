import { createContext } from "react";

export type TCssVariable = [string, string];
export const themetypes = ["all", "shadcn", "daisyui"] as const;
export type TThemeType = (typeof themetypes)[number];

type ThemeContext = {
  themes: TCssVariable[];
  themeType: TThemeType;
  themetypes: typeof themetypes;
  setThemeType(themeType: TThemeType): void;
  setThemes: (themes: (prev: TCssVariable[]) => TCssVariable[]) => void;
};

export const ThemeContext = createContext<ThemeContext>({
  themes: [],
  themetypes,
  setThemeType: () => {},
  themeType: "all",
  setThemes: () => {},
});
