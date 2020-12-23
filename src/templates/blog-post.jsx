import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, location }) => {
  const blankImage = data.blankImage.childImageSharp.fluid;
  const post = data.markdownRemark;
  const { title, description, date, featuredImage } = post.frontmatter;

  return (
    <Layout location={location} id="blog-post">
      <SEO
        title={title}
        description={description || post.excerpt}
      />
      <article>
        <header>
          <Image fluid={featuredImage?.childImageSharp.fluid || blankImage} />
          <div>
            <span>{date}</span>
            <h1>{title}</h1>
          </div>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    blankImage: file(absolutePath: { regex: "/no-image.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid (maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
