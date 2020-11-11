import { graphql, PageProps } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React from 'react';
import { Page } from '../common/layout';
import { PageData } from '../custom';
import { AboutContext } from '../features/about/about.context';
import { AboutPage } from '../features/about/about.page';

const About: React.FC<PageProps<PageData>> = ({ data, location }) => (
  <Page {...data.page.header} pathname={location.pathname} hasHeadlineBanner>
    <HelmetDatoCms seo={data.page.seoMetaTags} />
    <AboutContext.Provider value={data.page}>
      <AboutPage />
    </AboutContext.Provider>
  </Page>
);

export default About;

export const aboutPageQuery = graphql`
  query AboutPage {
    page: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      header {
        ...HeaderContent
      }
      _allContentLocales {
        locale
        value {
          id
          image {
            alt
            fluid(maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
          imagePosition
          title
          text
        }
      }
      cta {
        ...CtaContent
      }
    }
  }
`;
