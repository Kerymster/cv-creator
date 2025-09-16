import React from "react";
import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";

interface ContentSectionProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const ContentSection = ({ currentTheme, cvData }: ContentSectionProps) => {
  return (
    <div className="flex-1 text-left">
      <h1
        className={`text-3xl md:text-4xl ${currentTheme.headingFont} font-bold ${currentTheme.text} mb-1`}
      >
        {cvData.personalInfo.name}
      </h1>
      <p
        className={`text-lg md:text-xl ${currentTheme.headingFont} font-medium ${currentTheme.accent} mb-4`}
      >
        {cvData.personalInfo.title}
      </p>

      {/* Contact Information - Horizontal Layout */}
      <div
        className={`flex flex-wrap justify-start gap-4 text-sm ${currentTheme.bodyFont} mb-3`}
      >
        <span className={`${currentTheme.text} flex items-center gap-1`}>
          <span className="text-gray-500">📧</span>
          {cvData.personalInfo.email}
        </span>
        <span className={`${currentTheme.text} flex items-center gap-1`}>
          <span className="text-gray-500">📱</span>
          {cvData.personalInfo.phone}
        </span>
        <span className={`${currentTheme.text} flex items-center gap-1`}>
          <span className="text-gray-500">📍</span>
          {cvData.personalInfo.location}
        </span>
      </div>

      {/* Social Media - Clean Layout */}
      <div
        className={`flex flex-wrap justify-start gap-4 text-sm ${currentTheme.bodyFont}`}
      >
        <span className={`${currentTheme.text} flex items-center gap-1`}>
          <span className="text-gray-500">💼</span>
          {cvData.personalInfo.linkedin}
        </span>
        <span className={`${currentTheme.text} flex items-center gap-1`}>
          <span className="text-gray-500">🐙</span>
          {cvData.personalInfo.github}
        </span>
        <span className={`${currentTheme.text} flex items-center gap-1`}>
          <span className="text-gray-500">🌐</span>
          {cvData.personalInfo.website}
        </span>
      </div>
    </div>
  );
};

export default ContentSection;
