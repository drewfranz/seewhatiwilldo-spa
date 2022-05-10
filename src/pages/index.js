import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = (props) => {
  const { title } = props.data.site.siteMetadata
  const { allNodeArticle } = props.data

  return (
    <Layout title={title}>
      <Seo title="All posts" />
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          {allNodeArticle.edges.map(edge => {
            return (
              <div key={edge.node.id}>
                <article
                  className="post-preview"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={edge.node.path?.alias} itemProp="url">
                        <span itemProp="headline">{edge.node.title}</span>
                      </Link>
                    </h2>
                    <small>{edge.node.created}</small>
                  </header>
                  <section>
                  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, width: `100%` }}>
                    <Img fluid={ edge.node.relationships.field_image?.localFile?.childImageSharp.fluid } />
                  </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: edge.node.body.value.split(' ').splice(0, 75).join(' ') + '...'}}
                      itemProp="description"
                    />
                  </section>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          name
        }
        siteUrl
        social {
          facebook
        }
      }
    }
    allNodeArticle(sort: {fields: [created], order: DESC}) {
      edges {
        node {
          id
          path {
            alias
          }
          title
          body {
            value
          }
          created(formatString: "MMM DD, YYYY")
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`