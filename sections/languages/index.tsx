import { ThemeColors } from '@/types/appTypes';
import { CVData, LanguageWithProficiency } from '@/types/cvTypes/interfaces';
import React from 'react';

interface LanguagesProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

// Language Badge Component with Proficiency
const LanguageBadge = ({
  language,
  currentTheme,
  accentColor,
}: {
  language: LanguageWithProficiency;
  currentTheme: ThemeColors;
  accentColor: string;
}) => {
  return (
    <span
      className={`px-3 py-2 ${currentTheme.card} rounded-lg text-sm ${currentTheme.text} ${currentTheme.bodyFont} flex items-center gap-2 border ${currentTheme.border} transition-shadow hover:shadow-sm`}
    >
      <span className="font-medium">{language.name}</span>
      <span className={`text-xs ${accentColor}`}>({language.proficiency})</span>
    </span>
  );
};

const Languages = ({ currentTheme, cvData }: LanguagesProps) => {
  const { languages } = cvData.skills;
  const validLanguages = languages.filter((lang) => lang && lang.name);
  const { headingFont, accent, text, border } = currentTheme;

  return (
    <section className="mb-8">
      <h2
        className={`text-2xl ${headingFont} font-bold ${text} mb-4 border-b ${border} pb-2`}
      >
        Languages
      </h2>
      <div className="flex flex-wrap gap-2">
        {validLanguages.length === 0 ? (
          <p className="text-sm text-gray-500 italic">
            No languages added yet.
          </p>
        ) : (
          validLanguages.map((language, index) => (
            <LanguageBadge
              key={index}
              language={language}
              currentTheme={currentTheme}
              accentColor={accent}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Languages;
