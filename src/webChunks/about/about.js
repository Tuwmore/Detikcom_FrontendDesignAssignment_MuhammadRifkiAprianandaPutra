import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Maps from '../../assets/images/maps.png'
import AboutCardImage from "../../assets/images/aboutCardImage.png"

function About () {
    return(
        <div className='bg-all' style={containerStyle}>
            <Container>
                <Row xs={1} md={2} lg={2} className='d-flex align-items-center justify-content-center'>
                    <Container>
                        <br/>
                        <Card className='bg-container' style={borderRadius}>
                            <Card.Img 
                                variant="top" 
                                src={Maps} 
                                alt="Maps" 
                                className="img-fluid"
                                />
                            <Card.Body>
                                <Card.Title>10K FUN RUN</Card.Title>
                                <Card.Text>
                                Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi 
                                hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun 
                                di Senayan lalu kembali lagi ke Bundaran HI!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Container>
                    <Container>
                        <Col >
                        <br/>
                            <Card className='bg-container' style={borderRadius}>
                                <Card.Body>
                                <Card.Title>GRATIS DAN BERHADIAH</Card.Title>
                                <Card.Text>
                                Pendaftaran gratis! Ajak keluarga anda dan menangkan 
                                hadiah total puluhan juta rupiah doorprize menarik!
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <br/>
                            <Card className='bg-container' style={borderRadius}>
                                <Card.Body>
                                <Card.Title>50+ TENANT BAZZAR </Card.Title>
                                <Card.Text>
                                Dapatkan promo menarik pada booth-booth tenant bazzar 
                                Sudirman Run 2023 mulai dari F&B hingga fashion
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <br/>
                            <Card className='bg-container' style={borderRadius}>
                                <Row  className='d-flex' xs={2} md={2} lg={2}>
                                    <Col lg={{ span: 4}} xs={{span:5}} className='d-flex align-items-start justify-content-start' style={{padding:20}}>
                                        <Card.Img variant="start" src={AboutCardImage} alt="AboutCardImage" style={{width:180}}/>
                                    </Col>
                                    <Col lg={{ span: 8}} style={{paddingTop:20}}>
                                        <Card.Body>
                                            <Card.Title>SPECIAL PERFORMANCE</Card.Title>
                                            <Card.Text>
                                            Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                            <br/>
                        </Col>
                    </Container>
                </Row>
                <Row className='font d-flex justify-content-center align-items-center'>
                <Button style={{width:200}}>
                    LIHAT LEBIH BANYAK
                </Button>
                </Row>
                <br/>
            </Container>
        </div>
    );
}

const containerStyle = {
    backgroundSize: 'cover',
    height: '100%', // Adjust the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // Text color on top of the background image
  };

const borderRadius = {
    borderRadius: 32
}

export default About