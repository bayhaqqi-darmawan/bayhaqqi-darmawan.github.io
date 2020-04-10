import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import JumboHaki from "../components/jumbo-haki"
import { Container, Row, Col } from "reactstrap"

const HakiPage = () => {

const data = useStaticQuery(graphql`
  query ImagesOfFood {
    image:
    file(relativePath: {eq: "1.jpg"}) {
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
    image2:
    file(relativePath: {eq: "2.jpeg"}) {
      id
      childImageSharp {
        fixed (
          height: 250) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3:
    file(relativePath: {eq: "3.jpg"}) {
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
    image4:
    file(relativePath: {eq: "4.jpg"}) {
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
    image5:
    file(relativePath: {eq: "5.jpg"}) {
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
    image6:
    file(relativePath: {eq: "6.jpg"}) {
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
    image7:
    file(relativePath: {eq: "7.jpg"}) {
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
    image8:
    file(relativePath: {eq: "8.jpg"}) {
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
    image9:
    file(relativePath: {eq: "9.jpg"}) {
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
    image10:
    file(relativePath: {eq: "10.jpg"}) {
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
    <JumboHaki />
<Container className="lead">
      <Row>
        <Col>
          <p>Posted by Bay Haqqi on 1st April 2020</p>
        </Col>
      </Row>

      <Row lg="1" xs="1">
        <Col>
        <p className="title">
          1. The best Nasi Katok
        </p>
        </Col>

        <Col>
        <p>
        Kaka Restaurant has the best nasi katok in my opinion. It lacks in a way but other than that it is incomparable. It has a very crispy skinned fried and juicy chicken and is accompanied with a plentiful and delicious ‘sambal’ in two flavors, spicy and regular. The nasi katok at kaka restaurant retails for $1 like any other nasi katoks.
        </p>
        
        </Col>

        </Row>

        <Row lg="2" xs="1">
          <Col>
            <Img 
              fluid = {data.image.childImageSharp.fluid}
            />
          </Col>

          <Col>
          <Img 
              fluid = {data.image2.childImageSharp.fluid}
            />
          </Col>
        </Row>
        
        <br></br>
        <br></br>
        <Row lg="1" xs="1">
        <Col>
        <p className="title">
          2. The best Buttermilk Chicken
        </p>
        </Col>

        <Col>
        <p>
        There are a lot of delicious buttermilk chicken recipes everywhere but which stands out to me the most is the buttermilk chicken at De’olde Cottage in Kiulap. The chicken is perfectly cut into bite sizes and then fried with a crunchy batter. After that, it is mixed with a flavorful buttermilk sauce that portions the dish equally. 
        </p>
        
        </Col>

        </Row>

        <Row lg="2" xs="1">
          <Col>
            <Img 
              fluid = {data.image3.childImageSharp.fluid}
            />
          </Col>

          <Col>
          <Img 
              fluid = {data.image4.childImageSharp.fluid}
            />
          </Col>
        </Row>

        <br></br>
        <br></br>
        <Row lg="1" xs="1">
        <Col>
        <p className="title">
          3. A tasty and yet affordable Kolo Mee
        </p>
        </Col>

        <Col>
        <p>
        Kolomee Seria at Sumbangsih is definitely worth your $2, in fact the taste is worth more than that. It gets more delicious everytime you eat it. I personally cannot get over it because it fills my stomach very well. The kolomee has a classic thick sauce filled with flavor that companies the noodle well. It is also topped with minced chicken, eggs and vegetables.
        </p>
        
        </Col>

        </Row>

        <Row lg="2" xs="1">
          <Col>
            <Img 
              fluid = {data.image5.childImageSharp.fluid}
            />
          </Col>

          <Col>
          <Img 
              fluid = {data.image6.childImageSharp.fluid}
            />
          </Col>
        </Row>
        
        <br></br>
        <br></br>
        <Row lg="1" xs="1">
        <Col>
        <p className="title">
          4. Delicious Indonesian Ayam Bakar
        </p>
        </Col>

        <Col>
        <p>
        Bali Paradise has the best ayam bakar with very great soup on the side with a peppery taste but is very delicious. The ayam bakar is seasoned to perfection and grilled afterwards to give it a smoky taste. The char and smokiness from the caramelized skin and the sweet aromatic spices, the distinctive taste of sweet soy sauce all complimented with a mound of steamed white rice to complete the dish perfectly.      
        </p>
        
        </Col>

        </Row>

        <Row lg="2" xs="1">
          <Col>
            <Img 
              fluid = {data.image7.childImageSharp.fluid}
            />
          </Col>

          <Col>
          <Img 
              fluid = {data.image8.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row lg="1" xs="1">
        <Col>
        <p className="title">
          5. Great Carbonara
        </p>
        </Col>

        <Col>
        <p>
        The coffee bean and tea leaf has the best carbonara dish. It has the most cheesy sauce with fine Italian pasta. It may be quite expensive for a moderate portion. This creamy pasta is mixed with thin slices of beef that makes the dish taste truly amazing.     
        </p>
        
        </Col>

        </Row>

        <Row lg="2" xs="1">
          <Col>
            <Img 
              fluid = {data.image9.childImageSharp.fluid}
            />
          </Col>

          <Col>
          <Img 
              fluid = {data.image10.childImageSharp.fluid}
            />
          </Col>
        </Row>
    </Container>

  </Layout>
)

}

export default HakiPage
