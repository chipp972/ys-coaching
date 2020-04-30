import { css } from '@emotion/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react';
import { RedirectLink } from '../../common/components/Button';
import { GatsbyImage } from '../../common/helpers/gatsby';
import { PageContent, Section } from '../../common/layout';
import { FeatureCard, FeatureCardProps } from './components/FeatureCard';
import { HomeParallax } from './components/HomeParallax';
import { HomeSection } from './components/HomeSection';

type Props = {
  image: GatsbyImage;
  title: string;
  heading: string;
  subheading: string;
  mainpitch: {
    title: string;
    description: string;
  };
  description: string;
  intro: {
    blurbs: FeatureCardProps[];
  };
};

const useStyles = makeStyles(() => ({
  mainCta: {
    fontSize: '3rem',
    borderWidth: '3px',
    '&:hover': {
      borderWidth: '3px'
    }
  }
}));

export const HomePage: React.FC<Props> = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => {
  const theme = useTheme();
  const { mainCta } = useStyles();
  // TODO: put in contrib
  const redirectLink = {
    url: '/products',
    label: 'See all services',
    isInternal: true
  };
  return (
    <>
      <HomeParallax image={image} title={title} subtitle={subheading} />
      <PageContent>
        <Section>
          <HomeSection title={mainpitch.title} content={mainpitch.description} />
          <HomeSection title={heading} content={description} />
          <div
            css={css`
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
            `}>
            {intro.blurbs.map((featureData, index) => (
              <FeatureCard key={index} {...featureData} />
            ))}
          </div>
          <RedirectLink {...redirectLink} />
        </Section>
      </PageContent>
    </>
  );
};
