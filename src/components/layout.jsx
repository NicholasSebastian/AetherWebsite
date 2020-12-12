import React from "react"
import { Link, useStaticQuery } from "gatsby"

// Add navbar functionality and media queries
// Add pages nav to footer
// Add notes feed to footer
// Add blog feed to footer

const Layout = ({ location, children }) => {
  const data = useStaticQuery(staticQuery);

  const { title, description, author, social } = data.site.siteMetadata;
  const { email, github, instagram, linkedin, twitter } = social;

  const Header = () => 
    <header id="header-nav">
      <Link to="/">
        <div>{title}</div>
        <div>{title} by {author.name} - {description}</div>
      </Link>
      <div>Nav here</div>
    </header>

  const Footer = () => 
    <footer id="footer">
      <div>
        {location.pathname === "/" ? 
        <a href="#">Home</a> :
        <Link to ="/">Home</Link>}
      </div>
      <div>
        <div>
          <div>{title} by {author.name} - {description}</div>
          <dl>
            <dt>Follow me</dt>
            <dd>
              <a href={`https://www.linkedin.com/in/${linkedin}`}>LinkedIn</a>/
              <a href={`https://www.github.com/${github}`}>GitHub</a>
            </dd>
            <dt>Private</dt>
            <dd>
              <a href={`https://www.instagram.com/${instagram}`}>Instagram</a>/
              <a href={`https://www.twitter.com/${twitter}`}>Twitter</a>
            </dd>
          </dl>
        </div>
        <a href={`mailto:${email}`}>Contact Me</a>
        <div>Copyright © {author.name}. All rights reserved.</div>
      </div>
    </footer>

  return (
    <>
      <Header />
      <main 
        id={location.pathname.substr(1) || "index"}
        className="main-container">
          {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout

const staticQuery = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
        }
        social {
          email
          github
          instagram
          linkedin
          twitter
        }
      }
    }
  }
`