import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`
        const blogPath = `${__PATH_PREFIX__}/blog`
        let header

        if (location.pathname === rootPath || location.pathname === blogPath) {
            header = (
                <h1
                    style={{
                        ...scale(1),
                        marginBottom: rhythm(1.5),
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
                </h1>
            )
        } else {
            header = (
                <h3
                    style={{
                        fontFamily: `Montserrat, sans-serif`,
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
                <header>{header}</header>
                <main>{children}</main>
                <footer>
                    {/* © {new Date().getFullYear()}, Built with */}
                    <a
                        href="http://github.com/yirichie"
                        target="_blank"
                        rel="noopener"
                    >
                        github
                    </a>
                    <span style={{ margin: `0 1em` }}>|</span>
                    <a
                        href="https://www.linkedin.com/in/yirichie/"
                        target="_blank"
                        rel="noopener"
                    >
                        linkedin
                    </a>
                </footer>
            </div>
        )
    }
}

export default Layout
