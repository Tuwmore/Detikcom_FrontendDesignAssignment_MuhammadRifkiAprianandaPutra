import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Logo from "../../assets/logo/heroLogo.png"
import Button from 'react-bootstrap/Button';

import {Image, Row, Stack} from "react-bootstrap"
import HeroImage from '../../assets/background/Hero.png'

function Hero () {
    return (
      <div className='bg-hero' style={containerStyle}>
        <Container>
            <Row>
            <Figure>
                <Figure.Image
                    width={686}
                    height={276}
                    alt="Logo"
                    src={Logo}
                />
            </Figure>
            </Row>
            <Row xs={3} md={4} lg={6} style={{paddingLeft:10}}>
                <Button variant="primary" className='font'>Tentang Acara</Button>{' '}
            </Row>
        </Container>
      </div>
    );
  };
  
  const containerStyle = {
    backgroundSize: 'cover',
    height: '120vh', // Adjust the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // Text color on top of the background image
  };

export default Hero;