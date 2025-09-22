'use client';

import React, { useState } from 'react';
import { ThemeColors } from '@/types/appTypes';
import { CVData } from '@/types/cvTypes/interfaces';
import Summary from '@/sections/summary';
import EditButton from '@/components/edit-button/EditButton';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog';
import SummaryEditForm from '@/components/forms/SummaryEditForm';
import { toast } from 'react-toastify';

interface SummaryWithEditProps {
  currentTheme: ThemeColors;
  cvData: CVData;
  onDataUpdate?: (updatedData: CVData) => void;
  onSave?: (dataToSave: CVData) => Promise<void>;
}

const SummaryWithEdit: React.FC<SummaryWithEditProps> = ({
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

  const handleSave = async (updatedSummary: string) => {
    setIsEditing(true);

    try {
      const updatedCVData: CVData = {
        ...cvData,
        summary: updatedSummary,
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
          title="Edit professional summary"
        />
      </div>

      {/* Summary Section */}
      <Summary currentTheme={currentTheme} cvData={cvData} />

      {/* Edit Dialog */}
      <ConfirmationDialog
        isOpen={isEditDialogOpen}
        onClose={handleCancel}
        title="Edit Professional Summary"
        hasConfirmButton={false}
        hasCloseButton={true}
        maxWidth="800px"
        closeOnBackdropClick={false}
        closeOnEscape={true}
        contentPadding="24px"
      >
        <SummaryEditForm
          initialData={cvData.summary}
          onSave={handleSave}
          onCancel={handleCancel}
          isSaving={isEditing}
        />
      </ConfirmationDialog>
    </div>
  );
};

export default SummaryWithEdit;
