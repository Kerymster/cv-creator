import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/types/cvTypes/interfaces';

interface HeaderEditFormProps {
  initialData: personalInfo;
  onSave: (data: personalInfo) => Promise<void>;
  onCancel: () => void;
  isSaving?: boolean;
}

const HeaderEditForm: React.FC<HeaderEditFormProps> = ({
  initialData,
  onSave,
  onCancel,
  isSaving = false,
}) => {
  const [formData, setFormData] = useState<personalInfo>(initialData);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    // Check if form data has changed from initial data
    const hasChanges = JSON.stringify(formData) !== JSON.stringify(initialData);
    setIsDirty(hasChanges);
  }, [formData, initialData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Name */}
        <div className="md:col-span-2">
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Title */}
        <div className="md:col-span-2">
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Professional Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Senior Software Engineer"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="your.email@example.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="City, State/Country"
            required
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label
            htmlFor="linkedin"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="linkedin.com/in/yourprofile"
          />
        </div>

        {/* GitHub */}
        <div>
          <label
            htmlFor="github"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            GitHub
          </label>
          <input
            type="text"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="github.com/yourusername"
          />
        </div>

        {/* Website */}
        <div>
          <label
            htmlFor="website"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="yourwebsite.com"
          />
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
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
};

export default HeaderEditForm;
