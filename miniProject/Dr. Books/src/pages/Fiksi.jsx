import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Col, Container, Row } from "react-bootstrap";
import ListCategories from "../components/ListCategories";
import Keranjang from "../components/Keranjang";
import { gql, useQuery } from "@apollo/client";
import Books from "../components/Books";

export default function Fiksi() {
  const Get_Fiksi = gql`
    query Get_Fiksi {
      List_Book(where: { bookCategories: { _eq: "Fiksi" } }) {
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
    loading: loadingGetFiksi,
    error: errorGetFiksi,
    data: dataGetFiksi,
  } = useQuery(Get_Fiksi);

  return (
    <div className="Fiksi">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Buku - Fiksi</strong>
              </h4>
              <hr />
              <Row>
                {dataGetFiksi?.List_Book.map((book) => (
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
