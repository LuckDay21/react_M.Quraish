import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../img/Dr. Books.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href={window.location.href}>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <strong>Dr. Books</strong>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/faq">
              <strong>FAQ</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
