import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '../common/layout';
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

const Products: React.FC<Props> = ({ data, location }) => {
  const { title, subtitle, image } = data.markdownRemark.frontmatter;
  return (
    <Page
      pathname={location.pathname}
      title={title}
      subtitle={subtitle}
      image={image}
      hasHeadlineBanner>
      <ProductsPage {...getProductsPageData(data)} />
    </Page>
  );
};

export default Products;

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
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        packages {
          stepName
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
        dateTimeScreen {
          stepName
          heading
          description
          availableTimeslots {
            start
            end
          }
        }
        locationScreen {
          stepName
          heading
          description
          availableLocations {
            label
            address
          }
        }
        confirmationScreen {
          stepName
          heading
          description
        }
        thankYouScreen {
          heading
          content
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
