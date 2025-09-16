import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React from "react";

interface EducationProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const Education = ({ currentTheme, cvData }: EducationProps) => {
  return (
    <section className="mb-8">
      <h2
        className={`text-2xl font-bold ${currentTheme.text} mb-4 border-b ${currentTheme.border} pb-2`}
      >
        Education
      </h2>
      {cvData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-lg font-semibold ${currentTheme.text}`}>
                {edu.degree}
              </h3>
              <p className={`${currentTheme.accent} font-medium`}>
                {edu.institution}
              </p>
              <p className={`text-sm ${currentTheme.text}`}>{edu.location}</p>
              {edu.gpa && (
                <p className={`text-sm ${currentTheme.text}`}>GPA: {edu.gpa}</p>
              )}
            </div>
            <span className={`text-sm ${currentTheme.text}`}>
              {edu.graduationDate}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
