import * as R from 'ramda';
import React from 'react';
import { CtaProps } from '../../common/components/Button';
import { GatsbyImage } from '../../common/helpers/gatsby';

export type Card = {
  type: 'horizontal' | 'vertical' | 'carousel';
  image: GatsbyImage;
  title: string;
  alt?: string;
  text?: string;
};

export type SectionImage = {
  title: string;
  image: GatsbyImage;
  alt?: string;
  position: 'left' | 'right' | 'background';
  maxHeight?: number;
  url?: string;
  isInternal: boolean;
};

export type HomeSection = {
  theme: 'dark' | 'light';
  title: string;
  isTitleVisible: boolean;
  textPosition?: 'left' | 'right' | 'center';
  sectionImage?: SectionImage;
  markdownContent?: string;
  cards?: Card[];
  cta?: CtaProps;
};

export const HomeContext = React.createContext({
  title: '',
  subtitle: '',
  image: {} as SectionImage,
  mainCta: {} as CtaProps,
  sections: [] as string[],
  homeSectionList: [] as HomeSection[],
  redirectLink: {} as CtaProps
});

const getSections = R.pipe(
  R.path(['allMarkdownRemark', 'edges']),
  R.map(R.prop('node')),
  R.map((node) => {
    const frontmatter = R.propOr({}, 'frontmatter', node);
    const markdownContent = R.propOr('', 'html', node);

    return {
      ...frontmatter,
      markdownContent
    };
  })
);

export const getHomePageContextData = (data: PageData) => {
  const isPreview = !R.hasPath(['markdownRemark', 'frontmatter'], data);
  const contribution = isPreview ? data : R.path(['markdownRemark', 'frontmatter'], data);
  const sectionList: HomeSection[] = getSections(data);
  const homeSectionList: HomeSection[] = contribution.sections
    .map(({ section: sectionTitle }: {section: string}) => sectionList.find(({ title }) => title === sectionTitle));

  return {
    ...contribution,
    homeSectionList
  };
};
