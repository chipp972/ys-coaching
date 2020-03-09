/* eslint-env node */
const R = require('ramda');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const toKebabCase = (str) => str
  ? str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
  : str;

// eslint-disable-next-line
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      // eslint-disable-next-line no-console
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts
      .filter((edge) => edge.node.frontmatter.templateKey)
      .forEach((edge) => {
        const { id } = edge.node;
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/pages/${String(edge.node.frontmatter.templateKey)}.tsx`
          ),
          // additional data can be passed via context
          context: {
            id
          }
        });
      });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (R.hasPath(['node', 'frontmatter', 'tags'], edge)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = R.uniq(tags);

    // Make tag pages
    return tags.forEach((tag) => {
      const tagPath = `/tags/${toKebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve('src/pages/tags.tsx'),
        context: {
          tag
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // convert image paths for gatsby images
  fmImagesToRelative(node);

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value
    });
  }
};
