import { CVData } from '@/types/cvTypes/interfaces';

export interface ImageUploadHandlerProps {
  event: React.ChangeEvent<HTMLInputElement>;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  cvData: CVData;
  updateCVData: (updatedCVData: Partial<CVData>) => void;
}

export const handleImageUpload = ({
  event,
  fileInputRef,
  cvData,
  updateCVData,
}: ImageUploadHandlerProps) => {
  const file = event.target.files?.[0];
  if (file) {
    // Check file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      const updatedCVData = {
        ...cvData,
        personalInfo: {
          ...cvData.personalInfo,
          photo: result,
        },
      };
      updateCVData(updatedCVData);
      // Reset file input after successful upload
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };
    reader.readAsDataURL(file);
  }
};
