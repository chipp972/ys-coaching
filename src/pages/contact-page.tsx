import { graphql } from 'gatsby';
import React from 'react';
import { HTMLContent, Page } from '../common/layout';
import { ContactContext, getContactPageContextData } from '../features/contact/contact.context';
import { ContactPage } from '../features/contact/contact.page';

const Contact: React.FC<PageProps> = ({ data, location }) => {
  const { title, subtitle, image } = data.markdownRemark.frontmatter;
  return (
    <Page
      pathname={location.pathname}
      title={title}
      subtitle={subtitle}
      image={image}
      hasHeadlineBanner>
      <ContactContext.Provider value={getContactPageContextData(data)}>
        <ContactPage ContentComponent={HTMLContent} />
      </ContactContext.Provider>
    </Page>
  );
};

export default Contact;

export const contactPageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      html
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
        contribution {
          validationButtonLabel
          emailLabel
          emailPlaceholder
          firstNameLabel
          firstNamePlaceholder
          lastNameLabel
          lastNamePlaceholder
          messageLabel
          messagePlaceholder
          requiredErrorMessage
          successMessageSent
          errorMessageNotSent
        }
        redirectLink {
          label
          url
          isInternal
        }
        successRedirectLink {
          label
          url
          isInternal
        }
      }
    }
  }
`;
