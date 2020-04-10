import React from "react"
import JumboZee from "../components/jumbo-zee"
import { Container, Row, Col } from "reactstrap"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const ZiyahPage = () => {

  const data1 = useStaticQuery(graphql`
  query ImagesOfSeries {
    image1:
    file(relativePath: {eq: "friends1.jpg"}) {
      id
      childImageSharp {
        fixed (
          width: 300,
          height: 250) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2:
    file(relativePath: {eq: "friends2.jpg"}) {
      id
      childImageSharp {
        fixed (
          width: 300,
          height: 250) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
  <Layout>
    <SEO title="Aziyah's Blog" />
    <JumboZee />

    <Container className="lead">
      <Row>
        <Col>
          <p>Posted by Aziyah on 1st April 2020</p>
        </Col>
      </Row>

      <Row lg="1" xs="1">
        <Col>
        <p className="title">
          1. Friends
        </p>
        </Col>

        <Col>
        <p>
          This American sitcom television series has 10 seasons in total. Each season contains around 20 episodes each. An episode lasts for half an hour. Why I’d recommend this show is because it is a mixture of comedy and also romance, I am a big fan of both. This show has six main actor and actresses, each having their own identity in the show. These main characters are close friends that happen to be around each other since forever but little that they know one day almost everything was going to change. Also being around each other for so long made them have flings among themselves which made things complicated and dramatic as they’re very close friends.
        </p>
        
        </Col>

        </Row>

        <Row lg="2" xs="1">
          <Col>
            <Img 
              fixed = {data1.image1.childImageSharp.fixed}
            />
          </Col>

          <Col>
          <Img 
              fixed = {data1.image2.childImageSharp.fixed}
            />
          </Col>
        </Row>

        
      

      
    </Container>
  </Layout>
)
}

export default ZiyahPage
