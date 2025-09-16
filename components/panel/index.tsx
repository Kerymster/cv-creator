import { ThemeColors } from "@/types/appTypes";
import React from "react";

interface ControlPanelProps {
  currentTheme: ThemeColors;
}

const ControlPanel = ({ currentTheme }: ControlPanelProps) => {
  return (
    <div
      className={`${currentTheme.card} rounded-lg shadow-lg p-6 ${currentTheme.border} border sticky top-8`}
    >
      <h2 className={`text-xl font-bold ${currentTheme.text} mb-6`}>
        Customize Your CV
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className={`font-semibold ${currentTheme.text} mb-3`}>
            Export Options
          </h3>
          <div className="space-y-2">
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              📄 Export as PDF
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              📋 Copy to Clipboard
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              💾 Save Template
            </button>
          </div>
        </div>

        <div>
          <h3 className={`font-semibold ${currentTheme.text} mb-3`}>
            Quick Actions
          </h3>
          <div className="space-y-2">
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              ✏️ Edit Information
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              🎨 Customize Colors
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              📝 Add Section
            </button>
          </div>
        </div>

        <div>
          <h3 className={`font-semibold ${currentTheme.text} mb-3`}>
            Templates
          </h3>
          <div className="space-y-2">
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              💼 Professional
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              🎨 Creative
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors`}
            >
              🚀 Modern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
