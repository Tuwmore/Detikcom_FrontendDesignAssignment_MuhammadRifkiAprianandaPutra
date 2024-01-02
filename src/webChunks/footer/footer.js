import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Logo from "../../assets/logo/heroLogo.png"
import { Col, Row } from 'react-bootstrap';
import FacebookLogo from "../../assets/logo/facebookLogo.png"
import InstagramLogo from "../../assets/logo/instagramLogo.png"
import LinkedinLogo from "../../assets/logo/linkedinLogo.png"
import XLogo from "../../assets/logo/xLogo.png"
import YoutubeLogo from "../../assets/logo/youtubeLogo.png"


function Footer () {
    return (
      <div className='bg-footer' style={containerStyle}>
        <Container>
            <Col>
                <Row>
                    <Figure>
                        <Figure.Image
                            width={285}
                            height={115}
                            alt="Logo"
                            src={Logo}
                            style={{filter: "grayscale(100%) brightness(1000%)"}}
                        />
                    </Figure>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <text>
                        Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh Detikhealth 
                        secara gratis untuk masyarakat Indonesia. Ajak keluarga dan kerabat anda untuk 
                        ikut keseruan Sudirman Run 2023 lalu menangkan hadiah utama serta doorprize dengan 
                        total puluhan juta rupiah
                        </text>
                    </Col>
                    <Col md={{offset:2, span:2}} className='justify-content-center align-items-center'>
                        <Row>
                            <text style={{textAlign:"center"}}>
                                Connect With Us
                            </text>
                        </Row>
                        <br/>
                        <Row xs={5}>
                            <Col>
                                <img src={FacebookLogo}/>
                            </Col>
                            <Col>
                                <img src={InstagramLogo}/>
                            </Col>
                            <Col>
                                <img src={LinkedinLogo}/>
                            </Col>
                            <Col>
                                <img src={XLogo}/>
                            </Col>
                            <Col>
                                <img src={YoutubeLogo}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Container style={{width:"95vw", height:1, backgroundColor:"white", borderRadius:2}}/>
                </Row>
                <br/>
                <Row>
                    <text>
                        Copyright @ 2023 detikcom. All right reserved
                    </text>
                </Row>
            </Col>
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

export default Footer;