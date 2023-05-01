import { Component } from "react";
import { Accordion, Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FaqImg from "../img/undraw_My_answer_re_k4dv.png";

export default class Success extends Component {
  render() {
    return (
      <div className="mt-4">
        <Row>
          <Col md={7}>
            <Image src={FaqImg} fluid />
          </Col>
          <Col md={5} className="d-flex align-items-center">
            <div>
              <Accordion style={{ maxWidth: "700px" }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Bagaimana cara menggunakan Komputer ini?
                  </Accordion.Header>
                  <Accordion.Body>
                    1. Pilih buku yang anda inginkan
                    <br />
                    2. Klik bayar
                    <br />
                    3. Pergi ke kasir untuk melakukan pembayaran dan mengambil
                    buku yang dipilih
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Pembayaran apa yang bisa digunakan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Untuk sementara pembayaran yang bisa digunakan hanya cash
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br />
              <Button variant="primary" as={Link} to="/">
                Kembali
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
