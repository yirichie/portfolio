import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`
        const blogPath = `${__PATH_PREFIX__}/blog`
        let header

        // if (location.pathname === rootPath || location.pathname === blogPath) {
        if (true) {
            header = (
                // <h1
                <h3
                    style={{
                        ...scale(1),
                        fontFamily: `Montserrat, sans-serif`,
                        // marginBottom: rhythm(1.5),
                        marginBottom: 0,
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                    {/* </h1> */}
                </h3>
            )
        } else {
            header = (
                <h3
                    style={{
                        fontFamily: `Montserrat, sans-serif`,
                        marginBottom: 0,
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h3>
            )
        }
        return (
            <div
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
            >
                <header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: rhythm(1.5),
                    }}
                >
                    {header}
                    <div />
                </header>
                <main>{children}</main>
                <footer>
                    {/* © {new Date().getFullYear()}, Built with */}
                    <Link to="/">home</Link>
                    <span style={{ margin: `0 1em` }}>|</span>
                    <Link to="/projects">projects</Link>
                    <span style={{ margin: `0 1em` }}>|</span>
                    <a
                        href="http://github.com/yirichie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                    <span style={{ margin: `0 1em` }}>|</span>
                    <a
                        href="https://www.linkedin.com/in/yirichie/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin
                    </a>
                </footer>
            </div>
        )
    }
}

export default Layout
