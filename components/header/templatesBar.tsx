import { Theme } from '@/types/appTypes';
import { ThemeColors } from '@/types/appTypes';
import React from 'react';

interface TemplatesBarProps {
  currentTheme: ThemeColors;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const TemplatesBar = ({ currentTheme, setTheme, theme }: TemplatesBarProps) => {
  return (
    <div className="mt-4">
      <div className={`flex flex-wrap gap-2 ${currentTheme.bodyFont}`}>
        <button
          onClick={() => setTheme('light')}
          className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            theme === 'light'
              ? `${currentTheme.accent} border-2 shadow-sm ${currentTheme.border}`
              : `${currentTheme.text} hover:${currentTheme.card} border border-transparent`
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            theme === 'dark'
              ? `${currentTheme.accent} border-2 shadow-sm ${currentTheme.border}`
              : `${currentTheme.text} hover:${currentTheme.card} border border-transparent`
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('blue')}
          className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            theme === 'blue'
              ? `${currentTheme.accent} border-2 shadow-sm ${currentTheme.border}`
              : `${currentTheme.text} hover:${currentTheme.card} border border-transparent`
          }`}
        >
          Blue
        </button>
        <button
          onClick={() => setTheme('slateAmber')}
          className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            theme === 'slateAmber'
              ? `${currentTheme.accent} border-2 shadow-sm ${currentTheme.border}`
              : `${currentTheme.text} hover:${currentTheme.card} border border-transparent`
          }`}
        >
          Slate/Amber
        </button>
        <button
          onClick={() => setTheme('slateAmberDark')}
          className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            theme === 'slateAmberDark'
              ? `${currentTheme.accent} border-2 shadow-sm ${currentTheme.border}`
              : `${currentTheme.text} hover:${currentTheme.card} border border-transparent`
          }`}
        >
          Slate/Amber Dark
        </button>
        <button
          onClick={() => setTheme('emerald')}
          className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            theme === 'emerald'
              ? `${currentTheme.accent} border-2 shadow-sm ${currentTheme.border}`
              : `${currentTheme.text} hover:${currentTheme.card} border border-transparent`
          }`}
        >
          Emerald
        </button>
        <button
          onClick={() => setTheme('violet')}
          className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            theme === 'violet'
              ? `${currentTheme.accent} border-2 shadow-sm ${currentTheme.border}`
              : `${currentTheme.text} hover:${currentTheme.card} border border-transparent`
          }`}
        >
          Violet
        </button>
        <button
          onClick={() => setTheme('rose')}
          className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            theme === 'rose'
              ? `${currentTheme.accent} border-2 shadow-sm ${currentTheme.border}`
              : `${currentTheme.text} hover:${currentTheme.card} border border-transparent`
          }`}
        >
          Rose
        </button>
      </div>
    </div>
  );
};

export default TemplatesBar;
