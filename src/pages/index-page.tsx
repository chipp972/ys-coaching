import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from '../common/helpers/gatsby';
import { Page } from '../common/layout';
import { getHomePageContextData, HomeContext } from '../features/home/home.context';
import { HomePage } from '../features/home/home.page';

type Props = {
  location: {pathname: string};
  data: {
    markdownRemark: {
      frontmatter: {
        image: GatsbyImage;
        title: string;
        heading: string;
        subheading: string;
        mainpitch: any;
        description: string;
        intro: any;
      };
    };
  };
};

const Home: React.FC<Props> = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <Page pathname={location.pathname} title={title}>
      <HomeContext.Provider value={getHomePageContextData(data)}>
        <HomePage
          image={frontmatter.image}
          title={title}
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
          mainpitch={frontmatter.mainpitch}
          description={frontmatter.description}
          intro={frontmatter.intro}
        />
      </HomeContext.Provider>
    </Page>
  );
};

export default Home;

export const pageQuery = graphql`
  query IndexPageTemplate {
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
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
          heading
          description
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
