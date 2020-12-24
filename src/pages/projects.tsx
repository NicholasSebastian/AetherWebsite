import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Projects = ({ data, location }) => {
  const { projects } = data.allMarkdownRemark;

  return (
    <Layout location={location} id="projects">
      <SEO title="Projects" />
      <h3>Projects</h3>
      {projects.length === 0 ? 
      <p>No projects yet.</p> :
      <ul>
        {projects.map((post) => 
          <Link key={post.fields.slug} to={post.fields.slug}>
            <li>
              <Image fluid={post.frontmatter.coverImage?.childImageSharp.fluid || data.blankImage.childImageSharp.fluid} />
              <div>
                <h3>{post.frontmatter.name}</h3>
                <div>{post.frontmatter.description || post.excerpt}</div>
              </div>
            </li>
          </Link>
        )}
      </ul>}
    </Layout>
  );
}

export default Projects;

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
      filter: { fields: { slug: { regex: "/^/projects//" } } }
    ) {
      projects: nodes {
        frontmatter {
          name
          description
          coverImage {
            childImageSharp {
              fluid (maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;
