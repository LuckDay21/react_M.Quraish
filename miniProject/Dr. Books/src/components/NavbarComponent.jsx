import logo from "../img/Dr. Books.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

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
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
