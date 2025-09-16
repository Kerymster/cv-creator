import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React from "react";

interface TechnicalSkillsProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const TechnicalSkills = ({ currentTheme, cvData }: TechnicalSkillsProps) => {
  return (
    <section className="mb-8">
      <h2
        className={`text-2xl font-bold ${currentTheme.text} mb-4 border-b ${currentTheme.border} pb-2`}
      >
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className={`font-semibold ${currentTheme.accent} mb-2`}>
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.technical.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className={`px-2 py-1 ${currentTheme.card} rounded text-sm ${currentTheme.text}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className={`font-semibold ${currentTheme.accent} mb-2`}>
            Frameworks & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.technical.slice(4, 8).map((skill, index) => (
              <span
                key={index}
                className={`px-2 py-1 ${currentTheme.card} rounded text-sm ${currentTheme.text}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className={`font-semibold ${currentTheme.accent} mb-2`}>
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.languages.map((skill, index) => (
              <span
                key={index}
                className={`px-2 py-1 ${currentTheme.card} rounded text-sm ${currentTheme.text}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
