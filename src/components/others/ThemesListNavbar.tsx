import { ThemeContext } from "@/context/theme-context.js";
import { useContext } from "react";
import { Icons } from "./Icons.js";

interface ThemesListNavbarProps {
  exportThemesDrawerId: string;
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
}

export function ThemesListNavbar({ exportThemesDrawerId, modalRef }: ThemesListNavbarProps) {
  const closeModal = () => {
    modalRef.current?.close();
  };
  return (
    <div className="w-full flex  items-center justify-between">
      <h3 className="font-bold text-xl">Css Variables</h3>
      <CssVariablesType />
      <ThemesListNavbarDarkModeToggle />
      <label
        htmlFor={exportThemesDrawerId}
        className="drawer-button btn btn-primary btn-sm btn-outline">
        export
      </label>
      <button onClick={closeModal} className="mx-4 btn btn-circle btn-sm text-error">
        <Icons.x className="stroke-error fill-error text-error" />
      </button>
    </div>
  );
}

interface ThemesListNavbarDarkModeToggleprops {}

export function ThemesListNavbarDarkModeToggle({}: ThemesListNavbarDarkModeToggleprops) {
  const { darkMode, toggledarkMode } = useContext(ThemeContext);
  if (darkMode) {
    return (
      <button onClick={() => toggledarkMode(false)} className="btn btn-outline">
        <Icons.sun className="fill-primary"/>
      </button>
    );
  }

  return (
    <button onClick={() => toggledarkMode(true)} className="btn btn-outline">
      <Icons.moon className="fill-primary" />
    </button>
  );
}

export function CssVariablesType() {
  const { themeType, setThemeType, themetypes } = useContext(ThemeContext);
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
