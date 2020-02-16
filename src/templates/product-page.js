import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Pricing from '../components/Pricing';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { HeadlineBanner } from '../components/HeadlineBanner/HeadlineBanner';
import { Tabs } from '../components/Tabs/Tabs';

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
    <HeadlineBanner image={image} title={heading} subtitle={description} />
    <div className="section">
      <div className="columns">
        <SectionTitle className="column is-10 is-offset-1">{pricing.heading}</SectionTitle>
      </div>
      <div className="columns">
        <Tabs className="column is-10 is-offset-1" items={[
          {option: 'single session', value: 'single-session'},
          {option: 'long term coaching', value: 'long-term-coaching'},
          {option: 'custom programs', value: 'custom-programs'}
        ]}
        defaultValue="long-term-coaching" />
      </div>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <p>{pricing.description}</p>
          <Pricing data={pricing.plans} />
        </div>
      </div>
    </div>
  </div>
);

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        image={frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
