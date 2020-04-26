import { css } from '@emotion/core';
import React from 'react';
import { PrimaryButton } from '../../common/components/Button';
import { GatsbyImage } from '../../common/helpers/gatsby';
import { SectionTitle } from '../../common/theme';
import { FeatureCard, FeatureCardProps } from './components/FeatureCard/FeatureCard';
import { HomeParallax } from './components/HomeParallax/HomeParallax';

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

export const HomePage: React.FC<Props> = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <HomeParallax image={image} title={title} subtitle={subheading} />
    <section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="tile">
                <SectionTitle>{mainpitch.title}</SectionTitle>
              </div>
              <div className="tile">
                <p>{mainpitch.description}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-12">
              <SectionTitle>{heading}</SectionTitle>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns is-multiline">
            {intro.blurbs.map((featureData, index) => (
              <FeatureCard key={index} {...featureData} />
            ))}
          </div>
          <div css={css`
            display: flex;
            justify-content: center;
            margin-top: 5rem;
          `}>
            <PrimaryButton to="/products">See all services</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  </div>
);
