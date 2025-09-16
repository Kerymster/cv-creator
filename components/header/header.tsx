import { Theme, ThemeColors } from "@/types/appTypes";
import React from "react";

interface HeaderProps {
  currentTheme: ThemeColors;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const Header = ({ currentTheme, setTheme, theme }: HeaderProps) => {
  return (
    <div
      className={`${currentTheme.bg} border-b ${currentTheme.border} shadow-sm`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1
            className={`text-3xl ${currentTheme.headingFont} font-bold ${currentTheme.text}`}
          >
            CV Creator
          </h1>
          <div className={`flex gap-2 flex-wrap ${currentTheme.bodyFont}`}>
            <button
              onClick={() => setTheme("light")}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                theme === "light"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Dark
            </button>
            <button
              onClick={() => setTheme("blue")}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                theme === "blue"
                  ? "bg-blue-200 text-blue-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Blue
            </button>
            <button
              onClick={() => setTheme("slateAmber")}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                theme === "slateAmber"
                  ? "bg-amber-200 text-amber-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Slate/Amber
            </button>
            <button
              onClick={() => setTheme("slateAmberDark")}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                theme === "slateAmberDark"
                  ? "bg-amber-600 text-amber-100"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Slate/Amber Dark
            </button>
            <button
              onClick={() => setTheme("emerald")}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                theme === "emerald"
                  ? "bg-emerald-200 text-emerald-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Emerald
            </button>
            <button
              onClick={() => setTheme("violet")}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                theme === "violet"
                  ? "bg-violet-200 text-violet-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Violet
            </button>
            <button
              onClick={() => setTheme("rose")}
              className={`px-3 py-1 rounded text-sm cursor-pointer ${
                theme === "rose"
                  ? "bg-rose-200 text-rose-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Rose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
