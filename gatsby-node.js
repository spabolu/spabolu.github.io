const path = require('path')
const fs = require("fs")

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/writing/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}

exports.onPreInit = () => {
    if (process.argv[2] === "build") {
      fs.rmdirSync(path.join(__dirname, "docs"), { recursive: true })
      fs.renameSync(
        path.join(__dirname, "public"),
        path.join(__dirname, "public_dev")
      )
    }
  }
  
  exports.onPostBuild = () => {
    fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "docs"))
    fs.renameSync(
      path.join(__dirname, "public_dev"),
      path.join(__dirname, "public")
    )
  }