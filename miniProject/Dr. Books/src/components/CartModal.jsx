import { Button, Form, Modal } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const CartModal = ({
  showModal,
  handleClose,
  cartDetail,
  jumlah,
  keterangan,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
  totalHarga,
  hapusPesanan,
}) => {
  if (cartDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {cartDetail.product.nama}{" "}
            <strong>(Rp. {numberWithCommas(cartDetail.product.harga)})</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={cartDetail.product.gambar}
            alt={cartDetail.product.nama}
            style={{
              width: "50%",
              marginBottom: "1rem",
              display: "block",
              margin: "auto",
            }}
          />
          <br />
          <p>
            <i>{cartDetail.product.deskripsi}</i>
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga :</Form.Label>
              <p>
                <strong>Rp. {numberWithCommas(totalHarga)}</strong>
              </p>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button
                variant="primary"
                size="sm"
                className="me-2"
                onClick={() => kurang()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>

              <strong>{jumlah}</strong>

              <Button
                variant="primary"
                size="sm"
                className="ms-2"
                onClick={() => tambah()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Form.Group>
            <br />

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Keterangan :</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="keterangan"
                placeholder="Contoh : Versi Bahasa Inggris"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => hapusPesanan(cartDetail.id)}>
            <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

CartModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  cartDetail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nama: PropTypes.string.isRequired,
      harga: PropTypes.number.isRequired,
      deskripsi: PropTypes.string.isRequired,
      gambar: PropTypes.string.isRequired,
    }).isRequired,
    jumlah: PropTypes.number.isRequired,
    keterangan: PropTypes.string.isRequired,
    total_harga: PropTypes.number.isRequired,
  }),
  jumlah: PropTypes.number.isRequired,
  keterangan: PropTypes.string.isRequired,
  tambah: PropTypes.func.isRequired,
  kurang: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  totalHarga: PropTypes.number.isRequired,
  hapusPesanan: PropTypes.func.isRequired,
};

export default CartModal;
