import React, { useRef, useEffect } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import renderCube from "../webgl/rotatingCube";

// https://tympanus.net/codrops/2013/08/27/3d-shading-with-box-shadows/

const Games = ({ data, location }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    renderCube(canvas);
  }, []);

  return (
    <Layout location={location} id="games">
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