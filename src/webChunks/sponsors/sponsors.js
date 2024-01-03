import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import SponsorsImages from "../../assets/logo/sponsor.png"
import "./sponsorsTheme.css"

function Sponsors (){
    return(
        <div className='bg-sponsors' style={containerStyle}>
            <Container>
                <Col>
                <br/>
                    <Row>
                        <text style={{textAlign:"center"}} className='font-sponsors'>
                            DIDUKUNG OLEH
                        </text>
                    </Row>
                    <br/>
                    <Container fluid className="scrolling-container">
                        <Row className='double-width-container'>
                                <Col>
                                    <figure className='scrolling-text'>
                                        <Figure.Image
                                            alt="SponsorsImages"
                                            src={SponsorsImages}
                                        />
                                    </figure>
                                </Col>
                        </Row>
                    </Container>
                    <br/>
                </Col>
            </Container>
        </div>
    );
}

const containerStyle = {
    backgroundSize: 'cover',
    height: '100%',// Adjust the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color on top of the background image
  };

export default Sponsors