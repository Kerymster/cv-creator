import React from "react";
import { CVData } from "@/types/cvTypes/interfaces";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface ImageSectionProps {
  cvData: CVData;
}

const ImageSection = ({ cvData }: ImageSectionProps) => {
  return (
    <div className="flex-shrink-0">
      {cvData.personalInfo.photo ? (
        <Image
          src={cvData.personalInfo.photo}
          alt={`${cvData.personalInfo.name} profile`}
          width={100}
          height={100}
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200">
          <FontAwesomeIcon icon={faUser} className="text-gray-400 text-2xl" />
        </div>
      )}
    </div>
  );
};

export default ImageSection;
