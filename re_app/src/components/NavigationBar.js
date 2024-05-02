import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'

// import link
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Container className='nav-con'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-controls'>
          <Nav className="me-auto">
            <Nav.Link className='nav-link'>
                <Link to="/" className='navbar-link'>
                Home
                </Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
                <Link to="/listings" className='navbar-link'>
                    Listings
                </Link>
            </Nav.Link>
            <Nav.Link className='nav-link' >
                <Link to="/addProp" className='navbar-link'>
                    Add Property
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavigationBar;
