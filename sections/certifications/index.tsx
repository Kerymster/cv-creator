import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React from "react";

interface CertificationsProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const Certifications = ({ currentTheme, cvData }: CertificationsProps) => {
  return (
    <section>
      <h2
        className={`text-2xl ${currentTheme.headingFont} font-bold ${currentTheme.text} mb-4 border-b ${currentTheme.border} pb-2`}
      >
        Certifications
      </h2>
      {cvData.certifications.map((cert, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <div>
            <h3
              className={`${currentTheme.headingFont} font-semibold ${currentTheme.text}`}
            >
              {cert.name}
            </h3>
            <p
              className={`text-sm ${currentTheme.accent} ${currentTheme.bodyFont}`}
            >
              {cert.issuer}
            </p>
          </div>
          <span
            className={`text-sm ${currentTheme.text} ${currentTheme.bodyFont}`}
          >
            {cert.date}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
