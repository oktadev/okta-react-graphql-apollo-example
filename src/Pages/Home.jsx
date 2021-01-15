import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Header from '../Components/Header'
import { Container, Row, Col, Card } from 'react-bootstrap'


import { useOktaAuth } from '@okta/okta-react';

const Home = () => {

  const { authState } = useOktaAuth();

  return (authState.isAuthenticated ?
    <Redirect to={{ pathname: '/Blastoff' }} /> :

    <Container>

      <Header></Header>

      <Row>

        <Col sm={12} className="text-center">
          <h3>BlastOff! </h3>
          <h4> A Look at SpaceX Launch History</h4>
          <br>
          </br>
          <h5>A React Demo Using <a target="_blank" rel="noreferer" href="https://www.apollographql.com/docs/react/">Apollo Client </a><br />Secured With <a target="_blank" rel="noreferer" href="https://www.okta.com/">Okta </a></h5>
          <h5><a href="https://api.spacex.land/graphql/" target="_blank" rel="noreferer">GraphQL Data Available here</a></h5>
        </Col>
      </Row>

      <br></br>

      <Row >
        <Col sm={12} className="text-center">
          <Card style={{ width: '21.5em', margin: '0 auto' }}>
            <Card.Header>
              Already have an Okta Account?
              </Card.Header>
            <Card.Body>
              <Link to='/Blastoff'>Login Here</Link>
            </Card.Body>
          </Card>

        </Col>

      </Row>

      <footer className="text-muted text-center">
        <div className="container">
          <p>A Small demo using <a target="_blank" rel="noreferer" href="https://www.apollographql.com/docs/react/">Apollo Client </a> Secured by <a target="_blank" rel="noreferer" href="https://www.okta.com/">Okta </a></p>
          <p>By <a href="https://profile.fishbowlllc.com">Nik Fisher</a></p>
        </div>
      </footer>

    </Container>
  );
};
export default Home;
