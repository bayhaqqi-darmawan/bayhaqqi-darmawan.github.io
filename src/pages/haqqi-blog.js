import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const HakiPage = () => {

const data = useStaticQuery(graphql`
  query Images {
    image:
    file(relativePath: {eq: "BZ.png"}) {
      id
      childImageSharp {
        fixed (
          width: 400,
          height: 300) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
console.log(data);

return (
  <Layout>
    <SEO title="Haqqi's Blog" />
    <h1>Bay Haqqi's Blog</h1>
    <Img 
      fixed = {data.image.childImageSharp.fixed}
    />

  </Layout>
)

}

export default HakiPage
