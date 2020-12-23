import React from "react"
import { Link, useStaticQuery } from "gatsby"

const Layout = ({ location, children, id }) => {
  const data = useStaticQuery(staticQuery);

  const { title, description, author, social } = data.site.siteMetadata;
  const { github, instagram, linkedin, twitter } = social;
  const posts = data.posts.nodes;

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
        <div>
          <div>
            <h4><span>Content</span></h4>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4><span>Blog</span></h4>
            {posts.length === 0 ? 
            <p>No posts yet.</p> :
            <ul>
              {posts.map(post => 
                <li>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  <small>{post.frontmatter.date}</small>
                </li>
              )}
            </ul>}
          </div>
          <div>
            <h4><span>Twitter</span></h4>
            
          </div>
        </div>
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
        id={id}
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
    posts: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/blog//" } } },
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 5
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`