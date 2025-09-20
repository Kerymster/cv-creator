import React from 'react';
import { ThemeColors } from '@/types/appTypes';
import { CVData } from '@/types/cvTypes/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <span className={`${currentTheme.text} flex items-center gap-2`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="h-4 w-4 text-gray-500"
          />
          {cvData.personalInfo.email}
        </span>
        <span className={`${currentTheme.text} flex items-center gap-2`}>
          <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-gray-500" />
          {cvData.personalInfo.phone}
        </span>
        <span className={`${currentTheme.text} flex items-center gap-2`}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="h-4 w-4 text-gray-500"
          />
          {cvData.personalInfo.location}
        </span>
      </div>

      {/* Social Media - Clean Layout */}
      <div
        className={`flex flex-wrap justify-start gap-4 text-sm ${currentTheme.bodyFont}`}
      >
        {cvData.personalInfo.linkedin && (
          <span className={`${currentTheme.text} flex items-center gap-2`}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-4 w-4 text-gray-500"
            />
            {cvData.personalInfo.linkedin}
          </span>
        )}
        {cvData.personalInfo.github && (
          <span className={`${currentTheme.text} flex items-center gap-2`}>
            <FontAwesomeIcon
              icon={faGithub}
              className="h-4 w-4 text-gray-500"
            />
            {cvData.personalInfo.github}
          </span>
        )}
        {cvData.personalInfo.website && (
          <span className={`${currentTheme.text} flex items-center gap-2`}>
            <FontAwesomeIcon icon={faGlobe} className="h-4 w-4 text-gray-500" />
            {cvData.personalInfo.website}
          </span>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
