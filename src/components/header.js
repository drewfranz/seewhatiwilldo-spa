import * as React from "react";

import Background from "../images/header.jpeg"

const Header = ({title}) => {
    let sectionStyle = {
        backgroundImage: `url(${Background})`
    }

    return (
        <header className="masthead" style={sectionStyle}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <span className="subheading">A safe place where people can learn and ask questions about Autism.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;