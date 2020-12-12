import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Experience = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Experience" />
      <h3>Experience</h3>
      <h4>Work</h4>
      <div>
        <section>
          <div>Software Engineer</div>
          <div>PT. Handal Cargo</div>
          <ul>
            <li>
              Designed, programmed, and implemented a custom ERP software for use on 
              desktop computers within the office to manage business activities and 
              maintain data such as on cargo shipping and logistics, sales and 
              transactions, and staff salaries and management. Made with Java AWT/Swing.
            </li>
            <li>
              Developed and implemented a local MySQL database within the office’s 
              network for the ERP software connection and data aggregation.
            </li>
            <li>
              Implemented encryption using DES Symmetric Key Cryptography within the 
              ERP application for security.
            </li>
          </ul>
        </section>
        <section>
          <div>Events Subcommittee</div>
          <div>SIM Information Technology Club</div>
          <div>Singapore Institute of Management</div>
          <ul>
            <li>
              Programmed the club website with HTML, CSS, SCSS and Bootstrap, and 
              JavaScript, and optimized content editing workflow by integrating 
              Prismic headless CMS.
            </li>
            <li>
              Programmed the club’s blog site with Go and Hugo, and optimized the blog 
              team’s publishing workflow by integrating Netlify headless CMS.
            </li>
            <li>
              Wrote and published articles for the club’s weekly tech news.
            </li>
          </ul>
        </section>
      </div>
      <h4>Education</h4>
      <div>
        <section>
          <div>Bachelor of Computer Science, Mobile and Game Development</div>
          <div>University of Wollongong</div>
          <div>SIM, Singapore</div>
        </section>
        <section>
          <div>Certificate of Higher Education in Social Sciences</div>
          <div>University of London</div>
          <div>SIM, Singapore</div>
        </section>
        <section>
          <div>International Baccalaureatte</div>
          <div>Bina Tunas Bangsa International School</div>
          <div>Jakarta, Indonesia</div>
        </section>
      </div>
      <h4>Certifications</h4>
      <div>
        <div>AWS Certified Cloud Practitioner</div>
        <div>IELTS - 8.5/9.0</div>
      </div>
      <h4>Honors and Awards</h4>
      <div>
        <section>
          <div>Shopee Code League</div>
          <div>Certificate of Participation</div>
        </section>
        <section>
          <div>SIM DAC Data Hackathon</div>
          <div>Best Demo and 3rd Place Overall</div>
        </section>
      </div>
    </Layout>
  );
}

export default Experience;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;