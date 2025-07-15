"use client";

import { Moon, Toggle } from "./Icons";
import { P } from "./Paragraph";
import { useTheme } from "../_hooks/useTheme";

function ThemeToggle() {
  const { handleThemeChange } = useTheme();

  return (
    <div className="bg-white-50 rounded-3xl flex items-center py-3 px-2 xl:px-4 border border-white-150 justify-between ">
      <div className="flex items-center gap-4">
        <div className="size-5">
          <Moon />
        </div>
        <P size="md" className="!text-gray-primary font-[500]">
          Dark mode
        </P>
      </div>
      <button className="h-6 w-8 !outline-0" onClick={handleThemeChange}>
        <Toggle />
      </button>
    </div>
  );
}

export default ThemeToggle;
