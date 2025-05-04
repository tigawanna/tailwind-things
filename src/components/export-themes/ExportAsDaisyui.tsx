import { useContext, useState } from "react";
import { ThemeContext, type TCssVariable } from "../../context/theme-context.js";
import { ClipboardButton } from "../others/ClipboardButton.js";
import type { TExportTab } from "./ExportThemesDrawer.js";
import { daisyui_color_variables_set } from "../../utils/daisyui-theme-types.js";
import { shadcnVariablesSet } from "@/utils/shadcn-theme-type.js";

interface ExportAsDaisyuiProps {
  tab: TExportTab;
}

function variableFilters(tab: TExportTab, color: TCssVariable) {
  switch (tab) {
    case "daisyui":
      return daisyui_color_variables_set.has(color[0] as any);
    case "shadcn":
      return shadcnVariablesSet.has(color[0] as any);
    default:
      return true;
  }
}

export function ExportAsDaisyui({ tab }: ExportAsDaisyuiProps): React.ReactElement | null {
  const [input, setInput] = useState<string>("my_custom_theme");
  const colors = useContext(ThemeContext).themes;
  const formatedColors = colors
    .map((color) => {
      const isAdaiyUikey = variableFilters(tab, color);
      if (isAdaiyUikey) {
        return `${color[0]}:${color[1]};`;
      }
    })
    .filter(Boolean);
  if (tab === "daisyui") {
    formatedColors.unshift(`name: '${input}',`);
    formatedColors.unshift(`@plugin "daisyui/theme" {`);
    formatedColors.push(`}`);
  }

  const formatedColorsString = formatedColors.join("\n");
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full h-full flex flex-col gap-4 p-5 items-center justify-center">
        <div className="w-full flex gap-4 items-center justify-center">
          {tab === "daisyui" && (
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          )}
          <ClipboardButton text={formatedColorsString} displayText="Copy" showFullText={false} />
        </div>
        <pre>{formatedColorsString}</pre>
      </div>
    </div>
  );
}
