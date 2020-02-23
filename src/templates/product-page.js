import * as R from 'ramda';
import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Pricing } from '../components/Pricing';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { HeadlineBanner } from '../components/HeadlineBanner/HeadlineBanner';
import { Tabs } from '../components/Tabs/Tabs';
import { colors } from '../components/theme';
import ReactSwipe from 'react-swipe';

// TODO: remove all the columns bullshit for correct spacing and padding
// TODO: Make a component for each step
// TODO: Use redux to build the form data

export const ProductPageTemplate = ({
  title,
  image,
  heading,
  subheading,
  description,
  packages,
  tabsData
}) => { 
  const swipeRef = React.useRef(null);
  return (
    <div className="container">
      <HeadlineBanner image={image} title={heading} subtitle={subheading} />
      <ReactSwipe
        css={css`
          background-color: ${colors.black01dp};
        `}
        ref={swipeRef}
        swipeOptions={{ continuous: false, speed: 500 }}>
        {/* Program choice */}
        <div className="section">
          <div className="columns">
            <SectionTitle className="column is-10 is-offset-1">{packages.heading}</SectionTitle>
          </div>
          {description && <p>{description}</p>}
          <div className="columns">
            <Tabs className="column is-10 is-offset-1" items={tabsData} />
          </div>
          <button type="button" onClick={() => swipeRef.current.next()}>next</button>
        </div>
        
        {/* Date and time choice */}
        <div className="section">
          <div className="columns">
            <SectionTitle className="column is-10 is-offset-1">Page 2</SectionTitle>
          </div>
          {description && <p>{description}</p>}
          <div className="columns">
            <Tabs className="column is-10 is-offset-1" items={tabsData} />
          </div>
          <button type="button" onClick={() => swipeRef.current.prev()}>prev</button>
        </div>
      </ReactSwipe>
    </div>
  );
};

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
