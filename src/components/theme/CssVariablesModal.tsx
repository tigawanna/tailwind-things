import { useRef, useEffect } from "react";
import { CssVariablesList } from "./CssVariablesList.js";
import { Icons } from "./Icons.js";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils.js";



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

interface CssVariablesModalProps {
  colorsOnly?: boolean;
  filter?: (variable: [string, string]) => boolean;
  onClick?: (name: string, value: string) => void;
  trigger?: VariantProps<typeof triggerVariants>;
  className?:string
}

export function CssVariablesModal({ colorsOnly, filter, onClick,trigger,className }: CssVariablesModalProps) {
  const modalId = `my_colors_modal`;
  const modalRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    const current_modal = document.getElementById(modalId) as HTMLDialogElement;
    modalRef.current = current_modal;
  }, []);

  return (
    <>
      <button
        ref={modalRef as unknown as React.LegacyRef<HTMLButtonElement> | undefined}
        onClick={() => {
          modalRef.current?.showModal();
        }}
        className={cn(triggerVariants({...trigger,className}))}>
        <Icons.paint />
      </button>

      <dialog id={modalId} className="modal  w-full h-full bg-base-300">
        <div className="modal-box flex flex-col gap-3 w-full">
          <h3 className="font-bold text-lg">Css Variables</h3>
          <CssVariablesList colorsOnly={colorsOnly} filter={filter} onClick={onClick} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
