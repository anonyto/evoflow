import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en' | 'ar';
  setLanguage: (lang: 'fr' | 'en' | 'ar') => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'fr' | 'en' | 'ar'>('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
