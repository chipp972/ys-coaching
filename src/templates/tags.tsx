import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { Page } from '../common/layout';

const PostLink = ({
  node: {
    fields: { slug },
    frontmatter: { title }
  }
}) => (
  <li>
    <Link to={slug}>
      <h2 className="is-size-2">{title}</h2>
    </Link>
  </li>
);

const TagRoute = ({
  data: {
    allMarkdownRemark: { edges: posts, totalCount },
    site: {
      siteMetadata: { title }
    }
  },
  pageContext: { tag }
}) => {
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`;

  return (
    <Page pathname="/blog">
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}>
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <ul className="taglist">
                {posts.map((post) => (
                  <PostLink key={post.node.fields.slug} {...post} />
                ))}
              </ul>
              <p>
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
