import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="JavaScript and React Projects" />
        <a
          href="https://dreamnintendo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dream Nintendo
        </a>
        <p>
          A blog dedicated to bringing you the latest and greatest Nintendo
          Switch news.
        </p>
      </Layout>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
