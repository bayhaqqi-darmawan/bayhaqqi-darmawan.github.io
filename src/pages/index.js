import React from "react"
import Fluid from "../components/fluid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const IndexPage = () => {

return (
  <Layout>
    <SEO title="Home" />
    <Fluid />

    <Container className="themed-container" fluid={true}>Binge watch movies</Container>
    <br></br>
    <Container className="themed-container" fluid={true}>Trying new food is quite an exciting thing to do. It’s a shame to have so much abundance in the world and not even know about it. Exploring new food that you have not tried may expose you to new flavors you might enjoy! This allows you to have a wide range of food spectrum, giving you more options for meals.
    </Container>
    <br></br>
    <Container className="themed-container" fluid={true}>Having a new hobby is a great way to gain experience and can be a lot of fun. Hobbies aren’t just limited to one, you can have as many hobbies as you want. Having a new hobby makes you more interesting and helps to kill your boredom. You never know, maybe this new hobby could be something that you’re great at.
    </Container>
    <br></br>
    <Container className="themed-container" fluid={true}>Listening to new kinds of music is proven to be good for the brain. And being exposed to new genres 
    </Container>
    <br></br>
    <Container className="themed-container" fluid={true}>Read new books.
    There’s no better way to kill time by reading novels that has 
    </Container>
    <br></br>
    <Container className="themed-container" fluid={true}>Learn Different cultures</Container>
    <br></br>

    <div >
    <Row xs="1" sm="1" md="2">
      <Col>
      <Card body>
          <CardTitle>Aziyah's Blog</CardTitle>
          <CardText>If you are ready to spend most of your days at home, infront of your TV and watch some series, jump over to Aziyah's Blog to find out the 5 most recommended ones by Aziyah! You will for sure get entertained by it!</CardText>
          <Link to="/ziyah-blog"><Button>Watch and Chill!</Button></Link>
        </Card>
      </Col>

      <Col>
      <Card body>
          <CardTitle>Bay Haqqi's Blog</CardTitle>
          <CardText>Are you ready to venture around Brunei? No, not just wander around but to get the most delicious dish around Brunei recommended by Bay Haqqi. Here are the top 5 favurite dishes that is truly delicious like no other!</CardText>
          <Link to="/haqqi-blog"><Button>Food For Life!</Button></Link>
          
        </Card>
      </Col>
    </Row>
    </div>

    </Layout>
)

}

export default IndexPage
