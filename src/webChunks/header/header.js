
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import headerLogo from '../../assets/logo/headerLogo.png'
import './headerTheme.css';
import styled, { ThemeProvider } from 'styled-components';

function Header() {
    return(
      <>
        <Container >
          <Navbar expand="lg" fixed='top' style={{marginInline:25, borderRadius: 40, marginBlock:20}} className='navbar'>
            <Container>
              <Navbar.Brand href="#home" style={{marginLeft:10}}><img
                    src={headerLogo}
                    alt="headerLogo"
                  />
                  </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav" fill >
                <Nav className="font margin-header ml-auto d-flex" >
                  <Nav.Link href="#home" style={navbarStyle} className='font-header'>Home</Nav.Link>
                  <Nav.Link href="#Tentang Acara" style={navbarStyle} className='font-header'>Tentang Acara</Nav.Link>
                  <Nav.Link href="#Galeri" style={navbarStyle} className='font-header'>Galeri</Nav.Link>
                  <Nav.Link href="#Berita" style={navbarStyle} className='font-header'>Berita</Nav.Link>
                  <Button variant='register' href="#Registrasi" style={navbarStyle} className='font-header'>Registrasi</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </>

    );
}

const navbarStyle={
  marginInline:10,
  paddingInline:20,
  paddingBlock:10,
  borderRadius:100
}

export default Header;