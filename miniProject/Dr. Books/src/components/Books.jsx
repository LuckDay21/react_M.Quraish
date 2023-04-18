import React from "react";
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export default function Books({ book }) {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={book.bookImage} />
        <Card.Body>
          <Card.Title>{book.bookName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {book.bookWriter}
          </Card.Subtitle>
          <Card.Text>Rp. {numberWithCommas(book.bookPrice)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
