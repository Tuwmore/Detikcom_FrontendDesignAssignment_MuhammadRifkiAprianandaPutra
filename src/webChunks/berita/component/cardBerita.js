import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "../beritaTheme.css"

function CardBerita({ imageUrl, title, description }){
  return (
    <Card className='bg-beritaContainer'>
      <Container style={containerStyle}>
      <Card.Img variant="top" src={imageUrl} className='image-transition image-scale'/>
      </Container>
      <Card.Body>
        <Card.Title>
          <Card.Link as={Button} variant= "beritaLink" href="#" className='text-left font-cardBerita'>
            {title}
          </Card.Link>
          </Card.Title>
        <Card.Text style={{marginInline:12}}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const containerStyle = {
  width:"95%", 
  height: "95%",
  overflow:"hidden", 
  marginBlock:10, 
  borderRadius:42
}

export default CardBerita;