import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { Col, Container, Row } from "react-bootstrap";
import ListCategories from "./components/ListCategories";
import Keranjang from "./components/Keranjang";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Buku</strong>
              </h4>
              <hr />
            </Col>
            <Keranjang />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
