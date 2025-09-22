'use client';

import React, { useState } from 'react';
import { ThemeColors } from '@/types/appTypes';
import { CVData } from '@/types/cvTypes/interfaces';
import TechnicalSkills from './index';
import EditButton from '@/components/edit-button/EditButton';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog';
import TechnicalSkillsEditForm from '@/components/forms/TechnicalSkillsEditForm';
import { toast } from 'react-toastify';

interface TechnicalSkillsWithEditProps {
  currentTheme: ThemeColors;
  cvData: CVData;
  onDataUpdate?: (updatedData: CVData) => void;
  onSave?: (dataToSave: CVData) => Promise<void>;
}

const TechnicalSkillsWithEdit: React.FC<TechnicalSkillsWithEditProps> = ({
  currentTheme,
  cvData,
  onDataUpdate,
  onSave,
}) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleSave = async (
    updatedProgrammingLanguages: string[],
    updatedFrameworks: string[]
  ) => {
    setIsEditing(true);

    try {
      const updatedCVData: CVData = {
        ...cvData,
        skills: {
          ...cvData.skills,
          programmingLanguages: updatedProgrammingLanguages,
          frameworks: updatedFrameworks,
        },
      };

      if (onDataUpdate) {
        onDataUpdate(updatedCVData);
      }

      if (onSave) {
        await onSave(updatedCVData);
      }

      setIsEditDialogOpen(false);
    } catch {
      toast.error('Failed to save changes. Please try again.');
    } finally {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditDialogOpen(false);
  };

  return (
    <div className="group relative">
      <div className="absolute top-2 right-2 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <EditButton
          onClick={handleEditClick}
          size="sm"
          variant="gradient"
          title="Edit technical skills"
        />
      </div>

      {/* Technical Skills Section */}
      <TechnicalSkills currentTheme={currentTheme} cvData={cvData} />

      {/* Edit Dialog */}
      <ConfirmationDialog
        isOpen={isEditDialogOpen}
        onClose={handleCancel}
        title="Edit Technical Skills"
        hasConfirmButton={false}
        hasCloseButton={true}
        maxWidth="800px"
        closeOnBackdropClick={false}
        closeOnEscape={true}
        contentPadding="24px"
      >
        <TechnicalSkillsEditForm
          initialProgrammingLanguages={
            cvData.skills.programmingLanguages ||
            (
              cvData.skills as CVData['skills'] & { technical?: string[] }
            ).technical?.slice(0, 4) ||
            []
          }
          initialFrameworks={
            cvData.skills.frameworks ||
            (
              cvData.skills as CVData['skills'] & { technical?: string[] }
            ).technical?.slice(4, 8) ||
            []
          }
          onSave={handleSave}
          onCancel={handleCancel}
          isSaving={isEditing}
        />
      </ConfirmationDialog>
    </div>
  );
};

export default TechnicalSkillsWithEdit;
