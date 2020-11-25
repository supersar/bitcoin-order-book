import { Container, Row, Col } from 'react-bootstrap';

const Bids = ({ combinedBids }) => {

  const items = combinedBids.map((bid) => 
    <Row key={`${bid.exchange}.${bid.rate}`}>
      <Col>{bid.exchange}</Col>
      <Col className="quantity">{bid.quantity.toFixed(8)}</Col>
      <Col className="bid-rate">{bid.rate.toFixed(8)}</Col>
    </Row>
  );

  return(
    <Container>
      <Row>
        <Col>Exchange</Col>
        <Col>Quantity</Col>
        <Col>Rate</Col>
      </Row>
      {items}
    </Container>
  )
};

export default Bids;
