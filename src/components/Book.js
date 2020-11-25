import React from 'react';
import Asks from './Asks';
import Bids from './Bids';
import { Container, Row, Col } from 'react-bootstrap';

const Book = ({ state }) => {
  if(state.loading) {
    return (
      <Container>
        <h2>
          Bitcoin book
        </h2>
        <Row>
          <Col>
            Loading...
          </Col>
        </Row>
      </Container>
    )
  }
  if (!state.error && state.asks.length > 0 && state.bids.length > 0) {
    return (
      <Container>
        <h1>
          Bitcoin book: BTC_ETH
        </h1>
        { state.lastRefresh && 
          <p>
            Refreshed on: {state.lastRefresh}
          </p>
        }
        <Row>
          <Col className="col-main col-bids">
            <h3>Bids</h3>
            <Bids
              combinedBids = {state.bids}
            />
          </Col>
          <Col className="col-main col-asks">
            <h3>Asks</h3>
            <Asks 
              combinedAsks = {state.asks}
              />
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <h1>
        Bitcoin book
      </h1>
      <Row>
        <Col>
          Oops! There was a problem loading the book data. Please try again in a moment.
        </Col>
      </Row>
    </Container>
  )
}

export default Book;
