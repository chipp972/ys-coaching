import * as R from 'ramda';
import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Pricing from '../components/Pricing';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { HeadlineBanner } from '../components/HeadlineBanner/HeadlineBanner';
import { Tabs } from '../components/Tabs/Tabs';
import { colors } from '../components/theme';

// TODO: remove all the columns bullshit

export const ProductPageTemplate = ({
  title,
  image,
  heading,
  subheading,
  description,
  packages,
  tabsData
}) => (
  <div className="container">
    <HeadlineBanner image={image} title={heading} subtitle={subheading} />
    <div className="section" css={css`
      background-color: ${colors.black01dp};
    `}>
      <div className="columns">
        <SectionTitle className="column is-10 is-offset-1">{packages.heading}</SectionTitle>
      </div>
      {description && <p>{description}</p>}
      <div className="columns">
        <Tabs className="column is-10 is-offset-1" items={tabsData} />
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
  const { edges } = data.allMarkdownRemark;
  const packages = R.prop('packages', frontmatter);

  const tabsData = R.pipe(
    R.map((edge) => ({
      label: R.path(['node', 'frontmatter', 'title'], edge),
      value: R.path(['node', 'fields', 'slug'], edge),
      position: R.pathOr(50, ['node', 'frontmatter', 'position'], edge),
      description: R.path(['node', 'frontmatter', 'description'], edge)
    })),
    R.sortBy(R.prop('position')),
    R.map(({ label, value, description }) => ({
      label,
      value,
      content: (
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{description}</p>
            <Pricing data={packages.plans.filter(({category}) => category === label)} />
          </div>
        </div>
      )
    }))
  )(edges);

  return (
    <Layout pathname={location.pathname}>
      <ProductPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        tabsData={tabsData}
        packages={frontmatter.packages} />
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
    allMarkdownRemark(filter: {frontmatter: {dataKey: {eq: "product-categories"}}}) {
      edges {
        node {
          frontmatter {
            title
            description
            position
          }
          fields {
            slug
          }
        }
      }
    }
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
        subheading
        description
        packages {
          heading
          plans {
            plan
            category
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            benefits
            price
            frequency
          }
        }
      }
    }
  }
`;
