import { twMerge } from "tailwind-merge";
import { ColorPickerModal } from "./ColorPickerModal.js";
import { getShadcnTailwindBg, getDaiyuiTailwindBg } from "@/utils/tailwind-helpers.js";
import { useContext } from "react";
import { ThemeContext } from "@/context/theme-context.js";

interface ThemeColorCardProps {
  name: string;
  oklchString?: string;
  handleThemeChange: (hslColor: string) => void;
  hslString: string;
}

export function ThemeColorCard({
  name,
  oklchString,
  handleThemeChange,
  hslString,
}: ThemeColorCardProps) {
  const { themeType } = useContext(ThemeContext);
  const { bg, content } =
      themeType === "daisyui"
      ? getDaiyuiTailwindBg(name as any, oklchString)
      : {bg:"", content: ""};
      // console.log({name, bg, content})
  return (
    <div
      className={twMerge(
        "relative flex h-full  rounded-xl cursor-pointer flex-wrap items-center justify-center gap-1"
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
          style={{
            backgroundColor: bg === "" ? hslString : "",
          }}
          className={twMerge(
            "flex w-full flex-col items-center rounded-lg justify-between  gap-0.5  p-2 ",
            bg,
            content
          )}>
          <span className="">{name}</span>
          {/* <span className="text-xs">{oklchString}</span> */}
        </button>
      </ColorPickerModal>
      <div
        className={twMerge(
          `absolute right-[1%] top-[5%] flex flex-col items-center justify-center gap-2`
        )}></div>
    </div>
  );
}
