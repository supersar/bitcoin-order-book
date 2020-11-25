import { Container, Row, Col } from 'react-bootstrap';

const Asks = ({ combinedAsks }) => {

  const items = combinedAsks.map((ask) => 
      <Row key={`${ask.exchange}.${ask.rate}`}>
        <Col className="ask-rate">{ask.rate.toFixed(8)}</Col>
        <Col className="quantity">{ask.quantity.toFixed(8)}</Col>
        <Col>{ask.exchange}</Col>
      </Row>
  );

  return(
    <Container>
      <Row>
        <Col>Rate</Col>
        <Col>Quantity</Col>
        <Col>Exchange</Col>
      </Row>
      {items}
    </Container>
  )
};

export default Asks;
