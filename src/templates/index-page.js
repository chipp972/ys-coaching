import './index-page.sass';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import {GhostButton} from '../components/Buttons/Buttons';

import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import { FeatureCard } from '../components/FeatureCard/FeatureCard';

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
    <div
      className="margin-top-0 home-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}>
      <div className="text-container">
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen big-headline box-shadow">
          {title}
        </h1>
        <h3 className="has-text-weight-bold has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen description box-shadow">
          {subheading}
        </h3>
        <GhostButton title="GET STARTED NOW" className="home-big-cta box-shadow" to="/products" />
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h3 className="section-title">{mainpitch.title}</h3>
                  </div>
                  <div className="tile">
                    <p>{mainpitch.description}</p>
                  </div>
                </div>
                {/* <div className="triangle" /> */}
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="section-title">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="columns is-multiline">
                  {intro.blurbs.map((featureData, index) => (
                    <FeatureCard key={index} {...featureData} />
                  ))}
                </div>
                <div className="columns" style={{margin: '20px 0'}}>
                  <div className="column is-12 has-text-centered">
                    <GhostButton to="/products" title="See all services" className="home-services-cta" />
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
