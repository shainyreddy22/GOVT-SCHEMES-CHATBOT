import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: t('language.english'), nativeName: 'English' },
    { code: 'hi', name: t('language.hindi'), nativeName: 'हिंदी' },
    { code: 'te', name: t('language.telugu'), nativeName: 'తెలుగు' },
    { code: 'ta', name: t('language.tamil'), nativeName: 'தமிழ்' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('language.select')}
      >
        <Globe size={18} />
        <span className="current-language">{currentLanguage.nativeName}</span>
        <ChevronDown size={16} className={`chevron ${isOpen ? 'open' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="language-native">{language.nativeName}</span>
              <span className="language-english">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;