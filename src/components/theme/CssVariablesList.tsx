import React, { useEffect, useState } from "react";
import { listAllCssVariables } from "../../lib/css-variables.js";
import { CssVariableCard } from "./CssVariableCard.js";


interface CssVariablesListProps {}

export function CssVariablesList({}: CssVariablesListProps): React.JSX.Element {

  const [cssVariables, setCssVariables] = useState<[string, string][]>([]);
  useEffect(() => {
    setCssVariables(listAllCssVariables());
  },[])

  // console.log("cssVariables === ", cssVariables);
  return (
    <div className="w-full h-full flex flex-col bg-base-300 items-center justify-center">
      <div className="flex w-full flex-wrap gap-2 px-4">
        {cssVariables.map((variable, index) => {
        // Check if the variable name starts with "--"
        if(!variable[0] || !variable[1]) {
          return null;
        }
        // and if it is not empty
        if (!variable[0].startsWith("--")) {
          return null;
        }
          return (
          <CssVariableCard
            key={index}
            variableName={variable?.[0]}
            variableValue={variable?.[1]}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        )})}
      </div>
    </div>
  );
}
