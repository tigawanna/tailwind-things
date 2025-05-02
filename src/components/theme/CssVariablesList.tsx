import React, { useEffect, useState } from "react";
import { listAllCssVariables } from "../../utils/css-variables.js";
import { CssVariableCard } from "./CssVariableCard.js";
import { ThemeColorCard } from "../color-picker/CustomColorCard.js";
import { hslToOklch, oklchToHSL } from "../../utils/color-converters.js";

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
  const [cssVariables, setCssVariables] = useState<[string, string][]>([]);
  useEffect(() => {
    setCssVariables(listAllCssVariables());
  }, []);
  const filteredCssVariables = cssVariables.filter((variable) =>
    filter ? filter(variable) : colorsOnly ? variable[0].startsWith("--color") : true
  );

  return (
    <div className="w-full flex flex-col  items-center justify-center @container">
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
              handleThemeChange={(color) => {
                const oklch = hslToOklch(color);
                const kolchstring = `oklch(${oklch.oklch_string})`;
                console.log("== color changed stoo  == ", kolchstring);
                document.documentElement.style.setProperty(variable[0], kolchstring);
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
