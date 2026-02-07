import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en' | 'ar';
  setLanguage: (lang: 'fr' | 'en' | 'ar') => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'fr' | 'en' | 'ar'>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
