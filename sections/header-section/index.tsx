import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React from "react";

interface HeaderSectionProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const HeaderSection = ({ currentTheme, cvData }: HeaderSectionProps) => {
  return (
    <div className="text-center mb-8">
      <h1
        className={`text-4xl ${currentTheme.headingFont} font-bold ${currentTheme.text} mb-2`}
      >
        {cvData.personalInfo.name}
      </h1>
      <p
        className={`text-xl ${currentTheme.headingFont} font-medium ${currentTheme.accent} mb-4`}
      >
        {cvData.personalInfo.title}
      </p>
      <div
        className={`flex flex-wrap justify-center gap-4 text-sm ${currentTheme.bodyFont}`}
      >
        <span className={`${currentTheme.text}`}>
          📧 {cvData.personalInfo.email}
        </span>
        <span className={`${currentTheme.text}`}>
          📱 {cvData.personalInfo.phone}
        </span>
        <span className={`${currentTheme.text}`}>
          📍 {cvData.personalInfo.location}
        </span>
      </div>
      <div
        className={`flex justify-center gap-4 mt-2 ${currentTheme.bodyFont}`}
      >
        <a
          href={`https://${cvData.personalInfo.linkedin}`}
          className={`${currentTheme.accent} hover:underline font-medium`}
        >
          LinkedIn
        </a>
        <a
          href={`https://${cvData.personalInfo.github}`}
          className={`${currentTheme.accent} hover:underline font-medium`}
        >
          GitHub
        </a>
        <a
          href={`https://${cvData.personalInfo.website}`}
          className={`${currentTheme.accent} hover:underline font-medium`}
        >
          Website
        </a>
      </div>
    </div>
  );
};

export default HeaderSection;
