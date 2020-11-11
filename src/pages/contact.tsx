import { graphql, PageProps } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React from 'react';
import { Page } from '../common/layout';
import { PageData } from '../custom';
import { ContactContext } from '../features/contact/contact.context';
import { ContactPage } from '../features/contact/contact.page';

const Contact: React.FC<PageProps<PageData>> = ({ data, location }) => (
  <Page {...data.page.header} pathname={location.pathname} hasHeadlineBanner>
    <HelmetDatoCms seo={data.page.seoMetaTags} />
    <ContactContext.Provider value={data.page}>
      <ContactPage />
    </ContactContext.Provider>
  </Page>
);

export default Contact;

export const contactPageQuery = graphql`
  query ContactPage {
    page: datoCmsContactPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      header {
        ...HeaderContent
      }
      _allContentLocales {
        locale
        value
      }
      messageLabel
      messagePlaceholder
      requiredFieldErrorMessage
      successMessageSent
      validationButtonLabel
      lastnameLabel
      lastnamePlaceholder
      firstnamePlaceholder
      firstnameLabel
      errorMessageNotSent
      emailPlaceholder
      emailLabel
      successCta {
        ...CtaContent
      }
      mailCta {
        ...CtaContent
      }
    }
  }
`;
