import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button } from 'react-bootstrap';

function CardBerita({ imageUrl, title, description }){
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>
          <Card.Link as={Button} variant= "outline-dark" href="#" className='text-left'>
            {title}
          </Card.Link>
          </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBerita;