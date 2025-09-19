import { CVData } from '@/types/cvTypes/interfaces';

export const handleRemovePhoto = (
  cvData: CVData,
  updateCVData: (updatedCVData: Partial<CVData>) => void
) => {
  const updatedCVData = {
    ...cvData,
    personalInfo: {
      ...cvData.personalInfo,
      photo: '',
    },
  };
  updateCVData(updatedCVData);
};

export const handleImageClick = (
  fileInputRef: React.RefObject<HTMLInputElement | null>
) => {
  fileInputRef.current?.click();
};
