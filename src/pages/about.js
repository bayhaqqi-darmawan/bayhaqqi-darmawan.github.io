import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About BayZee blog</h1>
    <p className="lead">BayZee Blog is a personal blog where it shares personal interests towards two different things. People who have the same interest may find it useful as it will give them the opportunity to try or test new things with a detailed review. This does not only make you eager to try but also expect the outcome of the reviewed things.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
