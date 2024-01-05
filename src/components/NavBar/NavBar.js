import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../../Img/NavBar/logo.png'

import './navBar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <img src={Logo} className='logo'></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
    </Nav>
          <Nav /* className="me-auto items" */>
            <Nav.Link href="#home">Empresa</Nav.Link>
            <Nav.Link href="#link">Negocio</Nav.Link>
            <Nav.Link href="#link">Responsabilidad</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;