import { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import SuccessImg from "../img/undraw_Successful_purchase_re_mpig.png";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class Success extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "carts")
      .then((res) => {
        const carts = res.data;
        carts.map(function (item) {
          return axios
            .delete(API_URL + "carts/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="mt-4 text-center">
        <Image src={SuccessImg} width="500" />
        <h2>Success Pesan</h2>
        <p>Terimakasih Sudah Memesan!</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
