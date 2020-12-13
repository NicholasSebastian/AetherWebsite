import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Spinning cube with WebGL.
// Query for directories in content folder, foreach...

const Index = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Games" />
      <canvas id="spinning-cube" />

    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;