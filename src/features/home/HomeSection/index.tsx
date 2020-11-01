import React from 'react';
import { CardSectionData, HomeSectionData, TextSectionData, TitleSectionData } from '../home.context';
import { CardSection } from './CardSection';
import { TextSection } from './TextSection';
import { TitleSection } from './TitleSection';

export const HomeSection: React.FC<HomeSectionData> = (sectionData) => {
  const { model } = sectionData;
  switch(model.apiKey) {
    case 'title_section':
      return <TitleSection {...sectionData as TitleSectionData} />;
    case 'card_section':
      return <CardSection {...sectionData as CardSectionData} />;
    case 'text_section':
      return <TextSection {...sectionData as TextSectionData} />;
    default:
      return null;
  }
};
