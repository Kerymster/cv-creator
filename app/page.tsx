"use client";

import Header from "@/components/header/header";
import ControlPanel from "@/components/panel";
import { defaultCVData } from "@/constants/cvData/defaultData";
import { themes } from "@/constants/themes";
import Certifications from "@/sections/certifications";
import Education from "@/sections/education";
import HeaderSection from "@/sections/header-section";
import ProfessionalExperience from "@/sections/professional-experience";
import Projects from "@/sections/projects";
import Summary from "@/sections/summary";
import TechnicalSkills from "@/sections/technical-skills";
import { Theme } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import { useEffect, useState } from "react";

export default function Home() {
  const [cvData, setCvData] = useState<CVData>();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setCvData(defaultCVData);
  }, []);

  const currentTheme = themes[theme];

  if (!cvData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`min-h-screen ${currentTheme.bg} transition-colors duration-300`}
    >
      {/* Header */}
      <Header currentTheme={currentTheme} setTheme={setTheme} theme={theme} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CV Preview */}
          <div className="lg:col-span-2">
            <div
              className={`${currentTheme.card} rounded-lg shadow-lg p-8 ${currentTheme.border} border`}
            >
              {/* Header Section */}
              <HeaderSection currentTheme={currentTheme} cvData={cvData} />

              {/* Professional Summary */}
              <Summary currentTheme={currentTheme} cvData={cvData} />

              {/* Technical Skills */}
              <TechnicalSkills currentTheme={currentTheme} cvData={cvData} />

              {/* Professional Experience */}
              <ProfessionalExperience
                currentTheme={currentTheme}
                cvData={cvData}
              />

              {/* Education */}
              <Education currentTheme={currentTheme} cvData={cvData} />

              {/* Projects */}
              <Projects currentTheme={currentTheme} cvData={cvData} />

              {/* Certifications */}
              <Certifications currentTheme={currentTheme} cvData={cvData} />
            </div>
          </div>

          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <ControlPanel currentTheme={currentTheme} />
          </div>
        </div>
      </div>
    </div>
  );
}
