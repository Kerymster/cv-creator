import { ThemeColors } from '@/types/appTypes';
import { CVData } from '@/types/cvTypes/interfaces';
import Image from 'next/image';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { handleImageUpload } from '@/lib/helpers/photoUpload/imageUploadHandler';

interface PhotoUploadSectionProps {
  currentTheme: ThemeColors;
  cvData: CVData;
  handleRemovePhoto: (
    cvData: CVData,
    updateCVData: (updates: Partial<CVData>) => void
  ) => void;
  handleImageClick: (
    fileInputRef: React.RefObject<HTMLInputElement | null>
  ) => void;
  updateCVData: (updates: Partial<CVData>) => void;
}

const PhotoUploadSection = ({
  currentTheme,
  cvData,
  handleRemovePhoto,
  handleImageClick,
  updateCVData,
}: PhotoUploadSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onRemovePhoto = () => {
    handleRemovePhoto(cvData, updateCVData);
  };

  const onImageClick = () => {
    handleImageClick(fileInputRef);
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageUpload({
      event,
      fileInputRef,
      cvData,
      updateCVData,
    });
  };
  return (
    <div
      className={`${currentTheme.card} rounded-lg border p-4 shadow-md ${currentTheme.border} bg-opacity-50`}
    >
      <h3
        className={`${currentTheme.headingFont} font-semibold ${currentTheme.text} mb-3 text-center`}
      >
        Profile Photo
      </h3>
      <div className="space-y-3">
        <div className="flex flex-col items-center space-y-3">
          {cvData.personalInfo.photo ? (
            <div className="relative">
              <Image
                src={cvData.personalInfo.photo}
                alt="Profile preview"
                className="h-20 w-20 rounded-full border-2 border-gray-300 object-cover"
              />
              <button
                onClick={onRemovePhoto}
                className="absolute -top-2 -right-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xs" />
              </button>
            </div>
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-gray-200">
              <FontAwesomeIcon
                icon={faUser}
                className="text-2xl text-gray-400"
              />
            </div>
          )}
          <button
            onClick={onImageClick}
            className={`w-full px-4 py-2 ${currentTheme.accent} bg-opacity-10 hover:bg-opacity-20 cursor-pointer rounded text-sm transition-colors`}
          >
            {cvData.personalInfo.photo ? 'Change Photo' : 'Upload Photo'}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="hidden"
          />
          <p className={`text-xs ${currentTheme.text} text-center opacity-70`}>
            Max 5MB, JPG/PNG/GIF
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadSection;
