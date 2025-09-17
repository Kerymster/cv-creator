import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSkillIcon, getSkillIconColor } from "@/utils/skillsIcons";

interface ProjectsProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const Projects = ({ currentTheme, cvData }: ProjectsProps) => {
  return (
    <section className="mb-8">
      <h2
        className={`text-2xl ${currentTheme.headingFont} font-bold ${currentTheme.text} mb-4 border-b ${currentTheme.border} pb-2`}
      >
        Key Projects
      </h2>
      {cvData.projects.map((project, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3
              className={`text-lg ${currentTheme.headingFont} font-semibold ${currentTheme.text}`}
            >
              {project.name}
            </h3>
            {project.link && (
              <a
                href={`https://${project.link}`}
                className={`text-sm ${currentTheme.accent} ${currentTheme.bodyFont} hover:underline cursor-pointer`}
              >
                View Project
              </a>
            )}
          </div>
          <p
            className={`text-sm ${currentTheme.text} ${currentTheme.bodyFont} mb-2`}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => {
              const icon = getSkillIcon(tech);
              const iconColor = getSkillIconColor(tech);

              return (
                <span
                  key={techIndex}
                  className={`px-2 py-1 ${currentTheme.card} rounded text-xs ${currentTheme.text} ${currentTheme.bodyFont} flex items-center gap-1 border ${currentTheme.border}`}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="w-3 h-3"
                    style={{ color: iconColor }}
                  />
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
