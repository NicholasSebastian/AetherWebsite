import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ProjectViewTemplate = ({ data, location }) => {
  const blankImage = data.blankImage.childImageSharp.fluid;
  const post = data.markdownRemark;
  const { title, description, date, featuredImage } = post.frontmatter;

  return (
    <Layout location={location} id="project-view">
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

export default ProjectViewTemplate;

export const pageQuery = graphql`
  query ProjectViewBySlug(
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
        name
        description
        coverImage {
          childImageSharp {
            fluid (maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
