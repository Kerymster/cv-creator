import { Theme, ThemeColors } from '@/types/appTypes';
import React from 'react';
import AuthButton from '@/components/auth/AuthButton';
import CompanyLogo from './companyLogo';
import TemplatesBar from './templatesBar';

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
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CompanyLogo currentTheme={currentTheme} />
            <TemplatesBar
              currentTheme={currentTheme}
              setTheme={setTheme}
              theme={theme}
            />
          </div>
          <div className="flex items-center gap-4">
            <AuthButton currentTheme={currentTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
