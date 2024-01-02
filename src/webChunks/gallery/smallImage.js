import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import galeri1G from "../../assets/images/galeri1G.png"
import galeri2G from "../../assets/images/galeri2G.png"
import galeri3G from "../../assets/images/galeri3G.png"
import galeri4G from "../../assets/images/galeri4G.png"


function SmallImages (){
    return(
        <Container>
            <Row xs={4}>
                <Col>
                    <img src={galeri1G}
                    className='gallery-small-container d-block'
                    />
                </Col>
                <Col>
                    <img src={galeri2G}
                    className='gallery-small-container d-block'
                    />
                </Col>
                <Col>
                    <img src={galeri3G}
                    className='gallery-small-container d-block'
                    />
                </Col>
                <Col>
                    <img src={galeri4G}
                    className='gallery-small-container d-block'
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default SmallImages