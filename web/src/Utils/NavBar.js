import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../accets/logo.png';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:'#080060', display:'flex'}}>
  <Container>
  <Navbar.Brand href="#home"><img src={logo} style={{height:'120px', top:'70px', position:'relative'}} alt="logo"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end" style={{color:'white'}}>
    <Nav >
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavBar;