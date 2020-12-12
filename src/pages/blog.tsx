import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location}>
      <SEO title="All posts" />
      {posts.length === 0 ? 
      <p>No posts yet.</p> :
      <ul>
        {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <li key={post.fields.slug}>
            <article>
              <header>
                <Link to={post.fields.slug}>{title}</Link>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
              <p dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
                }}
              />
              </section>
            </article>
          </li>
        );
        })}
      </ul>}
    </Layout>
  );
}

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;