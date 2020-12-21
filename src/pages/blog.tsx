import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog = ({ data, location }) => {
  const { posts } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      {posts.length === 0 ? 
      <p>No posts yet.</p> :
      <ul>
        {posts.map(post => 
          <li key={post.fields.slug}>
            <Image fluid={post.frontmatter.featuredImage?.childImageSharp.fluid || data.blankImage.childImageSharp.fluid} />
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            <small>{post.frontmatter.date}</small>
            <div>{post.frontmatter.description || post.excerpt}</div>
          </li>
        )}
      </ul>}
    </Layout>
  );
}

export default Blog;

export const pageQuery = graphql`
  query {
    blankImage: file(absolutePath: { regex: "/no-image.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              fluid (maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
        timeToRead
      }
    }
  }
`;
