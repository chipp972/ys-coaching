import { graphql } from 'gatsby';
import React from 'react';
import { HTMLContent, Page } from '../common/layout';
import { AboutContext } from '../features/about/about.context';
import { AboutPage } from '../features/about/about.page';

type Props = {
  location: { pathname: string };
  data: any;
};

const About: React.FC<Props> = ({ data, location }) => {
  const { markdownRemark } = data;
  const { title, subtitle, image } = markdownRemark.frontmatter;
  const context = {
    ...markdownRemark.frontmatter,
    content: markdownRemark.html
  };

  return (
    <Page
      pathname={location.pathname}
      title={title}
      subtitle={subtitle}
      image={image}
      hasHeadlineBanner>
      <AboutContext.Provider value={context}>
        <AboutPage ContentComponent={HTMLContent} />
      </AboutContext.Provider>
    </Page>
  );
};

export default About;

export const aboutPageQuery = graphql`
  query AboutPage($id: String) {
    markdownRemark(id: { eq: $id }) {
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
        redirectLink {
          label
          url
          isInternal
        }
      }
    }
  }
`;
