import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Maps from '../../assets/images/maps.png'
import AboutCardImage from "../../assets/images/aboutCardImage.png"
import "./aboutTheme.css"

function About () {
    return(
        <div className='bg-all' style={containerStyle}>
            <Container>
                <Row xs={1} md={2} lg={2} className='d-flex align-items-center justify-content-center'>
                    <Container>
                        <br/>
                        <Card className='bg-aboutContainer' style={borderRadius}>
                            <Container style={{width:"90%", height:"90%", marginBlock:25, overflow:"hidden", borderRadius:32}}>
                            <Card.Img 
                                variant="top" 
                                src={Maps} 
                                alt="Maps" 
                                className="img-fluid image-transition image-scale"
                                />
                            </Container>
                            <Card.Body>
                                <Card.Title className='font-title'>10K FUN RUN</Card.Title>
                                <Card.Text className='font-description'>
                                Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi 
                                hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun 
                                di Senayan lalu kembali lagi ke Bundaran HI!
                                </Card.Text>
                            </Card.Body>
                            <br/>
                        </Card>
                        <br/>
                    </Container>
                    <Container>
                        <Col >
                        <br/>
                            <Card className='bg-aboutContainer' style={borderRadius}>
                                <Card.Body>
                                <Card.Title className='font-title'>GRATIS DAN BERHADIAH</Card.Title>
                                <Card.Text className='font-description'>
                                Pendaftaran gratis! Ajak keluarga anda dan menangkan 
                                hadiah total puluhan juta rupiah doorprize menarik!
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <br/>
                            <Card className='bg-aboutContainer' style={borderRadius}>
                                <Card.Body>
                                <Card.Title className='font-title'>50+ TENANT BAZZAR </Card.Title>
                                <Card.Text className='font-description'>
                                Dapatkan promo menarik pada booth-booth tenant bazzar 
                                Sudirman Run 2023 mulai dari F&B hingga fashion
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <br/>
                            <Card className='bg-aboutContainer' style={borderRadius}>
                                <Row  className='d-flex' xs={2} md={2} lg={2}>
                                    <Col lg={{ span: 4}} xs={{span:5}}>
                                        <Container style={{width:"90%", height:"90%", overflow:"hidden", marginBlock:10, borderRadius:24}} >
                                            <Card.Img src={AboutCardImage} alt="AboutCardImage" className='image-transition image-scale'/>
                                        </Container>
                                    </Col>
                                    <Col lg={{ span: 8}} style={{marginBlock:10}}>
                                        <Card.Body>
                                            <Card.Title className='font-title'>SPECIAL PERFORMANCE</Card.Title>
                                            <Card.Text className='font-description'>
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
                <Row className='font-aboutButton d-flex justify-content-center align-items-center'>
                <Button style={buttonStyele} variant='aboutButton' className='font-aboutButton'>
                    DAFTAR SEKARANG
                </Button>
                </Row>
                <br/>
            </Container>
        </div>
    );
}

const containerStyle = {
    backgroundSize: 'cover',
    height: '100%', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  };

const borderRadius = {
    borderRadius: 32,
    alignItems: 'center', 
    justifyContent: 'center'
}

const buttonStyele = {
    marginInLine: 10,
    borderRadius: 100,
    width:200
  }

export default About