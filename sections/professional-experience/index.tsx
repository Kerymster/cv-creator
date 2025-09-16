import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React from "react";

interface ProfessionalExperienceProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const ProfessionalExperience = ({
  currentTheme,
  cvData,
}: ProfessionalExperienceProps) => {
  return (
    <section className="mb-8">
      <h2
        className={`text-2xl font-bold ${currentTheme.text} mb-4 border-b ${currentTheme.border} pb-2`}
      >
        Professional Experience
      </h2>
      {cvData.experience.map((job, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className={`text-lg font-semibold ${currentTheme.text}`}>
                {job.title}
              </h3>
              <p className={`${currentTheme.accent} font-medium`}>
                {job.company}
              </p>
              <p className={`text-sm ${currentTheme.text}`}>{job.location}</p>
            </div>
            <span className={`text-sm ${currentTheme.text}`}>
              {job.startDate} - {job.current ? "Present" : job.endDate}
            </span>
          </div>
          <ul className="list-disc list-inside space-y-1">
            {job.description.map((desc, descIndex) => (
              <li key={descIndex} className={`text-sm ${currentTheme.text}`}>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ProfessionalExperience;
