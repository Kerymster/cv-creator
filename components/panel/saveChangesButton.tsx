import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faCheck,
  faExclamationTriangle,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'firebase/auth';

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
  return (
    <div className="mt-8">
      <button
        onClick={handleSave}
        disabled={isLoading || !user}
        className={`focus:ring-opacity-50 flex w-full transform items-center justify-center gap-3 rounded-xl px-6 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:outline-none ${
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
    </div>
  );
};

export default SaveChangesButton;
