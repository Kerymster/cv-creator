import { ThemeColors } from '@/types/appTypes';
import React from 'react';

interface CompanyLogoProps {
  currentTheme: ThemeColors;
}

const CompanyLogo = ({ currentTheme }: CompanyLogoProps) => {
  return (
    <h1
      className={`text-3xl ${currentTheme.headingFont} font-bold ${currentTheme.text}`}
    >
      CV Creator
    </h1>
  );
};

export default CompanyLogo;
