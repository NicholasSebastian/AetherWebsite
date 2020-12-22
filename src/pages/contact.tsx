import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

// TODO: replace the placeholder text
// TODO: contact form functionality

const Contact = ({ data, location }) => {
  const { email } = data.site.siteMetadata.social;

  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <h3>Contact</h3>
      <section>
        <p>For inquiries, suggestions, or requests, please use the email below or the contact form to the side.</p>
        <h5>Email</h5>
        <a href={email}>{email}</a>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, rem.</span>
        <h5>Notes</h5>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem quidem consequuntur omnis, sint saepe modi, impedit sit officiis laudantium id quasi aut eveniet inventore ducimus possimus incidunt tempore reiciendis!</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem quidem consequuntur omnis, sint saepe modi, impedit sit officiis laudantium id quasi aut eveniet inventore ducimus possimus incidunt tempore reiciendis!</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem quidem consequuntur omnis, sint saepe modi, impedit sit officiis laudantium id quasi aut eveniet inventore ducimus possimus incidunt tempore reiciendis!</li>
        </ul>
      </section>
      <section>
        <form>
          <label>
            Name
            <input type="text" name="name"></input>
          </label>
          <label>
            Email Address
            <input type="email" name="email"></input>
          </label>
          <label>
            Subject
            <input type="text" name="subject"></input>
          </label>
          <label>
            Message
            <textarea name="message"></textarea>
          </label>
          <div>
            <label>
              <input type="checkbox" name="confirm"></input>
              Please recheck and confirm your message before sending.
            </label>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </Layout>
  );
}

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          email
        }
      }
    }
  }
`;