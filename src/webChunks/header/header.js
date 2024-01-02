
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import headerLogo from '../../assets/logo/headerLogo.png'

function Header() {
    return(
    <Container >
      <Navbar expand="lg" fixed='top' style={{marginInline:25, borderRadius: 20, marginBlock:20}} className='navbar'>
      <Container>
        <Navbar.Brand href="#home" ><img
              src={headerLogo}
              alt="headerLogo"
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" fill >
          <Nav className="font margin-header ml-auto d-flex" >
            <Nav.Link href="#home" style={navbarStyle}>Home</Nav.Link>
            <Nav.Link href="#Tentang Acara" style={navbarStyle}>Tentang Acara</Nav.Link>
            <Nav.Link href="#Galeri" style={navbarStyle}>Galeri</Nav.Link>
            <Nav.Link href="#Berita" style={navbarStyle}>Berita</Nav.Link>
            <Button variant="outline-success" href="#Registrasi" style={navbarStyle}>Registrasi</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
    );
}

const navbarStyle={
  paddingInline:20,
  paddingBlock:10
  
}

export default Header;