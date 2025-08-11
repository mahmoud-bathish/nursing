'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, dir } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  // Show the language that user will switch TO, not current language
  const targetLanguage = language === 'en' ? languages[1] : languages[0]; // Arabic if English, English if Arabic

  const handleToggle = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg border-2 border-blue-200 bg-blue-50 text-blue-700 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 rtl:space-x-reverse cursor-pointer"
      aria-label={`Switch to ${targetLanguage.name}`}
      dir={dir}
    >
      <span className="text-lg">{targetLanguage.flag}</span>
      <span className="font-medium text-sm">{targetLanguage.name}</span>
      <svg
        className="w-4 h-4 text-gray-500 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    </button>
  );
}
