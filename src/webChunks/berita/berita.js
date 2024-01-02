import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Artikel from "./component/artikel";
import Foto from './component/foto';
import Video from './component/video';

function Berita() {
  return (
    <div className='bg-berita' style={containerStyle}>
        <Container>
            <br/>
            <Row>
                <text className='font' style={{textAlign:"center"}}> GALERI SUDIRMAN RUN 2022 </text>
            </Row>

            <br/>        
            <Tab.Container defaultActiveKey="Artikel">
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={3} className='berita-button'>
                        <Nav variant="outline-primary" className="flex-column ">
                            <Nav.Item>
                            <Nav.Link eventKey="Artikel" className='font' style={{textAlign:"center"}}>Artikel</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={3} className='berita-button'>
                        <Nav variant="outline-primary" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="Foto" className='font ' style={{textAlign:"center"}}>Foto</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={3} className='berita-button'>
                        <Nav variant="outline-primary" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="Video" className='font ' style={{textAlign:"center"}}>Video</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <br/>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Tab.Content>
                        <Tab.Pane eventKey="Artikel">
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
            <Button style={{width:200}}>
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

export default Berita;