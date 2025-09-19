import { Theme, ThemeColors } from '@/types/appTypes';
import React from 'react';
import AuthButton from '@/components/auth/AuthButton';
import SaveButton from '@/components/cv/SaveButton';
import { CVData } from '@/types/cvTypes/interfaces';

interface HeaderProps {
  currentTheme: ThemeColors;
  setTheme: (theme: Theme) => void;
  theme: Theme;
  cvData: CVData;
  onSave: () => Promise<void>;
}

const Header = ({
  currentTheme,
  setTheme,
  theme,
  cvData,
  onSave,
}: HeaderProps) => {
  return (
    <div
      className={`${currentTheme.bg} border-b ${currentTheme.border} shadow-sm`}
    >
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-between">
          <h1
            className={`text-3xl ${currentTheme.headingFont} font-bold ${currentTheme.text}`}
          >
            CV Creator
          </h1>
          <div className="flex items-center gap-4">
            <SaveButton cvData={cvData} onSave={onSave} />
            <AuthButton />
          </div>
        </div>
        <div className="mt-4">
          <div className={`flex flex-wrap gap-2 ${currentTheme.bodyFont}`}>
            <button
              onClick={() => setTheme('light')}
              className={`cursor-pointer rounded px-3 py-1 text-sm ${
                theme === 'light'
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`cursor-pointer rounded px-3 py-1 text-sm ${
                theme === 'dark'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Dark
            </button>
            <button
              onClick={() => setTheme('blue')}
              className={`cursor-pointer rounded px-3 py-1 text-sm ${
                theme === 'blue'
                  ? 'bg-blue-200 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Blue
            </button>
            <button
              onClick={() => setTheme('slateAmber')}
              className={`cursor-pointer rounded px-3 py-1 text-sm ${
                theme === 'slateAmber'
                  ? 'bg-amber-200 text-amber-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Slate/Amber
            </button>
            <button
              onClick={() => setTheme('slateAmberDark')}
              className={`cursor-pointer rounded px-3 py-1 text-sm ${
                theme === 'slateAmberDark'
                  ? 'bg-amber-600 text-amber-100'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Slate/Amber Dark
            </button>
            <button
              onClick={() => setTheme('emerald')}
              className={`cursor-pointer rounded px-3 py-1 text-sm ${
                theme === 'emerald'
                  ? 'bg-emerald-200 text-emerald-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Emerald
            </button>
            <button
              onClick={() => setTheme('violet')}
              className={`cursor-pointer rounded px-3 py-1 text-sm ${
                theme === 'violet'
                  ? 'bg-violet-200 text-violet-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Violet
            </button>
            <button
              onClick={() => setTheme('rose')}
              className={`cursor-pointer rounded px-3 py-1 text-sm ${
                theme === 'rose'
                  ? 'bg-rose-200 text-rose-900'
                  : 'text-gray-600 hover:bg-gray-100'
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
