/* eslint-disable react/prop-types */
import { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalPayment from "./TotalPayment";
import CartModal from "./CartModal";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      cartDetail: false,
      jumlah: 0,
      keterangan: "",
    };
  }

  handleShow = (cartMenu) => {
    this.setState({
      showModal: true,
      cartDetail: cartMenu,
      jumlah: cartMenu.jumlah,
      keterangan: cartMenu.keterangan,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

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
              <ListGroup.Item
                key={cartMenu.id}
                onClick={() => this.handleShow(cartMenu)}
              >
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
            <CartModal
              handleClose={this.handleClose}
              {...this.state}
              tambah={this.tambah}
              kurang={this.kurang}
              changeHandler={this.changeHandler}
              handleSubmit={this.handleSubmit}
            />
          </ListGroup>
        )}
        <TotalPayment carts={carts} {...this.props} />
      </Col>
    );
  }
}
