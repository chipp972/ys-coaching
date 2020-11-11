import { FluidObject } from 'gatsby-image';
import React from 'react';
import { CtaProps } from '../../common/components/Button';
import { LocalizedField } from '../../custom';

export type AboutSection = {
  id: string;
  image: {
    fluid: FluidObject;
    alt: string;
  };
  imagePosition: 'right' | 'left' | 'center' | 'full width' | 'full height';
  title: string;
  text: string;
};

export const AboutContext = React.createContext({
  _allContentLocales: [] as LocalizedField<AboutSection>[],
  cta: {} as CtaProps
});
