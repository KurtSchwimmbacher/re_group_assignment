import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'

// import link
import { Link } from "react-router-dom";



function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-link'>Home</Nav.Link>
            <Nav.Link className='nav-link' href="#link">About</Nav.Link>
            <Nav.Link className='nav-link' href="#link">Inquire</Nav.Link>
            <Nav.Link className='nav-link' href="#link">Properties</Nav.Link>
            <Nav.Link className='nav-link' href="#link">Sell/Let Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;