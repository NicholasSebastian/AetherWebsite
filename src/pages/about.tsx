import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Add spotify API to show song currently listening to

const About = ({ data, location }) => {
  const avatar = data.avatar.childImageSharp.fluid;
  const { author, social } = data.site.siteMetadata;
  const { github, linkedin, instagram, twitter } = social;

  return (
    <Layout location={location}>
      <SEO title="About" />
      <h3>About</h3>
      <section>
        <div>
          <h4>Profile</h4>
          <Image fluid={avatar} alt={author.name} />
        </div>
        <div>
          <div>{author.name}</div>
          <div>
            An aspiring software engineer who usually spends time working on personal 
            projects and learning new skills. <br/>
            He's always eager to experience new things and find new ways to leverage 
            and make the most of his skills. <br/>
            He's currently a second year undergraduate student pursuing a computer science 
            degree from the University of Wollongong.
          </div>
          <div>
            <Link to="/experience">Experience</Link>
            <a href="https://drive.google.com/file/d/1Iy3k-mzVJ2L6v8AFNLEAk8b1HfuuTdyJ/view?usp=sharing"
              target="_blank" rel="noopener noreferrer">
              CV / Resume
            </a>
          </div>

          <dl>
            <dt>Twitter</dt>
            <dd><a href={`https://www.twitter.com/${twitter}`}>{twitter}</a></dd>
            <dt>GitHub</dt>
            <dd><a href={`https://www.github.com/${github}`}>{github}</a></dd>
            <dt>Instagram</dt>
            <dd><a href={`https://www.instagram.com/${instagram}`}>{instagram}</a></dd>
            <dt>LinkedIn</dt>
            <dd><a href={`https://www.linkedin.com/in/${linkedin}`}>{linkedin}</a></dd>
          </dl>
        </div>
      </section>
      <section>
        <h4>Skills</h4>
        <dl>
          <dt>Languages</dt>
          <dd>JavaScript, TypeScript, C#, Java, Python</dd>
          <dt>Front End Development</dt>
          <dd>HTML, CSS, Sass and SCSS, Bootstrap, React, Gatsby.js, Next.js, jQuery, Blazor WebAssembly, WebGL {'('}Three.js, Pixi.js{')'}, GSAP</dd>
          <dt>Back End Development</dt>
          <dd>Node.js, Express, ASP.NET Core, GraphQL</dd>
          <dt>Databases</dt>
          <dd>MySQL, MongoDB</dd>
          <dt>Mobile Development</dt>
          <dd>React Native, Ionic/Capacitor, Xamarin</dd>
          <dt>Game Development</dt>
          <dd>Unity Engine, MonoGame, LibGDX, PyGame, OpenGL {'('}OpenTK, LWJGL{')'}</dd>
          <dt>Desktop Development</dt>
          <dd>Electron, AWT/Swing, GtkSharp</dd>
          <dt>Others</dt>
          <dd>
            Git, Unix and Windows Shell, Adobe Photoshop, Blender, Adobe XD / Figma,  
            Google Suite / Microsoft Office
          </dd>
        </dl>
      </section>
    </Layout>
  );
}

export default About;

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
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
`;