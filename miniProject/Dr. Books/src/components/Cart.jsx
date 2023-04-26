/* eslint-disable react/prop-types */
import { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalPayment from "./TotalPayment";

export default class Cart extends Component {
  render() {
    const { carts } = this.props;

    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Keranjang</strong>
        </h4>
        <hr />
        {carts.length !== 0 && (
          <ListGroup variant="flush">
            {carts.map((cartMenu) => (
              <ListGroup.Item key={cartMenu.id}>
                <Row>
                  <Col xs={2}>
                    <h4>
                      <Badge pill bg="success">
                        {cartMenu.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{cartMenu.product.nama}</h5>
                    <p>Rp. {numberWithCommas(cartMenu.product.harga)}</p>
                  </Col>
                  <Col>
                    <strong className="float-end">
                      Rp. {numberWithCommas(cartMenu.total_harga)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <TotalPayment carts={carts} {...this.props} />
      </Col>
    );
  }
}
