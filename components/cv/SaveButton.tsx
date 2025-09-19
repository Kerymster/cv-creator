'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSave,
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { CVData } from '@/types/cvTypes/interfaces';

interface SaveButtonProps {
  cvData: CVData;
  onSave: () => Promise<void>;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onSave }) => {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const handleSave = async () => {
    if (!user) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
      return;
    }

    try {
      setSaving(true);
      await onSave();
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      console.error('Save failed:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } finally {
      setSaving(false);
    }
  };

  const getButtonContent = () => {
    if (saving) {
      return (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
          Saving...
        </>
      );
    }

    if (saveStatus === 'success') {
      return (
        <>
          <FontAwesomeIcon icon={faCheck} />
          Saved!
        </>
      );
    }

    if (saveStatus === 'error') {
      return (
        <>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          Error
        </>
      );
    }

    return (
      <>
        <FontAwesomeIcon icon={faSave} />
        Save CV
      </>
    );
  };

  const getButtonClass = () => {
    const baseClass =
      'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium';

    if (saveStatus === 'success') {
      return `${baseClass} bg-green-600 text-white hover:bg-green-700`;
    }

    if (saveStatus === 'error') {
      return `${baseClass} bg-red-600 text-white hover:bg-red-700`;
    }

    if (saving) {
      return `${baseClass} bg-gray-600 text-white cursor-not-allowed`;
    }

    return `${baseClass} bg-blue-600 text-white hover:bg-blue-700`;
  };

  return (
    <button
      onClick={handleSave}
      disabled={saving || !user}
      className={getButtonClass()}
    >
      {getButtonContent()}
    </button>
  );
};

export default SaveButton;
