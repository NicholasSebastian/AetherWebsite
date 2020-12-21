import React, { useRef, useEffect } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Spinning cube with WebGL.
// Query for directories in content folder, foreach...

const Games = ({ data, location }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("webgl");
    renderCube(context);
  }, []);

  return (
    <Layout location={location}>
      <SEO title="Games" />
      <canvas ref={canvasRef} width={450} height={450} />

    </Layout>
  );
}

export default Games;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

function renderCube(context: WebGLRenderingContext) {

}