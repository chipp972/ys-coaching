import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { LocalizedField } from '../../custom';

const supportedLocales = [
  { value: 'en', label: 'English' },
  { value: 'ja', label: 'Japanese' }
];

export const defaultLocale = supportedLocales[0].value;

const getClosestWindowLocale = () => {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }
  const { language } = window.navigator;
  return supportedLocales
    .find(({ value }) => language.includes(value))?.value || defaultLocale;
};

export const useI18n = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState(getClosestWindowLocale());

  React.useEffect(() => {
    const storedLanguage = localStorage?.getItem('language');
    if (storedLanguage !== currentLanguage) {
      setCurrentLanguage(storedLanguage);
    }
  }, []);

  const getLocalizedContent = React.useCallback((localizedContents: LocalizedField<any>[]) => {
    const contentIndex = localizedContents.findIndex(({ locale }) => currentLanguage?.includes(locale));
    return localizedContents[contentIndex === -1 ? 0 : contentIndex].value;
  }, [currentLanguage]);

  const setLanguage = (language: string) => {
    localStorage?.setItem('language', language);
    setCurrentLanguage(language);
  };

  return {
    currentLanguage,
    setLanguage,
    getLocalizedContent
  };
};

export const LanguageSelection: React.FC<{className?: string}> = ({ className }) => {
  const { currentLanguage, setLanguage } = useI18n();

  return (
    <Select
      className={className}
      variant="standard"
      value={currentLanguage || defaultLocale }
      onChange={(event) => setLanguage((event.target as HTMLSelectElement).value)}>
      {supportedLocales.map(({ label, value }) => (
        <MenuItem key={value} value={value}>{label}</MenuItem>
      ))}
    </Select>
  );
};
