import { Font, ThemeColors } from '@/types/appTypes';
import React from 'react';

interface StylingSectionProps {
  currentTheme: ThemeColors;
  headingFont: Font;
  bodyFont: Font;
  setHeadingFont: (font: Font) => void;
  setBodyFont: (font: Font) => void;
}

const StylingSection = ({
  currentTheme,
  headingFont,
  bodyFont,
  setHeadingFont,
  setBodyFont,
}: StylingSectionProps) => {
  return (
    <div
      className={`${currentTheme.card} rounded-lg border p-4 shadow-md ${currentTheme.border} bg-opacity-50`}
    >
      <h3
        className={`${currentTheme.headingFont} font-semibold ${currentTheme.text} mb-3 text-center`}
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
            className={`w-full rounded border p-2 ${currentTheme.border} ${currentTheme.bg} ${currentTheme.text} ${currentTheme.bodyFont} cursor-pointer`}
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
            className={`w-full rounded border p-2 ${currentTheme.border} ${currentTheme.bg} ${currentTheme.text} ${currentTheme.bodyFont} cursor-pointer`}
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
  );
};

export default StylingSection;
