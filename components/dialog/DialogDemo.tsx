import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import ConfirmationDialog from './ConfirmationDialog';

const DialogDemo: React.FC = () => {
  const [showBasicDialog, setShowBasicDialog] = useState(false);
  const [showDangerDialog, setShowDangerDialog] = useState(false);
  const [showFormDialog, setShowFormDialog] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleBasicConfirm = () => {
    alert('Basic action confirmed!');
    setShowBasicDialog(false);
  };

  const handleDangerConfirm = () => {
    alert('Dangerous action confirmed!');
    setShowDangerDialog(false);
  };

  const handleFormSubmit = () => {
    alert(`Form submitted with: ${JSON.stringify(formData)}`);
    setShowFormDialog(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="space-y-4 p-8">
      <h1 className="mb-6 text-2xl font-bold">Dialog Components Demo</h1>

      <div className="space-y-4">
        <button
          onClick={() => setShowBasicDialog(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Show Basic Confirmation Dialog
        </button>

        <button
          onClick={() => setShowDangerDialog(true)}
          className="rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          Show Dangerous Action Dialog
        </button>

        <button
          onClick={() => setShowFormDialog(true)}
          className="rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
        >
          Show Form Dialog
        </button>
      </div>

      {/* Basic Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={showBasicDialog}
        onClose={() => setShowBasicDialog(false)}
        onConfirm={handleBasicConfirm}
        onReject={() => setShowBasicDialog(false)}
        title="Confirm Action"
        positiveMessage="Yes, Continue"
        negativeMessage="Cancel"
        titleIcon={<FontAwesomeIcon icon={faSave} className="text-blue-600" />}
      >
        <div className="py-4">
          <p className="text-gray-700">
            Are you sure you want to proceed with this action? This will save
            your changes.
          </p>
        </div>
      </ConfirmationDialog>

      {/* Dangerous Action Dialog */}
      <ConfirmationDialog
        isOpen={showDangerDialog}
        onClose={() => setShowDangerDialog(false)}
        onConfirm={handleDangerConfirm}
        onReject={() => setShowDangerDialog(false)}
        title="Delete Item"
        positiveMessage="Delete"
        negativeMessage="Cancel"
        hasDangerousAction={true}
        titleIcon={
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-red-600"
          />
        }
      >
        <div className="py-4">
          <p className="mb-3 text-gray-700">
            This action cannot be undone. Are you sure you want to delete this
            item?
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <p className="text-sm text-red-800">
              <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
              Warning: This will permanently remove the item from your account.
            </p>
          </div>
        </div>
      </ConfirmationDialog>

      {/* Form Dialog */}
      <ConfirmationDialog
        isOpen={showFormDialog}
        onClose={() => setShowFormDialog(false)}
        onConfirm={handleFormSubmit}
        onReject={() => setShowFormDialog(false)}
        title="User Information"
        positiveMessage="Save"
        negativeMessage="Cancel"
        actLikeForm={true}
        isButtonDisabled={!formData.name || !formData.email}
        titleIcon={<FontAwesomeIcon icon={faSave} className="text-green-600" />}
      >
        <div className="space-y-4 py-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </ConfirmationDialog>
    </div>
  );
};

export default DialogDemo;
