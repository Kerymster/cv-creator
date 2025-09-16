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
          <h1 className={`text-3xl font-bold ${currentTheme.text}`}>
            CV Creator
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme("light")}
              className={`px-3 py-1 rounded text-sm ${
                theme === "light"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-3 py-1 rounded text-sm ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Dark
            </button>
            <button
              onClick={() => setTheme("blue")}
              className={`px-3 py-1 rounded text-sm ${
                theme === "blue"
                  ? "bg-blue-200 text-blue-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
