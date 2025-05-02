import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context.js";

interface ExportAsDaisyuiProps {}

export function ExportAsDaisyui({}: ExportAsDaisyuiProps) {
  const colors = useContext(ThemeContext).themes;

  return (
    <div className="modal-box max-w-[70%] z-50 flex flex-col gap-3 w-full">
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        {colors.map(([k, v]) => {
          return (
            <div className="text-lg">
              {k}:{v}
            </div>
          );
        })}
      </div>
    </div>
  );
}
