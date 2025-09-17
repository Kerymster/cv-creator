import { ThemeColors, Font } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFilePdf,
  faCopy,
  faSave,
  faEdit,
  faPalette,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface ControlPanelProps {
  currentTheme: ThemeColors;
  headingFont: Font;
  bodyFont: Font;
  setHeadingFont: (font: Font) => void;
  setBodyFont: (font: Font) => void;
  cvData: CVData;
  updateCVData: (data: CVData) => void;
}

const ControlPanel = ({
  currentTheme,
  headingFont,
  bodyFont,
  setHeadingFont,
  setBodyFont,
  cvData,
  updateCVData,
}: ControlPanelProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePrintPDF = () => {
    window.print();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
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
          fileInputRef.current.value = "";
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    const updatedCVData = {
      ...cvData,
      personalInfo: {
        ...cvData.personalInfo,
        photo: "",
      },
    };
    updateCVData(updatedCVData);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`${currentTheme.card} rounded-lg shadow-lg p-6 ${currentTheme.border} border sticky top-8`}
    >
      <h2
        className={`text-xl ${currentTheme.headingFont} font-bold ${currentTheme.text} mb-6`}
      >
        Customize Your CV
      </h2>

      <div className="space-y-6">
        {/* Photo Upload Section */}
        <div>
          <h3
            className={`${currentTheme.headingFont} font-semibold ${currentTheme.text} mb-3`}
          >
            Profile Photo
          </h3>
          <div className="space-y-3">
            <div className="flex flex-col items-center space-y-3">
              {cvData.personalInfo.photo ? (
                <div className="relative">
                  <img
                    src={cvData.personalInfo.photo}
                    alt="Profile preview"
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                  />
                  <button
                    onClick={handleRemovePhoto}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-xs" />
                  </button>
                </div>
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-400 text-2xl"
                  />
                </div>
              )}
              <button
                onClick={handleImageClick}
                className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors text-sm cursor-pointer`}
              >
                {cvData.personalInfo.photo ? "Change Photo" : "Upload Photo"}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <p
                className={`text-xs ${currentTheme.text} text-center opacity-70`}
              >
                Max 5MB, JPG/PNG/GIF
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3
            className={`${currentTheme.headingFont} font-semibold ${currentTheme.text} mb-3`}
          >
            Font Selection
          </h3>
          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm ${currentTheme.text} ${currentTheme.bodyFont} mb-2`}
              >
                Heading Font
              </label>
              <select
                value={headingFont}
                onChange={(e) => setHeadingFont(e.target.value as Font)}
                className={`w-full p-2 rounded border ${currentTheme.border} ${currentTheme.bg} ${currentTheme.text} ${currentTheme.bodyFont} cursor-pointer`}
              >
                <option value="poppins">Poppins (Modern)</option>
                <option value="inter">Inter (Clean)</option>
                <option value="source-sans">Source Sans (Professional)</option>
                <option value="nunito-sans">Nunito Sans (Friendly)</option>
                <option value="geist">Geist (Tech)</option>
              </select>
            </div>
            <div>
              <label
                className={`block text-sm ${currentTheme.text} ${currentTheme.bodyFont} mb-2`}
              >
                Body Font
              </label>
              <select
                value={bodyFont}
                onChange={(e) => setBodyFont(e.target.value as Font)}
                className={`w-full p-2 rounded border ${currentTheme.border} ${currentTheme.bg} ${currentTheme.text} ${currentTheme.bodyFont} cursor-pointer`}
              >
                <option value="inter">Inter (Clean)</option>
                <option value="poppins">Poppins (Modern)</option>
                <option value="source-sans">Source Sans (Professional)</option>
                <option value="nunito-sans">Nunito Sans (Friendly)</option>
                <option value="geist">Geist (Tech)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className={`font-semibold ${currentTheme.text} mb-3`}>
            Export Options
          </h3>
          <div className="space-y-2">
            <button
              onClick={handlePrintPDF}
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer flex items-center justify-center gap-2`}
            >
              <FontAwesomeIcon icon={faFilePdf} className="w-4 h-4" />
              Export as PDF
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer flex items-center justify-center gap-2`}
            >
              <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
              Copy to Clipboard
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer flex items-center justify-center gap-2`}
            >
              <FontAwesomeIcon icon={faSave} className="w-4 h-4" />
              Save Template
            </button>
          </div>
        </div>

        <div>
          <h3 className={`font-semibold ${currentTheme.text} mb-3`}>
            Quick Actions
          </h3>
          <div className="space-y-2">
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer flex items-center justify-center gap-2`}
            >
              <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
              Edit Information
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer flex items-center justify-center gap-2`}
            >
              <FontAwesomeIcon icon={faPalette} className="w-4 h-4" />
              Customize Colors
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer flex items-center justify-center gap-2`}
            >
              <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
              Add Section
            </button>
          </div>
        </div>

        <div>
          <h3 className={`font-semibold ${currentTheme.text} mb-3`}>
            Templates
          </h3>
          <div className="space-y-2">
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer`}
            >
              💼 Professional
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer`}
            >
              🎨 Creative
            </button>
            <button
              className={`w-full py-2 px-4 ${currentTheme.accent} bg-opacity-10 rounded hover:bg-opacity-20 transition-colors cursor-pointer`}
            >
              🚀 Modern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
