import * as React from "react"

import NavBar from "../components/navbar"
import Header from "./header"

const Layout = ({title, children }) => {

  return (
    <div className="global-wrapper">
      <NavBar />
      <Header title={title} />
      <div className="container px-4 px-lg-5">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
