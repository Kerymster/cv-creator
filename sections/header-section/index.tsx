import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React from "react";
import ImageSection from "./image-section";
import ContentSection from "./content-section";

interface HeaderSectionProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const HeaderSection = ({ currentTheme, cvData }: HeaderSectionProps) => {
  return (
    <div
      className={`${currentTheme.headerBg} py-6 px-6 mb-8 rounded-lg border ${currentTheme.border}`}
    >
      <div className="flex items-start gap-6">
        {/* Content Section */}
        <ContentSection currentTheme={currentTheme} cvData={cvData} />

        {/* Photo Section */}
        <ImageSection cvData={cvData} />
      </div>
    </div>
  );
};

export default HeaderSection;
