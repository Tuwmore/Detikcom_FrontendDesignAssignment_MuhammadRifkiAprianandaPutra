
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import galeri1 from "../../assets/images/galeri1.png";
import galeri2 from "../../assets/images/galeri2.png";
import galeri3 from "../../assets/images/galeri3.png";
import galeri4 from "../../assets/images/galeri4.png";
import SmallImages from './smallImage';
import { Container, Row } from 'react-bootstrap';
import "./galleryTheme.css"

function Gallery() {
  return (
    <div className='bg-all' style={containerStyle}>
        <Container>
            <br/>
            <Row>
                <text className='font-galleryTitle ' style={{textAlign:"center"}}> GALERI SUDIRMAN RUN 2022 </text>
            </Row>

            <br/>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={galeri1}
                        className="d-block gallery-container"
                        />
                    </div>
                    <br/>
                    <SmallImages/>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={galeri2}
                        className="d-block gallery-container"
                        />
                    </div>
                    <br/>
                    <SmallImages/>
                </Carousel.Item>

                <Carousel.Item interval={10000}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={galeri3}
                        className="d-block gallery-container"
                        />
                    </div>
                    <br/>
                    <SmallImages/>
                </Carousel.Item>
                
                <Carousel.Item interval={10000}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={galeri4}
                        className="d-block gallery-container"
                    />
                    </div>
                    <br/>
                    <SmallImages/>
                </Carousel.Item>
            </Carousel>
            <br/>

        </Container>
    </div>

  );
}

const containerStyle = {
    backgroundSize: 'cover',
    height: '100%', // Adjust the height as needed
    //display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // Text color on top of the background image
  };

export default Gallery;