import { useRef, useEffect, useState } from "react";
import { CssVariablesList } from "./CssVariablesList.js";
import { Icons } from "./Icons.js";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind.js";
import { ThemeContext } from "../../context/theme-context.js";
import { listAllCssVariables } from "../../utils/css-variables.js";
import { ExportAsDaisyui } from "../export/ExportAsDaisyui.js";
import { ExportThemesDrawer } from "../export/ExportThemesDrawer.js";
import { exportThemesDrawerId } from "../drawers/utils.js";

const triggerVariants = cva("btn btn-circle fixed", {
  variants: {
    variant: {
      top: "top-[5%] right-[5%]",
      bottom: "bottom-[5%] right-[5%]",
      left: "top-[5%] left-[5%]",
      right: "top-[5%] right-[5%]",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
  },
  defaultVariants: {
    variant: "top",
    size: "md",
  },
});

interface CssVariablesDevtoolsProps {
  colorsOnly?: boolean;
  filter?: (variable: [string, string]) => boolean;
  onClick?: (name: string, value: string) => void;
  trigger?: VariantProps<typeof triggerVariants>;
  className?: string;
}

export function CssVariablesDevtools({
  colorsOnly,
  filter,
  onClick,
  trigger,
  className,
}: CssVariablesDevtoolsProps) {
  const modalId = `my_colors_modal`;
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [cssVariables, setCssVariables] = useState<[string, string][]>(listAllCssVariables());
  useEffect(() => {
    const current_modal = document.getElementById(modalId) as HTMLDialogElement;
    modalRef.current = current_modal;
  }, []);
  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <button
        ref={modalRef as unknown as React.LegacyRef<HTMLButtonElement> | undefined}
        onClick={() => {
          modalRef.current?.showModal();
        }}
        className={cn(triggerVariants({ ...trigger, className }))}>
        <Icons.paint />
      </button>

      <dialog id={modalId} className="modal w-full h-full  bg-base-300">
        <ThemeContext.Provider
          value={{
            themes: cssVariables,
            setThemes: setCssVariables,
          }}>
          <ExportThemesDrawer>
            <div className=" h-full flex w-full justify-center items-center">
              <div className="modal-box max-w-[70%] flex flex-col gap-3 w-full">
                <div className="w-full flex gap-3 justify-between">
                  <h3 className="font-bold text-xl">Css Variables</h3>
                  <div className="flex gap-3 ">
                    <label htmlFor={exportThemesDrawerId} className="drawer-button btn btn-primary btn-sm btn-outline">
                      export
                    </label>
                    <button onClick={closeModal} className="btn btn-circle btn-sm text-error">
                      <Icons.x className="stroke-error fill-error text-error"/>
                    </button>
                  </div>
                </div>
                <CssVariablesList colorsOnly={colorsOnly} filter={filter} onClick={onClick} />
              </div>
              <form method="dialog" className="modal-backdrop fixed  inset-0">
                <button>close</button>
              </form>
            </div>
          </ExportThemesDrawer>
        </ThemeContext.Provider>
      </dialog>
    </>
  );
}
