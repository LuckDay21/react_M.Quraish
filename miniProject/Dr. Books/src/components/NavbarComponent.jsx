import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../img/Dr. Books.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <FontAwesomeIcon
        icon={faBars}
        className="ms-3"
        style={{ cursor: "pointer" }}
        onClick={handleShow}
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <strong>Dr. Books</strong>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <Container>
        <Navbar.Brand href={window.location.href} className="mx-auto ms">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <strong>Dr. Books</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
