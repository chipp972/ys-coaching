import './about-page.sass';

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { PageTitle } from '../components/Typography/PageTitle';

export const AboutPageTemplate = ({
  title,
  subtitle,
  mainImage,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <PageTitle title={title} subtitle={subtitle} />
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="about-content-container">
              <img
                className="about-main-image"
                src={
                  mainImage.childImageSharp
                    ? mainImage.childImageSharp.fluid.src
                    : mainImage
                }
                alt="Yuto"
              />
              <PageContent
                className="content about-content"
                content={content}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  mainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pathname={location.pathname}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        mainImage={post.frontmatter.mainImage}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        part1
        part2
        link {
          text
          url
        }
        mainImage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
