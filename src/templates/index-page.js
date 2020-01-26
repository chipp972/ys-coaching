import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GhostButton } from '../components/Buttons/Buttons';

import Layout from '../components/Layout';
import { FeatureCard } from '../components/FeatureCard/FeatureCard';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { HomeParallax } from '../components/HomeParallax';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <HomeParallax
      image={image}
      title={title}
      subtitle={subheading} />
    <section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="tile">
                <SectionTitle>{mainpitch.title}</SectionTitle>
              </div>
              <div className="tile">
                <p>{mainpitch.description}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
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
            <GhostButton to="/products" title="See all services" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout pathname={location.pathname}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
          heading
          description
        }
      }
    }
  }
`;
