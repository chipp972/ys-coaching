import React from 'react';
import { useI18n } from '../../common/layout/Multilanguage';
import { HomeContext } from './home.context';
import { HomeSection } from './HomeSection';

export const HomePage: React.FC = () => {
  const { _allHomeSectionLocales } = React.useContext(HomeContext);
  const { getLocalizedContent } = useI18n();
  const _homeSectionList = getLocalizedContent(_allHomeSectionLocales);

  return _homeSectionList.map((sectionData) => (
    <HomeSection key={sectionData.id} {...sectionData} />
  ));
};
