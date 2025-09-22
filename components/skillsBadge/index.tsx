import { ThemeColors } from '@/types/appTypes';
import { getSkillIcon, getSkillIconColor } from '@/utils/skillsIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SkillBadgeProps {
  skill: string;
  currentTheme: ThemeColors;
}

const SkillBadge = ({ skill, currentTheme }: SkillBadgeProps) => {
  const icon = getSkillIcon(skill);
  const iconColor = getSkillIconColor(skill);

  return (
    <span
      className={`px-3 py-2 ${currentTheme.card} rounded-lg text-sm ${currentTheme.text} ${currentTheme.bodyFont} flex items-center gap-2 border ${currentTheme.border} transition-shadow hover:shadow-sm`}
    >
      <FontAwesomeIcon
        icon={icon}
        className="h-4 w-4"
        style={{ color: iconColor }}
      />
      {skill}
    </span>
  );
};

export default SkillBadge;
