import logo from './logo.svg';
import './App.css';
import {Form , Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
 

function App() {
  return (
    <div>
      <>


  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      
<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Multiple files input example</Form.Label>
    <Form.Control type="file" multiple />
  </Form.Group>
  <Form.Group controlId="formFileDisabled" className="mb-3">
    <Form.Label>Disabled file input example</Form.Label>
    <Form.Control type="file" disabled />
  </Form.Group>
  <Form.Group controlId="formFileSm" className="mb-3">
    <Form.Label>Small file input example</Form.Label>
    <Form.Control type="file" size="sm" />
  </Form.Group>
  <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Large file input example</Form.Label>
    <Form.Control type="file" size="lg" />
  </Form.Group>


</>
    </div>
  );
}

export default App;
