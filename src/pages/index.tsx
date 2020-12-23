import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Index = ({ data, location }) => {
  return (
    <Layout location={location} id="index">
      <SEO title="Home" />
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
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