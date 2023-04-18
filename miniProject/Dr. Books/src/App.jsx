import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { Col, Container, Row } from "react-bootstrap";
import ListCategories from "./components/ListCategories";
import Keranjang from "./components/Keranjang";
import { gql, useQuery } from "@apollo/client";
import Books from "./components/Books";

function App() {
  const Get_Book = gql`
    query Get_Book {
      List_Book {
        id
        bookCategories
        bookName
        bookPrice
        bookImage
        bookDescription
        bookWriter
      }
    }
  `;

  const {
    loading: loadingGetBook,
    error: errorGetBook,
    data: dataGetBook,
  } = useQuery(Get_Book);

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
              <Row>
                {dataGetBook?.List_Book.map((book) => (
                  <Books key={book.id} book={book} />
                ))}
              </Row>
            </Col>
            <Keranjang />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
