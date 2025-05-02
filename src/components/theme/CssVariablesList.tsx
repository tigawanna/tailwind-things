import React, { useContext } from "react";
import { ThemeColorCard } from "../color-picker/CustomColorCard.js";
import { hslToOklch, oklchToHSL } from "../../utils/color-converters.js";
import { ThemeContext } from "../../context/theme-context.js";
import { useDebounced } from "../../hooks/useDebounced.js";

interface CssVariablesListProps {
  colorsOnly?: boolean;
  filter?: (variable: [string, string]) => boolean;
  onClick?: (name: string, value: string) => void;
}

export function CssVariablesList({
  filter,
  onClick,
  colorsOnly = true,
}: CssVariablesListProps): React.JSX.Element {
  const { themes: cssVariables, setThemes } = useContext(ThemeContext);

  const filteredCssVariables = cssVariables.filter((variable) =>
    filter ? filter(variable) : colorsOnly ? variable[0].startsWith("--color") : true
  );

  const updateTheme = (varName: string, value: string) => {
    try {
      setThemes((prev) => {
        return prev.map((v) => {
          if (v[0] === varName) {
            return [v[0], value];
          }
          return v;
        });
      });
    } catch (error) {
      console.log("error updating context === ", error);
    }
  };

  // Create a debounced version of updateTheme with 5 seconds delay
  const debouncedUpdateTheme = useDebounced(updateTheme, 5000);

  return (
    <div className="w-full flex flex-col items-center justify-center @container">
      <div className="w-full flex-wrap gap-4 px-4 grid grid-cols-1 @sm:grid-cols-2 @md:grid-cols-3 @lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {filteredCssVariables.map((variable, index) => {
          // Check if the variable name starts with "--"
          if (!variable[0] || !variable[1]) {
            return null;
          }
          // and if it is not empty
          if (!variable[0].startsWith("--")) {
            return null;
          }
          const colorName = variable[0].replace(/--color-/, "");
          return (
            <ThemeColorCard
              key={index}
              oklchString={variable?.[1]}
              handleThemeChange={(color) => {
                const oklch = hslToOklch(color);
                const kolchstring = `oklch(${oklch.oklch_string})`;
                document.documentElement.style.setProperty(variable[0], kolchstring);
                debouncedUpdateTheme(variable[0], kolchstring);
              }}
              name={colorName}
              hslString={oklchToHSL(variable[1]).hsl_string}
            />
          );
        })}
      </div>
    </div>
  );
}
