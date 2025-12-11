import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router';

function NavBarMenuApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/lab1">Laboratorium 1</Nav.Link>
            <Nav.Link as={NavLink} to="/lab2">Laboratorium 2</Nav.Link>
            <Nav.Link as={NavLink} to="/lab3">Laboratorium 3</Nav.Link>
            <Nav.Link as={NavLink} to="/lab4">Laboratorium 4</Nav.Link>
            <Nav.Link as={NavLink} to="/lab5">Laboratorium 5</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenuApp;
