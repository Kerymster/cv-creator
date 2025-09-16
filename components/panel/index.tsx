import { ThemeColors, Font } from "@/types/appTypes";
import React from "react";

interface ControlPanelProps {
  currentTheme: ThemeColors;
  headingFont: Font;
  bodyFont: Font;
  setHeadingFont: (font: Font) => void;
  setBodyFont: (font: Font) => void;
}

const ControlPanel = ({
  currentTheme,
  headingFont,
  bodyFont,
  setHeadingFont,
  setBodyFont,
}: ControlPanelProps) => {
  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div
      className={`${currentTheme.card} rounded-lg shadow-lg p-6 ${currentTheme.border} border sticky top-8`}
    >
      <h2
        className={`text-xl ${currentTheme.headingFont} font-bold ${currentTheme.text} mb-6`}
      >
        Customize Your CV
      </h2>

      <div className="space-y-6">
        <div>
          <h3
            className={`${currentTheme.headingFont} font-semibold ${currentTheme.text} mb-3`}
          >
            Font Selection
          </h3>
          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm ${currentTheme.text} ${currentTheme.bodyFont} mb-2`}
              >
                Heading Font
              </label>
              <select
                value={headingFont}
                onChange={(e) => setHeadingFont(e.target.value as Font)}
                className={`w-full p-2 rounded border ${currentTheme.border} ${currentTheme.bg} ${currentTheme.text} ${currentTheme.bodyFont}`}
              >
                <option value="poppins">Poppins (Modern)</option>
                <option value="inter">Inter (Clean)</option>
                <option value="source-sans">Source Sans (Professional)</option>
                <option value="nunito-sans">Nunito Sans (Friendly)</option>
                <option value="geist">Geist (Tech)</option>
              </select>
            </div>
            <div>
              <label
                className={`block text-sm ${currentTheme.text} ${currentTheme.bodyFont} mb-2`}
              >
                Body Font
              </label>
              <select
                value={bodyFont}
                onChange={(e) => setBodyFont(e.target.value as Font)}
                className={`w-full p-2 rounded border ${currentTheme.border} ${currentTheme.bg} ${currentTheme.text} ${currentTheme.bodyFont}`}
              >
                <option value="inter">Inter (Clean)</option>
                <option value="poppins">Poppins (Modern)</option>
                <option value="source-sans">Source Sans (Professional)</option>
                <option value="nunito-sans">Nunito Sans (Friendly)</option>
                <option value="geist">Geist (Tech)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className={`font-semibold ${currentTheme.text} mb-3`}>
            Export Options
          </h3>
          <div className="space-y-2">
            <button
              onClick={handlePrintPDF}
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
