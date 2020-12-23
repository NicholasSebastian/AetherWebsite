import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Notes = ({ data, location }) => {
  const { notes } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <SEO title="Notes" />
      <h3>Notes</h3>
      {notes.length === 0 ? 
      <p>No notes yet.</p> :
      <ul>
        {notes.map((note, i: number) => 
          <Link key={i} to={note.fields.slug}>
            <li style={{ zIndex: -i }}>
              <h3>{note.frontmatter.title}</h3>
              <div>{note.frontmatter.description || note.excerpt}</div>
            </li>
          </Link>
        )}
      </ul>}
    </Layout>
  );
}

export default Notes;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/notes//" } } }
    ) {
      notes: nodes {
        frontmatter {
          title
          description
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;
