import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Page, HTMLContent } from '../common/layout';
import { BlogPost } from '../features/blog/blog.page';

type Props = {
  location: {pathname: string};
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        tags: string[];
        title: string;
        description: string;
      };
    };
  };
};

const Blog: React.FC<Props> = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Page pathname={location.pathname}>
      <BlogPost
        content={post.html}
        ContentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Page>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogPostByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;