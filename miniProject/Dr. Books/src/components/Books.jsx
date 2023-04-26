/* eslint-disable react/prop-types */
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Books = ({ book, insertCart }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => insertCart(book)}>
        <Card.Img variant="top" src={book.gambar} />
        <Card.Body>
          <Card.Title>{book.nama}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {book.penulis}
          </Card.Subtitle>
          <Card.Text>Rp. {numberWithCommas(book.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Books;
