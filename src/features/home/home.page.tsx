import { css } from '@emotion/core';
import React from 'react';
import { RedirectLink } from '../../common/components/Button';
import { PageContent, Section } from '../../common/layout';
import { FeatureCard, FeatureCardProps } from './components/FeatureCard';
import { HomeParallax } from './components/HomeParallax';
import { HomeSection } from './components/HomeSection';
import { HomeContext } from './home.context';

type Props = {
  heading: string;
  mainpitch: {
    title: string;
    description: string;
  };
  description: string;
  intro: {
    blurbs: FeatureCardProps[];
  };
};

export const HomePage: React.FC<Props> = ({
  heading,
  mainpitch,
  description,
  intro
}) => {
  const { redirectLink } = React.useContext(HomeContext);
  return (
    <>
      <HomeParallax />
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
