import React from "react"
import { Link, useStaticQuery } from "gatsby"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(staticQuery);

  const { title, description, author, social } = data.site.siteMetadata;
  const { github, instagram, linkedin, twitter } = social;

  const Header = () => 
    <header id="header-nav">
      <Link to="/">
        <div>{title}</div>
        <div>{title} by {author.name} - {description}</div>
      </Link>
      <div>
        <input type="checkbox" />
        <nav>
          <div>{title}</div>
          <div>{title} by {author.name} - {description}</div>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/games">Games</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
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
        <Link to="/contact">Contact Me</Link>
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
          github
          instagram
          linkedin
          twitter
        }
      }
    }
  }
`