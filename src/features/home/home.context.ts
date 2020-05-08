import * as R from 'ramda';
import React from 'react';
import { GatsbyImage } from '../../common/helpers/gatsby';

type Cta = {
  label: string;
  url: string;
  isInternal: boolean;
};

type Card = {
  image: GatsbyImage;
  title: string;
  description: string;
};

type CardSection = {
  
}

type HomeSection = { };

export const HomeContext = React.createContext({
  title: '',
  subtitle: '',
  image: null as GatsbyImage,
  mainCta: {} as Cta,
  redirectLink: {} as Cta
});

export const getHomePageContextData = (data: any) => {
  const isPreview = !R.hasPath(['markdownRemark', 'frontmatter'], data);
  const contribution = isPreview ? data : R.path(['markdownRemark', 'frontmatter'], data);

  return {
    ...contribution
  };
};
