import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faCheck,
  faExclamationTriangle,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'firebase/auth';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog';

interface SaveChangesButtonProps {
  handleSave: () => void;
  isLoading: boolean;
  saveStatus: 'success' | 'error' | 'idle';
  user: User | null;
}

const SaveChangesButton = ({
  handleSave,
  isLoading,
  saveStatus,
  user,
}: SaveChangesButtonProps) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleSaveClick = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmSave = () => {
    handleSave();
    setShowConfirmDialog(false);
  };

  const handleCancelSave = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="mt-8">
      <button
        onClick={handleSaveClick}
        disabled={isLoading || !user}
        className={`focus:ring-opacity-50 flex w-full transform cursor-pointer items-center justify-center gap-3 rounded-xl px-6 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:outline-none ${
          saveStatus === 'success'
            ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
            : saveStatus === 'error'
              ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
              : isLoading
                ? 'cursor-not-allowed bg-gray-600 text-white hover:scale-100'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500'
        }`}
      >
        {isLoading ? (
          <>
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            Saving Changes...
          </>
        ) : saveStatus === 'success' ? (
          <>
            <FontAwesomeIcon icon={faCheck} />
            Changes Saved!
          </>
        ) : saveStatus === 'error' ? (
          <>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            Save Failed
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faSave} />
            Save Changes
          </>
        )}
      </button>

      {/* Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={showConfirmDialog}
        onClose={handleCancelSave}
        onConfirm={handleConfirmSave}
        onReject={handleCancelSave}
        title="Save Changes"
        positiveMessage="Yes, Save"
        negativeMessage="Cancel"
        titleIcon={<FontAwesomeIcon icon={faSave} className="text-blue-600" />}
      >
        <div className="py-4">
          <p className="text-gray-700">
            Are you sure you want to save your changes? This will update your CV
            with the current information.
          </p>
        </div>
      </ConfirmationDialog>
    </div>
  );
};

export default SaveChangesButton;
