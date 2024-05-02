import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './houseCard.css';

function houseCard(props) {
  return (
    <Card className='card'>
      <Card.Img variant="top" className='card-img' src={props.source} alt='house picture' />
      <Card.Body className='card-body'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='card-btn' variant="primary">Contact Agent</Button>
      </Card.Body>
    </Card>
  );
}

export default houseCard;