import React, { useContext } from "react";
import { ThemeColorCard } from "../color-picker/CustomColorCard.js";
import { hslToOklch, oklchToHSL } from "@/utils/color-converters.js";
import { ThemeContext } from "@/context/theme-context.js";
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback.js";
import { shadcnVariablesSet } from "@/utils/shadcn-theme-type.js";
import { twMerge } from "tailwind-merge";
import { daisyui_color_variables_set } from "@/utils/daisyui-theme-types.js";

interface CssVariablesListProps {
  filter?: (variable: [string, string]) => boolean;
  onClick?: (name: string, value: string) => void;
}

export function CssVariablesList({ filter, onClick }: CssVariablesListProps): React.JSX.Element {
  const { themes: cssVariables, setThemes, themeType } = useContext(ThemeContext);
 
//  console.log("=== cssVariables ==> ", cssVariables);
  const defalutColorFilters = (variable: [string, string]) => {
    switch (themeType) {
      case "daisyui":
        return daisyui_color_variables_set.has(variable[0] as any);
      case "shadcn":
        return shadcnVariablesSet.has(variable[0] as any);
      default:
        return variable[0].startsWith("--color");
    }
  };
  const filteredCssVariables = cssVariables.filter((variable) =>
    filter ? filter(variable) : defalutColorFilters(variable)
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
  const debouncedUpdateTheme = useDebouncedCallback(updateTheme, 1000);
  // console.log(" theme type", themeType)
  return (
    <div key={themeType} className="w-full flex flex-col items-center justify-center @container">
      <div
        className={twMerge(
          "w-full overflow-auto max-h-[90vh]  flex-wrap gap-4 px-4",
          "animate-in slide-in-from-right-70 duration-500",
          "grid grid-cols-1 @sm:grid-cols-2 @md:grid-cols-3 @lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
        )}>
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
          // console.log({variable,colorName})
          return (
            <ThemeColorCard
              key={index}
              oklchString={variable?.[1]}
              handleThemeChange={(color) => {
                const oklch = hslToOklch(color);
                const kolchstring = `oklch(${oklch.oklch_string})`;
                document.documentElement.style.setProperty(variable[0], kolchstring);
                onClick?.(variable[0], kolchstring);
                // console.log("updating color  === ", variable[0], kolchstring);
                debouncedUpdateTheme(variable[0], kolchstring);
                // updateTheme(variable[0], kolchstring);
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

export function CssVariablesType() {
  const { themeType, setThemeType, themetypes } = useContext(ThemeContext);

  console.log(" theme type", themeType);
  return (
    <ul className="w-full flex gap-2 p-2">
      {themetypes.map((th) => {
        return (
          <button
            onClick={() => setThemeType(th)}
            key={th}
            data-active={themeType === th}
            className="btn btn-secondary btn-outline data-[active=true]:bg-secondary data-[active=true]:text-secondary-content btn-sm">
            {th}
          </button>
        );
      })}
    </ul>
  );
}
