import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Col, Container, Row } from "react-bootstrap";
import ListCategories from "../components/ListCategories";
import Keranjang from "../components/Keranjang";
import { gql, useQuery } from "@apollo/client";
import Books from "../components/Books";

export default function Komik() {
  const Get_Komik = gql`
    query Get_Komik {
      List_Book(where: { bookCategories: { _eq: "Komik" } }) {
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
    loading: loadingGetKomik,
    error: errorGetKomik,
    data: dataGetKomik,
  } = useQuery(Get_Komik);

  return (
    <div className="Komik">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Buku - Komik</strong>
              </h4>
              <hr />
              <Row>
                {dataGetKomik?.List_Book.map((book) => (
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
