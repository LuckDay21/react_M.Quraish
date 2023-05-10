import { Component } from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalPayment from "./TotalPayment";
import CartModal from "./CartModal";
import axios from "axios";
import { API_URL } from "../utils/constants";
import swal from "sweetalert";
import PropTypes from "prop-types";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      cartDetail: false,
      jumlah: 0,
      keterangan: "",
      totalHarga: 0,
    };
  }

  handleShow = (cartMenu) => {
    this.setState({
      showModal: true,
      cartDetail: cartMenu,
      jumlah: cartMenu.jumlah,
      keterangan: cartMenu.keterangan,
      totalHarga: cartMenu.total_harga,
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
      totalHarga: this.state.cartDetail.product.harga * (this.state.jumlah + 1),
    });
  };

  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        totalHarga:
          this.state.cartDetail.product.harga * (this.state.jumlah - 1),
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
    this.handleClose();

    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product: this.state.cartDetail.product,
      keterangan: this.state.keterangan,
    };

    axios
      .put(API_URL + "carts/" + this.state.cartDetail.id, data)
      .then(() => {
        this.props.getCartList();
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Update!",
          text: "Buku Terupdate",
          icon: "success",
        });
      });
  };

  hapusPesanan = (id) => {
    this.handleClose();

    axios
      .delete(API_URL + "carts/" + id)
      .then(() => {
        this.props.getCartList();
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Delete!",
          text: "Buku Terhapus" + this.state.cartDetail.product.nama,
          icon: "error",
        });
      });
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
          <Card className="overflow-auto hasil">
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
                  <Row>
                    <Col>
                      <strong>Keterangan:</strong>
                      <br />
                      <small>{cartMenu.keterangan}</small>
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
                hapusPesanan={this.hapusPesanan}
              />
            </ListGroup>
          </Card>
        )}

        {carts.length === 0 && (
          <div className="d-flex justify-content-center hasil">
            <h5 className="text-muted">Keranjang Kosong</h5>
          </div>
        )}

        <TotalPayment carts={carts} {...this.props} />
      </Col>
    );
  }
}

Cart.propTypes = {
  carts: PropTypes.array.isRequired,
  getCartList: PropTypes.func.isRequired,
};

TotalPayment.propTypes = {
  carts: PropTypes.array.isRequired,
};
