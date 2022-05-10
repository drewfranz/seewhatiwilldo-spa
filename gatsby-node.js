
const path = require('path');
exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions

  const articleResult = await graphql(`
    {
      articles: allNodeArticle {
        edges {
          node {
            id
            title
            path {
              alias
            }
          }
        }
      }
    }
  `)

  articleResult.data.articles.edges.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        ArticleId: node.id,
      }
    })
  })
}

// exports.onCreateNode = ({ node, actions}) => {
//   const { createNodeField } = actions
//   if (node.internal.type === 'node__article') {
//     const slug = `${node.path.alias}`
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }