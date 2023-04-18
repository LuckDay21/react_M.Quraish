import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Col, Container, Row } from "react-bootstrap";
import ListCategories from "../components/ListCategories";
import Keranjang from "../components/Keranjang";
import { gql, useQuery } from "@apollo/client";
import Books from "../components/Books";

export default function NonFiksi() {
  const Get_NonFiksi = gql`
    query Get_NonFiksi {
      List_Book(where: { bookCategories: { _eq: "Non-Fiksi" } }) {
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
    loading: loadingGetNonFiksi,
    error: errorGetNonFiksi,
    data: dataGetNonFiksi,
  } = useQuery(Get_NonFiksi);

  return (
    <div className="Non-Fiksi">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Buku - Non Fiksi</strong>
              </h4>
              <hr />
              <Row>
                {dataGetNonFiksi?.List_Book.map((book) => (
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
