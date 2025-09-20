import React, { useState, useEffect } from 'react';

interface SummaryEditFormProps {
  initialData: string;
  onSave: (data: string) => Promise<void>;
  onCancel: () => void;
  isSaving?: boolean;
}

const SummaryEditForm: React.FC<SummaryEditFormProps> = ({
  initialData,
  onSave,
  onCancel,
  isSaving = false,
}) => {
  const [formData, setFormData] = useState<string>(initialData);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    // Check if form data has changed from initial data
    const hasChanges = formData !== initialData;
    setIsDirty(hasChanges);
  }, [formData, initialData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isDirty) {
      await onSave(formData);
    } else {
      onCancel();
    }
  };

  const handleCancel = () => {
    if (isDirty) {
      // Reset form to initial data
      setFormData(initialData);
    }
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        {/* Summary */}
        <div>
          <label
            htmlFor="summary"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Professional Summary *
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData}
            onChange={handleInputChange}
            rows={6}
            className="resize-vertical w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Write a compelling professional summary that highlights your key skills, experience, and career objectives..."
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            {formData.length} characters
          </p>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3 border-t border-gray-200 pt-4">
        <button
          type="button"
          onClick={handleCancel}
          className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:outline-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!isDirty || isSaving}
          className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold shadow-lg transition-all duration-300 focus:outline-none ${
            !isDirty || isSaving
              ? 'cursor-not-allowed bg-gray-400 text-gray-200 opacity-60 hover:scale-100 hover:bg-gray-400 focus:ring-0'
              : 'focus:ring-opacity-50 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500'
          }`}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
};

export default SummaryEditForm;
