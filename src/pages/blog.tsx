import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog = ({ data, location }) => {
  const { posts } = data.allMarkdownRemark;

  return (
    <Layout location={location} id="blog">
      <SEO title="Blog" />
      <h3>Posts</h3>
      {posts.length === 0 ? 
      <p>No posts yet.</p> :
      <ul>
        {posts.map((post, i: number) => 
          <Link key={i} to={post.fields.slug}>
            <li style={{ zIndex: -i }}>
              <Image fluid={post.frontmatter.featuredImage?.childImageSharp.fluid || data.blankImage.childImageSharp.fluid} />
              <small>{post.frontmatter.date}</small>
              <h3>{post.frontmatter.title}</h3>
              <div>{post.frontmatter.description || post.excerpt}</div>
            </li>
          </Link>
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
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/blog//" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
        excerpt
        timeToRead
        fields {
          slug
        }
      }
    }
  }
`;
