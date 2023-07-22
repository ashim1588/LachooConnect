import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./../Home/Home";
import feed from "./../API/feedData";
import Header from "./Header";

const Navbarmenu = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        {/* <img 
            classNamename="logocss"
            src=" lachologo1.png"
            alt="logo"  
            hieght="100px"
            width="100px"
            /> */}
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navv"
              style={{
                maxHeight: "100px",
                paddingLeft: "1rem",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/feed">Feed</Nav.Link>
              <Nav.Link href="/findAlumni">FindAlumni </Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarmenu;
