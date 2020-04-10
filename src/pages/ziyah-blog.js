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
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2:
    file(relativePath: {eq: "friends2.jpg"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3:
    file(relativePath: {eq: "sab1.jpg"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4:
    file(relativePath: {eq: "sab2.jpg"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image5:
    file(relativePath: {eq: "revenge1.jpg"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image6:
    file(relativePath: {eq: "revenge2.jpg"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image7:
    file(relativePath: {eq: "dev1.jpg"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image8:
    file(relativePath: {eq: "dev2.jpg"}) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp
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
              fluid = {data1.image1.childImageSharp.fluid}
            />
          </Col>
          <Col>
          <Img 
              fluid = {data1.image2.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row lg="1" xs="1">
        <Col>
        <p className="title">
          2. Switched at birth
        </p>
        </Col>
        <Col>
        <p>
        This American series family drama premiered in 2011. Each episode is an hour long or less but trust me it is definitely worth every second! This show revolves around two teenagers born on the same day but was accidentally switched between their families by an overworked nurse. I’d recommend this show to those interested in sign language as this show includes a deaf female character that plays as one of the switched teen. What I love most about this show is how it is able to change my point of view or my perspective about people with hearing loss.
        </p>
        </Col>
        </Row>
        <Row lg="2" xs="1">
          <Col>
            <Img 
              fluid = {data1.image3.childImageSharp.fluid}
            />
          </Col>
          <Col>
          <Img 
              fluid = {data1.image4.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row lg="1" xs="1">
        <Col>
        <p className="title">
          3. Revenge
        </p>
        </Col>
        <Col>
        <p>
        This television series was inspired by a novel named The Count of Monte Cristo. This show I’d recommend for those who love mysteries and thrill because this show is considered dark. This show is about a young woman whose father was framed for treason by a wealthy family. After being in a juvenile correctional facility, she now returns to get revenge on those who wronged her and her father. 
        </p>
        </Col>
        </Row>
        <Row lg="2" xs="1">
          <Col>
            <Img 
              fluid = {data1.image5.childImageSharp.fluid}
            />
          </Col>
          <Col>
          <Img 
              fluid = {data1.image6.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row lg="1" xs="1">
        <Col>
        <p className="title">
          4. Devious Maids
        </p>
        </Col>
        <Col>
        <p>
        Four Latina maids working for the area’s wealthiest and most powerful families discover secrets, mysteries and even crimes hidden behind these families. With a touch of romance and comedy, this show is very entertaining to watch throughout all four of the seasons. Each episode is almost an hour long filled with various events happening but is definitely fun to keep up with the drama and the gossips between the maids.
        </p>
        </Col>
        </Row>
        <Row lg="2" xs="1">
          <Col>
            <Img 
              fluid = {data1.image7.childImageSharp.fluid}
            />
          </Col>
          <Col>
          <Img 
              fluid = {data1.image8.childImageSharp.fluid}
            />
          </Col>
        </Row>
    </Container>
  </Layout>
)
}

export default ZiyahPage
