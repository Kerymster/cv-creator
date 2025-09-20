'use client';

import Header from '@/components/header/header';
import ControlPanel from '@/components/panel';
import { themes } from '@/constants/themes';
import Certifications from '@/sections/certifications';
import Education from '@/sections/education';
import HeaderWithEdit from '@/components/header/HeaderWithEdit';
import ProfessionalExperience from '@/sections/professional-experience';
import Projects from '@/sections/projects';
import SummaryWithEdit from '@/components/summary/SummaryWithEdit';
import TechnicalSkills from '@/sections/technical-skills';
import { Theme, Font } from '@/types/appTypes';
import { useState, useEffect, useCallback } from 'react';
import { defaultCVData } from '@/constants/cvData/defaultData';
import { CVData } from '@/types/cvTypes/interfaces';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import Languages from '@/sections/languages';

export default function Home() {
  const { user, loading: authLoading } = useAuth();
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [cvSaving, setCvSaving] = useState(false);
  const [cvLoading, setCvLoading] = useState(true); // Start with loading true
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
      setCvLoading(true);
      const docRef = doc(db, 'cvData', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCvData(docSnap.data() as CVData);
      } else {
        // Only set default data if no saved data exists
        setCvData(defaultCVData);
      }
    } catch {
      toast.error('Error loading CV data. Using default template.');
      setCvData(defaultCVData);
    } finally {
      setCvLoading(false);
    }
  }, [user]);

  // Simple function to save CV data
  const saveCVData = async (dataToSave?: CVData) => {
    if (!user) return;

    try {
      setCvSaving(true);
      const docRef = doc(db, 'cvData', user.uid);
      const data = dataToSave || cvData;
      if (data) {
        await setDoc(docRef, data);
        toast.success('CV saved successfully!');
      }
    } catch {
      toast.error('Failed to save CV. Please try again.');
    } finally {
      setCvSaving(false);
    }
  };

  // Simple function to update CV data
  const updateCVData = (updates: Partial<CVData>) => {
    setCvData((prev) => {
      if (!prev) return null;
      return { ...prev, ...updates };
    });
  };

  // Load data when user changes
  useEffect(() => {
    if (user) {
      loadCVData();
    } else {
      setCvData(defaultCVData);
      setCvLoading(false);
    }
  }, [user, loadCVData]);

  // Show loading during auth check or CV data loading (only when user is logged in)
  if (authLoading || (user && cvLoading) || (user && !cvData)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
          <p className="text-gray-600">
            {authLoading ? 'Loading...' : 'Loading your CV...'}
          </p>
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
              <HeaderWithEdit
                currentTheme={currentTheme}
                cvData={cvData!}
                onDataUpdate={updateCVData}
                onSave={saveCVData}
              />

              {/* Professional Summary */}
              <SummaryWithEdit
                currentTheme={currentTheme}
                cvData={cvData!}
                onDataUpdate={updateCVData}
                onSave={saveCVData}
              />

              {/* Technical Skills */}
              <TechnicalSkills currentTheme={currentTheme} cvData={cvData!} />

              {/* Languages */}
              <Languages currentTheme={currentTheme} cvData={cvData!} />

              {/* Professional Experience */}
              <ProfessionalExperience
                currentTheme={currentTheme}
                cvData={cvData!}
              />

              {/* Education */}
              <Education currentTheme={currentTheme} cvData={cvData!} />

              {/* Projects */}
              <Projects currentTheme={currentTheme} cvData={cvData!} />

              {/* Certifications */}
              <Certifications currentTheme={currentTheme} cvData={cvData!} />
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
              cvData={cvData!}
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
