'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function LanguagePopup() {
  const { language, setLanguage, t, dir } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasShown = localStorage.getItem('hasShownLanguagePopup');
    if (!hasShown) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLanguageSelect = (selectedLang: 'en' | 'ar') => {
    setLanguage(selectedLang);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" dir={dir}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">{t.languagePopup.title}</h2>
          <p className="text-blue-100">{t.languagePopup.subtitle}</p>
        </div>

        {/* Language Options */}
        <div className="p-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* English Option */}
            <button
              onClick={() => handleLanguageSelect('en')}
              className={`cursor-pointer flex-1 p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                language === 'en'
                  ? 'border-blue-600 bg-blue-50 text-blue-900'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EN</span>
                </div>
                <div className="font-semibold text-lg text-black">{t.languagePopup.english}</div>
                <div className="text-sm text-gray-600">English</div>
              </div>
            </button>

            {/* Arabic Option */}
            <button
              onClick={() => handleLanguageSelect('ar')}
              className={`cursor-pointer flex-1 p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                language === 'ar'
                  ? 'border-blue-600 bg-blue-50 text-blue-900'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ع</span>
                </div>
                <div className="font-semibold text-lg text-black">{t.languagePopup.arabic}</div>
                <div className="text-sm text-gray-600">العربية</div>
              </div>
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <div className="px-6 pb-6">
          <button
            onClick={() => setShowPopup(false)}
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 transform hover:scale-105"
          >
            {language === 'ar' ? t.languagePopup.continue : t.languagePopup.continueAr}
          </button>
        </div>
      </div>
    </div>
  );
}
