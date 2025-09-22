'use client';

import React, { useState } from 'react';
import { ThemeColors } from '@/types/appTypes';
import { CVData, LanguageWithProficiency } from '@/types/cvTypes/interfaces';
import Languages from './index';
import EditButton from '@/components/edit-button/EditButton';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog';
import LanguagesEditForm from '@/components/forms/LanguagesEditForm';
import { toast } from 'react-toastify';

interface LanguagesWithEditProps {
  currentTheme: ThemeColors;
  cvData: CVData;
  onDataUpdate?: (updatedData: CVData) => void;
  onSave?: (dataToSave: CVData) => Promise<void>;
}

const LanguagesWithEdit: React.FC<LanguagesWithEditProps> = ({
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

  const handleSave = async (updatedLanguages: LanguageWithProficiency[]) => {
    setIsEditing(true);

    try {
      // Filter out any invalid language entries before saving
      const validLanguages = updatedLanguages.filter(
        (lang) => lang && lang.name && lang.proficiency
      );

      const updatedCVData: CVData = {
        ...cvData,
        skills: {
          ...cvData.skills,
          languages: validLanguages,
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
          title="Edit languages"
        />
      </div>

      {/* Languages Section */}
      <Languages currentTheme={currentTheme} cvData={cvData} />

      {/* Edit Dialog */}
      <ConfirmationDialog
        isOpen={isEditDialogOpen}
        onClose={handleCancel}
        title="Edit Languages"
        hasConfirmButton={false}
        hasCloseButton={true}
        maxWidth="600px"
        closeOnBackdropClick={false}
        closeOnEscape={true}
        contentPadding="24px"
      >
        <LanguagesEditForm
          initialLanguages={(cvData.skills.languages || []).filter(
            (lang) => lang && lang.name
          )}
          onSave={handleSave}
          onCancel={handleCancel}
          isSaving={isEditing}
        />
      </ConfirmationDialog>
    </div>
  );
};

export default LanguagesWithEdit;
