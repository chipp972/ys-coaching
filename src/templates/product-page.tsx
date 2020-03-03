import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { ProductsPage } from '../features/products/products.page';
import { getProductsPageData } from '../features/products/products.data';

// TODO: put location in redux instead

type Props = {
  location: {
    pathname: string;
  };
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            description: string;
            position: number;
          };
          fields: {
            slug: string;
          };
        };
      };
    };
    markdownRemark: {
      // TODO: finish typing
      frontmatter: any;
    };
  };
};

const ProductPage: React.FC<Props> = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <ProductsPage {...getProductsPageData(data)} />
  </Layout>
);

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { dataKey: { eq: "product-categories" } } }
    ) {
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
