import { useRef, useContext, useEffect } from "react";
import { ThemeContext } from "../../context/theme-context.js";

interface ExportThemesProps {}

export function ExportThemes({}: ExportThemesProps) {
  const modalId = `export-themes-modal`;
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const colors = useContext(ThemeContext).themes;
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
        className="btn btn-primary">
        Export
      </button>
      <dialog id={modalId} className="modal z-50  w-full h-full bg-base-300">
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
      </dialog>
    </>
  );
}
