/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            facebook
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpeg"
        width={150}
        height={150}
        quality={95}
        alt="Profile picture"
      /> */}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>
          <br />
          <a href={`https://www.facebook.com/${social?.facebook}`}>Follow our page on Facebook.</a>
        </p>
      )}
    </div>
  )
}

export default Bio
