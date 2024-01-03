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
            <Tab.Container defaultActiveKey="Artikel" >
                <Row className='d-flex justify-content-center align-items-center' >
                    <Col xs={{span:2}} className='berita-backgrround'>
                        <Container style={{borderRadius:24}}>
                            <Nav className="flex-column " >
                                <Nav.Item >
                                <Nav.Link eventKey="Artikel" className='font-berita-button' style={{textAlign:"center"}} >Artikel</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Container>
                    </Col>
                    <Col xs={{span:2}} className='berita-backgrround'>
                        <Nav className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="Foto" className='font-berita-button ' style={{textAlign:"center"}}>Foto</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={{span:2}} className='berita-backgrround'>
                        <Nav className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="Video" className='font-berita-button ' style={{textAlign:"center"}}>Video</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
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

export default Berita;