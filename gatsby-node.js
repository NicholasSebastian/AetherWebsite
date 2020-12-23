const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const projectView = path.resolve(`./src/templates/project-view.jsx`);
  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading markdown`, result.errors);
    return;
  }

  const nodes = result.data.allMarkdownRemark.nodes;
  nodes.forEach(node => {
    const head = node.fields.slug.substring(0, 5);
    const component = 
      head == "/proj" ? projectView : 
      head == "/blog" ? blogPost : 
      null;
      
    createPage({
      path: node.fields.slug,
      component,
      context: {
        id: node.id,
      },
    })
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}