import { graphql, PageProps } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React from 'react';
import { Page } from '../common/layout';
import { HomeParallax } from '../features/home/components/HomeParallax';
import { HomeContext, HomePageProps } from '../features/home/home.context';
import { HomePage } from '../features/home/home.page';

const Home: React.FC<PageProps<HomePageProps>> = ({ data, location }) => (
  <Page pathname={location.pathname}>
    <HelmetDatoCms seo={data.page.seoMetaTags} />
    <HomeParallax {...data.page.header} mainCta={data.page.mainCta} />
    <HomeContext.Provider value={data.page}>
      <HomePage />
    </HomeContext.Provider>
  </Page>
);

export default Home;

export const pageQuery = graphql`
  query IndexPageTemplate {
    page: datoCmsHomePage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      header {
        ...HeaderContent
      }
      mainCta {
        ...CtaContent
      }
      _allHomeSectionLocales {
        locale
        value {
          ... on DatoCmsTitleSection {
            id
            model {
              apiKey
            }
            title
            titleBackground {
              hex
            }
          }
          ... on DatoCmsTextSection {
            id
            model {
              apiKey
            }
            ctaPosition
            cta {
              ...CtaContent
            }
            image {
              alt
              fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
              }
            }
            imagePosition
            maxImageHeight
            text
            textPosition
            theme
          }
          ... on DatoCmsCardSection {
            id
            model {
              apiKey
            }
            cards {
              id
              _allTextLocales {
                locale
                value
              }
              _allTitleLocales {
                locale
                value
              }
              image {
                alt
                fluid(maxWidth: 240, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
              cardType
            }
            cta {
              ...CtaContent
            }
            image {
              alt
              fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
              }
            }
            imagePosition
            text
          }
        }
      }
    }
  }
`;
