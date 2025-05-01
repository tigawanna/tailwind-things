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
  <div className="shadow rounded-2xl max-w-[90%] border  flex-grow  min-w-[20%] w-fit bg-base-200 flex  justify-start">
    <div className=" flex flex-col gap-1  justify-between  p-2 w-full ">
    <span className="text-sm">{variableName}</span>
    <span className="">{variableValue}</span>
    </div>
      <div
        className="h-full min-w-[20%] shadow rounded-xl border border-primary hover:brightness-125"
        style={{ backgroundColor: variableValue }}
        />
  </div>
);
}
