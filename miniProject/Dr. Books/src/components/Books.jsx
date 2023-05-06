import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import PropTypes from "prop-types";

const Books = ({ book, insertCart }) => {
  return (
    <Col md={3} xs={6} className="mb-4">
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

Books.propTypes = {
  book: PropTypes.shape({
    gambar: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired,
    penulis: PropTypes.string.isRequired,
    harga: PropTypes.number.isRequired,
  }).isRequired,
  insertCart: PropTypes.func.isRequired,
};

export default Books;
