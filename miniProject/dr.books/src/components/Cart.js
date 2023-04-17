import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class Cart extends Component {
  render() {
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Keranjang</strong>
          <hr />
        </h4>
      </Col>
    );
  }
}
