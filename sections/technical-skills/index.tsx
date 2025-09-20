import { ThemeColors } from '@/types/appTypes';
import { CVData } from '@/types/cvTypes/interfaces';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSkillIcon, getSkillIconColor } from '@/utils/skillsIcons';

interface TechnicalSkillsProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

// Skill Badge Component
const SkillBadge = ({
  skill,
  currentTheme,
}: {
  skill: string;
  currentTheme: ThemeColors;
}) => {
  const icon = getSkillIcon(skill);
  const iconColor = getSkillIconColor(skill);

  return (
    <span
      className={`px-3 py-2 ${currentTheme.card} rounded-lg text-sm ${currentTheme.text} ${currentTheme.bodyFont} flex items-center gap-2 border ${currentTheme.border} transition-shadow hover:shadow-sm`}
    >
      <FontAwesomeIcon
        icon={icon}
        className="h-4 w-4"
        style={{ color: iconColor }}
      />
      {skill}
    </span>
  );
};

const TechnicalSkills = ({ currentTheme, cvData }: TechnicalSkillsProps) => {
  return (
    <section className="mb-8">
      <h2
        className={`text-2xl ${currentTheme.headingFont} font-bold ${currentTheme.text} mb-4 border-b ${currentTheme.border} pb-2`}
      >
        Technical Skills
      </h2>
      <div className="flex flex-wrap gap-6">
        <div>
          <h3
            className={`${currentTheme.headingFont} font-semibold ${currentTheme.accent} mb-3`}
          >
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.technical.slice(0, 4).map((skill, index) => (
              <SkillBadge
                key={index}
                skill={skill}
                currentTheme={currentTheme}
              />
            ))}
          </div>
        </div>
        <div>
          <h3
            className={`${currentTheme.headingFont} font-semibold ${currentTheme.accent} mb-3`}
          >
            Frameworks & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.technical.slice(4, 8).map((skill, index) => (
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

export default TechnicalSkills;
