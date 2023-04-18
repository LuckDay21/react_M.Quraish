import React from "react";
import logo from "../img/Dr. Books.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="text-decoration-none text-black">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <strong>Dr. Books</strong>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
