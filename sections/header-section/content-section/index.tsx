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
  const { name, title, email, phone, location, linkedin, github, website } =
    cvData.personalInfo;

  const { headingFont, bodyFont, text, accent } = currentTheme;

  return (
    <div className="flex-1 text-left">
      <h1
        className={`text-3xl md:text-4xl ${headingFont} font-bold ${text} mb-1`}
      >
        {name}
      </h1>
      <p
        className={`text-lg md:text-xl ${headingFont} font-medium ${accent} mb-4`}
      >
        {title}
      </p>

      {/* Contact Information - Horizontal Layout */}
      <div
        className={`flex flex-wrap justify-start gap-4 text-sm ${bodyFont} mb-3`}
      >
        <span className={`${currentTheme.text} flex items-center gap-2`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="h-4 w-4 text-gray-500"
          />
          {email}
        </span>
        <span className={`${text} flex items-center gap-2`}>
          <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-gray-500" />
          {phone}
        </span>
        <span className={`${text} flex items-center gap-2`}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="h-4 w-4 text-gray-500"
          />
          {location}
        </span>
      </div>

      {/* Social Media - Clean Layout */}
      <div className={`flex flex-wrap justify-start gap-4 text-sm ${bodyFont}`}>
        {linkedin && (
          <span className={`${text} flex items-center gap-2`}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-4 w-4 text-gray-500"
            />
            {linkedin}
          </span>
        )}
        {github && (
          <span className={`${text} flex items-center gap-2`}>
            <FontAwesomeIcon
              icon={faGithub}
              className="h-4 w-4 text-gray-500"
            />
            {github}
          </span>
        )}
        {website && (
          <span className={`${text} flex items-center gap-2`}>
            <FontAwesomeIcon icon={faGlobe} className="h-4 w-4 text-gray-500" />
            {website}
          </span>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
