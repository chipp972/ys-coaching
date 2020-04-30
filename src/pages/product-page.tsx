import { graphql } from 'gatsby';
import React from 'react';
import { Page } from '../common/layout';
import { ProductsContext } from '../features/products/products.context';
import { getProductPageContextData } from '../features/products/products.data';
import { ProductsPage } from '../features/products/products.page';

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
      <ProductsContext.Provider value={getProductPageContextData(data)}>
        <ProductsPage />
      </ProductsContext.Provider>
    </Page>
  );
};

export default Products;

export const productPageQuery = graphql`
  query ProductPage {
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
    markdownRemark(frontmatter: { templateKey: { eq: "product-page" } }) {
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
          contribution {
            locationChoiceCustomPlaceLabel
            locationChoiceLabel
            locationChoiceError
            customerPlaceLabel
            customerPlacePlaceholder
            customerPlaceError
          }
          availableLocations {
            label
            address
          }
        }
        confirmationScreen {
          stepName
          heading
          description
          contribution {
            planChoiceLabel
            dateChoiceLabel
            locationChoiceLabel
            validationButtonLabel
            emailLabel
            emailPlaceholder
            firstNameLabel
            firstNamePlaceholder
            lastNameLabel
            lastNamePlaceholder
            additionalInfoLabel
            additionalInfoPlaceholder
            requiredErrorMessage
          }
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
          redirectLink {
            label
            url
            isInternal
          }
          redirectLinkLabel
          redirectLinkUrl
        }
      }
    }
  }
`;
