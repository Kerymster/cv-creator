import { ThemeColors, Font } from '@/types/appTypes';
import { CVData } from '@/types/cvTypes/interfaces';
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import SaveChangesButton from './saveChangesButton';
import PhotoUploadSection from './photo-upload';
import { handleRemovePhoto } from '@/lib/helpers/photoUpload/helpers';
import { handleImageClick } from '@/lib/helpers/photoUpload/helpers';
import StylingSection from './styling-section';
import ExportOptions from './export-options';
import QuickActions from './quick-actions';
import { handleSave } from '@/lib/helpers/saveChanges/saveChangesHandler';
import { handlePrintPDF } from '@/lib/helpers/exportPDF/triggerPrint';

interface ControlPanelProps {
  currentTheme: ThemeColors;
  headingFont: Font;
  bodyFont: Font;
  setHeadingFont: (font: Font) => void;
  setBodyFont: (font: Font) => void;
  cvData: CVData;
  updateCVData: (updates: Partial<CVData>) => void;
  onSave: () => Promise<void>;
  cvSaving?: boolean;
}

const ControlPanel = ({
  currentTheme,
  headingFont,
  bodyFont,
  setHeadingFont,
  setBodyFont,
  cvData,
  updateCVData,
  onSave,
  cvSaving = false,
}: ControlPanelProps) => {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const isLoading = saving || cvSaving;

  return (
    <div
      className={`${currentTheme.bg} rounded-lg p-6 shadow-lg ${currentTheme.border} sticky top-8 border`}
    >
      <div className="space-y-4">
        {/* Photo Upload Section */}
        <PhotoUploadSection
          currentTheme={currentTheme}
          cvData={cvData}
          handleRemovePhoto={handleRemovePhoto}
          handleImageClick={handleImageClick}
          updateCVData={updateCVData}
        />

        {/* Styling Selection */}
        <StylingSection
          currentTheme={currentTheme}
          headingFont={headingFont}
          bodyFont={bodyFont}
          setHeadingFont={setHeadingFont}
          setBodyFont={setBodyFont}
        />

        {/* Export Options */}
        <ExportOptions
          currentTheme={currentTheme}
          handlePrintPDF={handlePrintPDF}
        />

        {/* Quick Actions */}
        <QuickActions currentTheme={currentTheme} />

        {/* Save Changes Button */}
        <SaveChangesButton
          handleSave={() => handleSave(user, onSave, setSaveStatus, setSaving)}
          isLoading={isLoading}
          saveStatus={saveStatus}
          user={user}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
