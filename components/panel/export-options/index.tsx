import { ThemeColors } from '@/types/appTypes';
import { faFilePdf, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ExportOptionsProps {
  currentTheme: ThemeColors;
  handlePrintPDF: () => void;
}

const ExportOptions = ({
  currentTheme,
  handlePrintPDF,
}: ExportOptionsProps) => {
  return (
    <div
      className={`${currentTheme.card} rounded-lg border p-4 shadow-md ${currentTheme.border} bg-opacity-50`}
    >
      <h3 className={`font-semibold ${currentTheme.text} mb-3 text-center`}>
        Export Options
      </h3>
      <div className="space-y-2">
        <button
          onClick={handlePrintPDF}
          className={`w-full px-4 py-2 ${currentTheme.accent} bg-opacity-10 hover:bg-opacity-20 flex cursor-pointer items-center justify-start gap-2 rounded transition-colors`}
        >
          <FontAwesomeIcon icon={faFilePdf} className="h-4 w-4" />
          Export as PDF
        </button>
        <button
          className={`w-full px-4 py-2 ${currentTheme.accent} bg-opacity-10 hover:bg-opacity-20 flex cursor-pointer items-center justify-start gap-2 rounded transition-colors`}
        >
          <FontAwesomeIcon icon={faCopy} className="h-4 w-4" />
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default ExportOptions;
