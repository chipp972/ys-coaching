import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '../common/layout';
import { HomePage } from '../features/home/home.page';
import { GatsbyImage } from '../helpers/gatsby';

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

  return (
    <Page pathname={location.pathname}>
      <HomePage
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Page>
  );
};

export default Home;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
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
      }
    }
  }
`;
