'use client';

import React, { useState } from 'react';
import { ThemeColors } from '@/types/appTypes';
import { CVData, personalInfo } from '@/types/cvTypes/interfaces';
import HeaderSection from '@/sections/header-section';
import EditButton from '@/components/edit-button/EditButton';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog';
import HeaderEditForm from '@/components/forms/HeaderEditForm';
import { toast } from 'react-toastify';

interface HeaderWithEditProps {
  currentTheme: ThemeColors;
  cvData: CVData;
  onDataUpdate?: (updatedData: CVData) => void;
  onSave?: (dataToSave: CVData) => Promise<void>;
}

const HeaderWithEdit: React.FC<HeaderWithEditProps> = ({
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

  const handleSave = async (updatedPersonalInfo: personalInfo) => {
    setIsEditing(true);

    try {
      const updatedCVData: CVData = {
        ...cvData,
        personalInfo: updatedPersonalInfo,
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
          title="Edit header information"
        />
      </div>

      {/* Header Section */}
      <HeaderSection currentTheme={currentTheme} cvData={cvData} />

      {/* Edit Dialog */}
      <ConfirmationDialog
        isOpen={isEditDialogOpen}
        onClose={handleCancel}
        title="Edit Header Information"
        hasConfirmButton={false}
        hasCloseButton={true}
        maxWidth="600px"
        closeOnBackdropClick={false}
        closeOnEscape={true}
        contentPadding="24px"
      >
        <HeaderEditForm
          initialData={cvData.personalInfo}
          onSave={handleSave}
          onCancel={handleCancel}
          isSaving={isEditing}
        />
      </ConfirmationDialog>
    </div>
  );
};

export default HeaderWithEdit;
