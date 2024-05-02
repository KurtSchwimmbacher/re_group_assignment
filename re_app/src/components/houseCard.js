import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './houseCard.css';

function HouseCard(props) {
  const [imgSrc, setImgSrc] = useState(null);

  // Dynamically import image based on name
  import(`../assets/house-images/${props.img}.jpg`)
    .then(image => setImgSrc(image.default))
    .catch(err => console.error('Failed to load image', err));

  return (
    <Card className='card'>
      <Card.Img variant="top" className='card-img' src={imgSrc} alt={props.img} />
      <Card.Body className='card-body'>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Location: {props.location}<br/>
          Price: {props.price}<br/>
        </Card.Text>
        <Link to={`/house/${props.id}`}>
          <Button className='card-btn' variant="primary">View House</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default HouseCard;
