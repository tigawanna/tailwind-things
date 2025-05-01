import React from "react";
export interface CssVariableCardProps {
  // Define the props for the CssVariableCard component here
  variableName: string;
  variableValue: string;
  onEdit: (name: string, value: string) => void;
  onDelete: (name: string) => void;
}

export function CssVariableCard({onDelete,onEdit,variableName,variableValue}: CssVariableCardProps): React.JSX.Element {
return (
  <div className="shadow rounded-2xl max-w-full overflow-auto flex-grow p-4 w-fit bg-base-200 flex flex-col items-center justify-center">
    <span className="text-sm">{variableName}</span>
    <div className=" flex flex-col items-center justify-between">
      <div
        className="w-6 h-6 rounded-full shadow `shadow-lg border border-base-300"
        style={{ backgroundColor: variableValue }}
      />
      <span>{variableValue}</span>
    </div>
  </div>
);
}
