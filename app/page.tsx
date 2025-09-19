'use client';

import Header from '@/components/header/header';
import ControlPanel from '@/components/panel';
import { themes } from '@/constants/themes';
import Certifications from '@/sections/certifications';
import Education from '@/sections/education';
import HeaderSection from '@/sections/header-section';
import ProfessionalExperience from '@/sections/professional-experience';
import Projects from '@/sections/projects';
import Summary from '@/sections/summary';
import TechnicalSkills from '@/sections/technical-skills';
import { Theme, Font } from '@/types/appTypes';
import { useState, useEffect, useCallback } from 'react';
import { defaultCVData } from '@/constants/cvData/defaultData';
import { CVData } from '@/types/cvTypes/interfaces';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function Home() {
  const { user, loading: authLoading } = useAuth();
  const [cvData, setCvData] = useState<CVData>(defaultCVData);
  const [cvSaving, setCvSaving] = useState(false);
  const [theme, setTheme] = useState<Theme>('slateAmber');
  const [headingFont, setHeadingFont] = useState<Font>('poppins');
  const [bodyFont, setBodyFont] = useState<Font>('inter');

  const currentTheme = {
    ...themes[theme],
    headingFont: `font-${headingFont}`,
    bodyFont: `font-${bodyFont}`,
  };

  // Simple function to load CV data
  const loadCVData = useCallback(async () => {
    if (!user) return;

    try {
      const docRef = doc(db, 'cvData', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCvData(docSnap.data() as CVData);
      }
    } catch (error) {
      console.error('Error loading CV data:', error);
      console.log('No saved CV data found, using default');
    }
  }, [user]);

  // Simple function to save CV data
  const saveCVData = async () => {
    if (!user) return;

    try {
      setCvSaving(true);
      const docRef = doc(db, 'cvData', user.uid);
      await setDoc(docRef, cvData);
      console.log('CV saved successfully!');
    } catch (error) {
      console.error('Failed to save CV:', error);
    } finally {
      setCvSaving(false);
    }
  };

  // Simple function to update CV data
  const updateCVData = (updates: Partial<CVData>) => {
    setCvData((prev) => ({ ...prev, ...updates }));
  };

  // Load data when user changes
  useEffect(() => {
    if (user) {
      loadCVData();
    } else {
      setCvData(defaultCVData);
    }
  }, [user, loadCVData]);

  // Show loading only during initial auth check
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300">
      {/* Header */}
      <Header currentTheme={currentTheme} setTheme={setTheme} theme={theme} />

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* CV Preview */}
          <div className="lg:col-span-2">
            <div
              id="cv-content"
              className={`${currentTheme.card} rounded-lg p-8 shadow-lg ${currentTheme.border} border`}
            >
              {/* Header Section */}
              <HeaderSection currentTheme={currentTheme} cvData={cvData} />

              {/* Professional Summary */}
              <Summary currentTheme={currentTheme} cvData={cvData} />

              {/* Technical Skills */}
              <TechnicalSkills currentTheme={currentTheme} cvData={cvData} />

              {/* Professional Experience */}
              <ProfessionalExperience
                currentTheme={currentTheme}
                cvData={cvData}
              />

              {/* Education */}
              <Education currentTheme={currentTheme} cvData={cvData} />

              {/* Projects */}
              <Projects currentTheme={currentTheme} cvData={cvData} />

              {/* Certifications */}
              <Certifications currentTheme={currentTheme} cvData={cvData} />
            </div>
          </div>

          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <ControlPanel
              currentTheme={currentTheme}
              headingFont={headingFont}
              bodyFont={bodyFont}
              setHeadingFont={setHeadingFont}
              setBodyFont={setBodyFont}
              cvData={cvData}
              updateCVData={updateCVData}
              onSave={saveCVData}
              cvSaving={cvSaving}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
