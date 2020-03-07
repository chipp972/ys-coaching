import React from 'react';
import { GhostButton } from '../../common/components/Button';
import { FeatureCard, FeatureCardProps } from './components/FeatureCard/FeatureCard';
import { SectionTitle } from '../../common/theme';
import { HomeParallax } from './components/HomeParallax/HomeParallax';
import { GatsbyImage } from '../../helpers/gatsby';

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
          <div className="columns" style={{ marginTop: '50px' }}>
            <GhostButton to="/products">See all services</GhostButton>
          </div>
        </div>
      </div>
    </section>
  </div>
);
