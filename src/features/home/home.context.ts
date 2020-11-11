import { FluidObject } from 'gatsby-image';
import React from 'react';
import { CtaProps } from '../../common/components/Button';
import { LocalizedField, PageData } from '../../custom';

export enum Position {
  left = 'left',
  right = 'right',
  center = 'center'
}

export enum ImagePosition {
  left = 'left',
  right = 'right',
  center = 'center',
  background = 'background'
}

export enum ThemeType {
  dark = 'dark',
  light = 'light'
}

export enum CardType {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export type Card = {
  id: string;
  cardType: CardType;
  image: {
    alt: string;
    fluid: FluidObject;
  };
  _allTextLocales: LocalizedField[];
  _allTitleLocales: LocalizedField[];
};

export type CardSectionData = {
  id: string;
  model: {
    apiKey: 'card_section';
  };
  cards: Card[];
  text?: string;
  image?: {
    alt: string;
    fluid: FluidObject;
  };
  imagePosition?: ImagePosition;
  cta?: CtaProps;
};

export type TitleSectionData = {
  id: string;
  model: {
    apiKey: 'title_section';
  };
  title: string;
  titleBackground: {
    hex: string;
  };
};

export type TextSectionData = {
  id: string;
  model: {
    apiKey: 'text_section';
  };
  theme: ThemeType;
  text: string;
  textPosition?: Position;
  image?: {
    alt: string;
    fluid: FluidObject;
  };
  imagePosition?: ImagePosition;
  maxImageHeight?: number;
  cta?: CtaProps;
  ctaPosition?: Position;
};

export type HomeSectionData = CardSectionData | TitleSectionData | TextSectionData;

export type HomePageProps = PageData<{
  _allHomeSectionLocales: LocalizedField<HomeSectionData>[];
  mainCta: CtaProps;
}>;

export const HomeContext = React.createContext({
  header: { title: '', subtitle: '', image: {} } as any,
  mainCta: {},
  _allHomeSectionLocales: []
});

