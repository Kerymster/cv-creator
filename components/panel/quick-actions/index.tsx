import React from 'react';
import { ThemeColors } from '@/types/appTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPalette, faPlus } from '@fortawesome/free-solid-svg-icons';

interface QuickActionsProps {
  currentTheme: ThemeColors;
}

const QuickActions = ({ currentTheme }: QuickActionsProps) => {
  return (
    <div
      className={`${currentTheme.card} rounded-lg border p-4 shadow-md ${currentTheme.border} bg-opacity-50`}
    >
      <h3 className={`font-semibold ${currentTheme.text} mb-3 text-center`}>
        Quick Actions
      </h3>
      <div className="space-y-2">
        <button
          className={`w-full px-4 py-2 ${currentTheme.accent} bg-opacity-10 hover:bg-opacity-20 flex cursor-pointer items-center justify-start gap-2 rounded transition-colors`}
        >
          <FontAwesomeIcon icon={faEdit} className="h-4 w-4" />
          Edit Information
        </button>
        <button
          className={`w-full px-4 py-2 ${currentTheme.accent} bg-opacity-10 hover:bg-opacity-20 flex cursor-pointer items-center justify-start gap-2 rounded transition-colors`}
        >
          <FontAwesomeIcon icon={faPalette} className="h-4 w-4" />
          Customize Colors
        </button>
        <button
          className={`w-full px-4 py-2 ${currentTheme.accent} bg-opacity-10 hover:bg-opacity-20 flex cursor-pointer items-center justify-start gap-2 rounded transition-colors`}
        >
          <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
          Add Section
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
