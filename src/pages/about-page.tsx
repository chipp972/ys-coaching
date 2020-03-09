import React from 'react';
import { graphql } from 'gatsby';
import { Page, HTMLContent } from '../common/layout';
import { AboutPage } from '../features/about/about.page';

type Props = {
  location: {pathname: string};
  data: any;
};

const About: React.FC<Props> = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Page pathname={location.pathname}>
      <AboutPage
        ContentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        mainImage={post.frontmatter.mainImage}
        content={post.html}
      />
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
        part1
        part2
        link {
          text
          url
        }
        mainImage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
