import { graphql } from 'gatsby';
import React from 'react';
import { Page } from '../common/layout';
import { getHomePageContextData, HomeContext } from '../features/home/home.context';
import { HomePage } from '../features/home/home.page';

type Props = {
  location: {pathname: string};
  data: {
    markdownRemark: {
      frontmatter: any;
    };
    allMarkdownRemark: any;
  };
};

const Home: React.FC<Props> = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <Page pathname={location.pathname} title={title}>
      <HomeContext.Provider value={getHomePageContextData(data)}>
        <HomePage />
      </HomeContext.Provider>
    </Page>
  );
};

export default Home;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(filter: {frontmatter: {dataKey: {eq: "home-sections"}}}) {
      edges {
        node {
          html
          frontmatter {
            title
            isTitleVisible
            theme
            cta {
              label
              url
              isInternal
            }
            sectionImage {
              title
              alt
              position
              image {
                id
              }
            }
            cards {
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
              text
              title
              type
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        mainCta {
          label
          url
          isInternal
        }
        sections {
          section
        }
      }
    }
  }
`;
