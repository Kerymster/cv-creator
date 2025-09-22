import { ThemeColors } from '@/types/appTypes';
import { CVData } from '@/types/cvTypes/interfaces';
import React from 'react';
import SkillBadge from '@/components/skillsBadge';

interface LanguagesProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const Languages = ({ currentTheme, cvData }: LanguagesProps) => {
  const { languages } = cvData.skills;
  return (
    <section className="mb-8">
      <h2
        className={`text-2xl ${currentTheme.headingFont} font-bold ${currentTheme.text} mb-4 border-b ${currentTheme.border} pb-2`}
      >
        Languages
      </h2>
      <div className="flex flex-wrap gap-2">
        <div>
          <div className="flex flex-wrap gap-2">
            {languages.map((skill, index) => (
              <SkillBadge
                key={index}
                skill={skill}
                currentTheme={currentTheme}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
