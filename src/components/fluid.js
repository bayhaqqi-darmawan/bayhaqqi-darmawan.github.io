import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Fluid = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo">
        <Container fluid>
          <h1 className="display-3">BayZee's Blog Page</h1>
          <p className="lead">Being stuck at home with nothing to do can be so plain and dull. And finding things to do may be difficult as well so below are a few suggestions that we have for you to try doing during your free time.</p>
          
          <p className="lead">Things you should try doing:</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Fluid;