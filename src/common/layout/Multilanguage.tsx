import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { LocalizedField } from '../../custom';

export const defaultLocale = 'en';

export const useI18n = (defaultLanguage = defaultLocale) => {
  const [currentLanguage, setCurrentLanguage] = React.useState(window.navigator.language || defaultLanguage);

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

export const LanguageSelection = () => {
  const { currentLanguage, setLanguage } = useI18n();
  return (
    <Select value={currentLanguage || 'en'} onChange={(event) => setLanguage(event.target.value)}>
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ja">Japanese</MenuItem>
    </Select>
  );
};
