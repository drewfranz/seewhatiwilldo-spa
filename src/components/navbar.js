/**
 * Navbar component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 
 const NavBar = () => {
    const data = useStaticQuery(graphql`
      query NavBarQuery {
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
    const social = data.site.siteMetadata?.social
 
   return (
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    {/* <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about">About</a></li> */}
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href={`https://www.facebook.com/${social?.facebook}`}>Facebook</a></li>
                    {/* <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="contact">Contact</a></li> */}
                </ul>
            </div>
        </div>
    </nav>
   )
 }
 
 export default NavBar
 