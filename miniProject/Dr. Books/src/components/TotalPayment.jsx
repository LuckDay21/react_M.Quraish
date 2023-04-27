/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export default function TotalPayment(props) {
  const navigate = useNavigate();

  const submitTotalPayment = (totalPayment) => {
    const order = {
      total_payment: totalPayment,
      books: props.carts,
    };

    axios.post(API_URL + "orders", order).then((res) => {
      navigate("/success");
    });
  };

  const totalPayment = props.carts.reduce(function (result, item) {
    return result + item.total_harga;
  }, 0);

  return (
    <div className="fixed-bottom">
      <Row>
        <Col md={{ span: 3, offset: 9 }} className="px-4">
          <h4>
            Total Harga :{" "}
            <strong className="float-end me-2">
              Rp. {numberWithCommas(totalPayment)}
            </strong>
          </h4>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="mb-2 mt-2 me-2"
              size="lg"
              onClick={() => submitTotalPayment(totalPayment)}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
              <strong>BAYAR</strong>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
