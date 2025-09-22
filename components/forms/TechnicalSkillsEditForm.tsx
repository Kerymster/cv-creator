import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getSkillIcon, getSkillIconColor } from '@/utils/skillsIcons';

interface TechnicalSkillsEditFormProps {
  initialProgrammingLanguages: string[];
  initialFrameworks: string[];
  onSave: (
    programmingLanguages: string[],
    frameworks: string[]
  ) => Promise<void>;
  onCancel: () => void;
  isSaving?: boolean;
}

const TechnicalSkillsEditForm: React.FC<TechnicalSkillsEditFormProps> = ({
  initialProgrammingLanguages,
  initialFrameworks,
  onSave,
  onCancel,
  isSaving = false,
}) => {
  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>(
    initialProgrammingLanguages
  );
  const [frameworks, setFrameworks] = useState<string[]>(initialFrameworks);
  const [isDirty, setIsDirty] = useState(false);
  const [newProgrammingLanguage, setNewProgrammingLanguage] = useState('');
  const [newFramework, setNewFramework] = useState('');

  useEffect(() => {
    const programmingLanguagesChanged =
      JSON.stringify(programmingLanguages.sort()) !==
      JSON.stringify(initialProgrammingLanguages.sort());
    const frameworksChanged =
      JSON.stringify(frameworks.sort()) !==
      JSON.stringify(initialFrameworks.sort());
    setIsDirty(programmingLanguagesChanged || frameworksChanged);
  }, [
    programmingLanguages,
    frameworks,
    initialProgrammingLanguages,
    initialFrameworks,
  ]);

  const handleAddProgrammingLanguage = () => {
    if (
      newProgrammingLanguage.trim() &&
      !programmingLanguages.includes(newProgrammingLanguage.trim())
    ) {
      setProgrammingLanguages([
        ...programmingLanguages,
        newProgrammingLanguage.trim(),
      ]);
      setNewProgrammingLanguage('');
    }
  };

  const handleRemoveProgrammingLanguage = (index: number) => {
    setProgrammingLanguages(programmingLanguages.filter((_, i) => i !== index));
  };

  const handleAddFramework = () => {
    if (newFramework.trim() && !frameworks.includes(newFramework.trim())) {
      setFrameworks([...frameworks, newFramework.trim()]);
      setNewFramework('');
    }
  };

  const handleRemoveFramework = (index: number) => {
    setFrameworks(frameworks.filter((_, i) => i !== index));
  };

  const handleKeyPress = (
    e: React.KeyboardEvent,
    type: 'programming' | 'framework'
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (type === 'programming') {
        handleAddProgrammingLanguage();
      } else {
        handleAddFramework();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isDirty) {
      await onSave(programmingLanguages, frameworks);
    } else {
      onCancel();
    }
  };

  const handleCancel = () => {
    if (isDirty) {
      setProgrammingLanguages(initialProgrammingLanguages);
      setFrameworks(initialFrameworks);
    }
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Programming Languages
        </label>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={newProgrammingLanguage}
            onChange={(e) => setNewProgrammingLanguage(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, 'programming')}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new programming language..."
          />
          <button
            type="button"
            onClick={handleAddProgrammingLanguage}
            disabled={
              !newProgrammingLanguage.trim() ||
              programmingLanguages.includes(newProgrammingLanguage.trim())
            }
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
            Add
          </button>
        </div>

        <div className="space-y-2">
          {programmingLanguages.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              No programming languages added yet.
            </p>
          ) : (
            programmingLanguages.map((language, index) => {
              const icon = getSkillIcon(language);
              const iconColor = getSkillIconColor(language);

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: iconColor }}
                  />
                  <span className="flex-1 font-medium text-gray-900">
                    {language}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveProgrammingLanguage(index)}
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-red-100 p-2 text-red-600 transition-colors hover:bg-red-200 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    title="Remove language"
                  >
                    <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        <p className="mt-2 text-xs text-gray-500">
          {programmingLanguages.length} language
          {programmingLanguages.length !== 1 ? 's' : ''} added
        </p>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Frameworks & Tools
        </label>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={newFramework}
            onChange={(e) => setNewFramework(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, 'framework')}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new framework or tool..."
          />
          <button
            type="button"
            onClick={handleAddFramework}
            disabled={
              !newFramework.trim() || frameworks.includes(newFramework.trim())
            }
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
            Add
          </button>
        </div>

        <div className="space-y-2">
          {frameworks.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              No frameworks or tools added yet.
            </p>
          ) : (
            frameworks.map((framework, index) => {
              const icon = getSkillIcon(framework);
              const iconColor = getSkillIconColor(framework);

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: iconColor }}
                  />
                  <span className="flex-1 font-medium text-gray-900">
                    {framework}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFramework(index)}
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-red-100 p-2 text-red-600 transition-colors hover:bg-red-200 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    title="Remove framework"
                  >
                    <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        <p className="mt-2 text-xs text-gray-500">
          {frameworks.length} framework{frameworks.length !== 1 ? 's' : ''}{' '}
          added
        </p>
      </div>

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

export default TechnicalSkillsEditForm;
