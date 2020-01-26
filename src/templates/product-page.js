import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Pricing from '../components/Pricing';
import { css } from '@emotion/core';
import { FullWidthImage } from '../components/ImageContainer/FullWidthImage';
import { fontFamilies } from '../components/theme';

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  fullImage,
  pricing
}) => (
  <div className="container">
    <div className="section">
      <div className="columns">
        <div className="column is-10 has-text-centered is-offset-1">
          <h3 className="has-text-weight-semibold is-size-2" css={css`
            font-family: ${fontFamilies.notoSans};
            line-height: 177.5%;
            letter-spacing: 2px;
            text-transform: uppercase;
          `}>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="columns">
            <div className="column is-7">
              <h3 className="section-title" css={css`margin-bottom: 1rem;`}>
                {main.heading}
              </h3>
              <p>{main.description}</p>
            </div>
          </div>
          <FullWidthImage image={fullImage} />
          <h2 className="section-title" css={css`margin-bottom: 1rem;`}>
            {pricing.heading}
          </h2>
          <p className="is-size-5">{pricing.description}</p>
          <Pricing data={pricing.plans} />
        </div>
      </div>
    </div>
  </div>
);

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({}),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  })
};

const ProductPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout pathname={location.pathname}>
      <ProductPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        intro {
          heading
          description
        }
        main {
          heading
          description
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
            frequency
            image {
              childImageSharp {
                fluid(maxWidth: 330, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
