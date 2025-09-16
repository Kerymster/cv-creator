import { ThemeColors } from "@/types/appTypes";
import { CVData } from "@/types/cvTypes/interfaces";
import React from "react";

interface SummaryProps {
  currentTheme: ThemeColors;
  cvData: CVData;
}

const Summary = ({ currentTheme, cvData }: SummaryProps) => {
  return (
    <section className="mb-8">
      <h2
        className={`text-2xl font-bold ${currentTheme.text} mb-4 border-b ${currentTheme.border} pb-2`}
      >
        Professional Summary
      </h2>
      <p className={`${currentTheme.text} leading-relaxed`}>{cvData.summary}</p>
    </section>
  );
};

export default Summary;
