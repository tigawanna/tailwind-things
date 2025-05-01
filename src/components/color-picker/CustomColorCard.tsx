import { twMerge } from "tailwind-merge";
import { ColorPickerModal } from "./ColorPickerModal.js";
import { getTailwindBg } from "../../utils/tailwind-helpers.js";

interface ThemeColorCardProps {
  name: string;
  handleThemeChange: (hslColor: string) => void;
  hslString: string;
}

export function ThemeColorCard({
  name,
  handleThemeChange,
  hslString,
}: ThemeColorCardProps) {
  const { bg, content } = getTailwindBg(name as any);

  return (
    <div
      className={twMerge(
        "relative flex h-full  rounded-xl cursor-pointer flex-wrap items-center justify-center gap-1",
        // "w-full sm:w-[45%] md:w-[25%]",
        // className,
      )}>
      <ColorPickerModal
        handleThemeChange={handleThemeChange}
        bgColor={bg}
        name={name}
        hslString={hslString}
        className="w-full ">
        <button
          className={twMerge(
            "flex w-full flex-col items-center rounded-lg justify-between  gap-0.5  p-2 ",
            bg,
            content
          )}>
          <span className="">{name}</span>
        </button>
      </ColorPickerModal>
      <div
        className={twMerge(
          `absolute right-[1%] top-[5%] flex flex-col items-center justify-center gap-2`
        )}>
      </div>
    </div>
  );
}
