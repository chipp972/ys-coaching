import { graphql, PageProps } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React from 'react';
import { Page } from '../common/layout';
import { PageData } from '../custom';
import { ProductsContext } from '../features/products/products.context';
import { ProductsPage } from '../features/products/products.page';
import { reducerKey as carouselId } from '../features/products/state/products.constant';

const Products: React.FC<PageProps<PageData>> = ({ data, location }) => (
  <Page {...data.page.header} pathname={location.pathname} hasHeadlineBanner>
    <HelmetDatoCms seo={data.page.seoMetaTags} />
    <ProductsContext.Provider value={{ carouselId, steps: data.page.steps }}>
      <ProductsPage />
    </ProductsContext.Provider>
  </Page>
);

export default Products;

export const productPageQuery = graphql`
  query ProductPage {
    page: datoCmsProductPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      header {
        ...HeaderContent
      }
      steps {
        _allContentLocales {
          locale
          value {
            ... on DatoCmsPlanStep {
              id
              model {
                apiKey
              }
              plans {
                id
                title
                description
                category {
                  id
                }
                image {
                  alt
                  fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
                    ...GatsbyDatoCmsSizes
                  }
                }
                benefits
                price
                frequency
              }
            }
            ... on DatoCmsDateTimeStep {
              id
              model {
                apiKey
              }
              timeslots {
                id
                startDate
                endDate
              }
            }
            ... on DatoCmsLocationStep {
              id
              model {
                apiKey
              }
              customPlaceError
              customPlaceLabel
              customPlacePlaceholder
              locationChoiceCustomPlaceLabel
              locationChoiceError
              locationChoiceLabel
              locations {
                id
                label
                geolocation {
                  latitude
                  longitude
                }
              }
            }
            ... on DatoCmsConfirmationStep {
              id
              model {
                apiKey
              }
              dateChoiceLabel
              emailLabel
              emailPlaceholder
              errorMessageNotSent
              firstnamePlaceholder
              firstnameLabel
              lastnameLabel
              lastnamePlaceholder
              locationChoiceLabel
              messageLabel
              messagePlacholder
              planChoiceLabel
              requiredFieldErrorMessage
              validationButtonLabel
            }
            ... on DatoCmsThankYouStep {
              id
              model {
                apiKey
              }
              image {
                alt
                fluid(maxWidth: 2048, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
              redirectLink {
                label
                url
                isInternal
              }
            }
          }
        }
        _allTitleLocales {
          value
          locale
        }
        _allNameLocales {
          locale
          value
        }
        _allDescriptionLocales {
          locale
          value
        }
        id
        position
      }
    }
  }
`;
