import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Artikel from "./component/artikel";
import Foto from './component/foto';
import Video from './component/video';
import "./beritaTheme.css"

function Berita() {
  return (
    <div className='bg-berita' style={containerStyle}>
        <Container>
            <br/>
            <Row>
                <text className='font-beritaTitle' style={{textAlign:"center"}}> ARTIKEL TERKAIT </text>
            </Row>

            <br/>        
            <Tab.Container defaultActiveKey="Artikel" id='bg-beritaTaps' className="bg-beritaTaps">
                <Row className='d-flex justify-content-center align-items-center'>
                    <Container className='berita-backgrround' style={tabsContainerStyle}>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col xs={4} >
                                <Container style={{borderRadius:24}} className='d-flex justify-content-center align-items-center bg-beritaTaps'>
                                    <Nav >
                                        <Nav.Item >
                                        <Nav.Link eventKey="Artikel" className='font-berita-taps'  >Artikel</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Container>
                            </Col>
                            <Col xs={4}>
                                <Container style={{borderRadius:24}} className='d-flex justify-content-center align-items-center bg-beritaTaps'>
                                    <Nav>
                                        <Nav.Item>
                                        <Nav.Link eventKey="Foto" className='font-berita-taps' style={{textAlign:"center"}}>Foto</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Container>
                            </Col>
                            <Col xs={4}>
                                <Container style={{borderRadius:24}} className='d-flex justify-content-center align-items-center bg-beritaTaps'>
                                    <Nav>
                                        <Nav.Item>
                                        <Nav.Link eventKey="Video" className='font-berita-taps' style={{textAlign:"center"}}>Video</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <br/>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Tab.Content>
                        <Tab.Pane eventKey="Artikel" >
                            <Artikel/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Foto">
                            <Foto/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Video">
                            <Video/>
                        </Tab.Pane>
                    </Tab.Content>
                </Row>
            </Tab.Container>
            <Row className='font d-flex justify-content-center align-items-center'>
            <Button style={buttonStyle} variant='beritaButton' className='font-berita-button'>
                LIHAT LEBIH BANYAK
            </Button>
            </Row>
        </Container>
        <br/>
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

const buttonStyle = {
    borderRadius: 32,
    width:250
}

const tabsContainerStyle = {
    width: 600,
    textAlign:"center",
    borderRadius:32
}

export default Berita;