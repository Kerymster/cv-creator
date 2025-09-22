import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LanguageWithProficiency } from '@/types/cvTypes/interfaces';
import { proficiencyLevels } from '@/constants/languages';
import { ProficiencyLevel } from '@/types/languages';

interface LanguagesEditFormProps {
  initialLanguages: LanguageWithProficiency[];
  onSave: (languages: LanguageWithProficiency[]) => Promise<void>;
  onCancel: () => void;
  isSaving?: boolean;
}

const LanguagesEditForm: React.FC<LanguagesEditFormProps> = ({
  initialLanguages,
  onSave,
  onCancel,
  isSaving = false,
}) => {
  const [languages, setLanguages] =
    useState<LanguageWithProficiency[]>(initialLanguages);
  const [isDirty, setIsDirty] = useState(false);
  const [newLanguage, setNewLanguage] = useState('');
  const [newProficiency, setNewProficiency] =
    useState<ProficiencyLevel>('Intermediate');

  useEffect(() => {
    const languagesChanged =
      JSON.stringify(
        languages
          .filter((lang) => lang && lang.name)
          .sort((a, b) => a.name.localeCompare(b.name))
      ) !==
      JSON.stringify(
        initialLanguages
          .filter((lang) => lang && lang.name)
          .sort((a, b) => a.name.localeCompare(b.name))
      );
    setIsDirty(languagesChanged);
  }, [languages, initialLanguages]);

  const handleAddLanguage = () => {
    if (
      newLanguage.trim() &&
      !languages.some(
        (lang) =>
          lang &&
          lang.name &&
          lang.name.toLowerCase() === newLanguage.trim().toLowerCase()
      )
    ) {
      setLanguages([
        ...languages.filter((lang) => lang && lang.name), // Filter out any invalid entries
        { name: newLanguage.trim(), proficiency: newProficiency },
      ]);
      setNewLanguage('');
      setNewProficiency('Intermediate');
    }
  };

  const handleRemoveLanguage = (index: number) => {
    const validLanguages = languages.filter((lang) => lang && lang.name);
    if (index >= 0 && index < validLanguages.length) {
      const languageToRemove = validLanguages[index];
      setLanguages(languages.filter((lang) => lang !== languageToRemove));
    }
  };

  const handleUpdateProficiency = (
    index: number,
    proficiency: LanguageWithProficiency['proficiency']
  ) => {
    const validLanguages = languages.filter((lang) => lang && lang.name);
    if (index >= 0 && index < validLanguages.length) {
      const updatedLanguages = [...languages];
      if (updatedLanguages[index] && updatedLanguages[index].name) {
        updatedLanguages[index] = { ...updatedLanguages[index], proficiency };
        setLanguages(updatedLanguages);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddLanguage();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isDirty) {
      await onSave(languages);
    } else {
      onCancel();
    }
  };

  const handleCancel = () => {
    if (isDirty) {
      setLanguages(initialLanguages);
    }
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Languages
        </label>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new language..."
          />
          <select
            value={newProficiency}
            onChange={(e) =>
              setNewProficiency(
                e.target.value as LanguageWithProficiency['proficiency']
              )
            }
            className="rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            {proficiencyLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleAddLanguage}
            disabled={
              !newLanguage.trim() ||
              languages.some(
                (lang) =>
                  lang.name.toLowerCase() === newLanguage.trim().toLowerCase()
              )
            }
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
            Add
          </button>
        </div>

        <div className="space-y-3">
          {languages.filter((lang) => lang && lang.name).length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              No languages added yet.
            </p>
          ) : (
            languages
              .filter((lang) => lang && lang.name)
              .map((language, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4"
                >
                  <span className="flex-1 font-medium text-gray-900">
                    {language.name}
                  </span>
                  <select
                    value={language.proficiency}
                    onChange={(e) =>
                      handleUpdateProficiency(
                        index,
                        e.target.value as LanguageWithProficiency['proficiency']
                      )
                    }
                    className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  >
                    {proficiencyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => handleRemoveLanguage(index)}
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-red-100 p-2 text-red-600 transition-colors hover:bg-red-200 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    title="Remove language"
                  >
                    <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                  </button>
                </div>
              ))
          )}
        </div>

        <p className="mt-2 text-xs text-gray-500">
          {languages.filter((lang) => lang && lang.name).length} language
          {languages.filter((lang) => lang && lang.name).length !== 1
            ? 's'
            : ''}{' '}
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

export default LanguagesEditForm;
