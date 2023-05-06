import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, ListGroup, Offcanvas } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faPerson,
  faDungeon,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Icon = ({ nama }) => {
  if (nama === "Fiksi")
    return <FontAwesomeIcon icon={faRobot} className="mt-2" />;
  if (nama === "Non-Fiksi")
    return <FontAwesomeIcon icon={faPerson} className="mt-2 ms-1 me-2" />;
  if (nama === "Komik")
    return <FontAwesomeIcon icon={faDungeon} className="mt-2 me-1" />;

  return <FontAwesomeIcon icon={faRobot} className="mt-2" />;
};

const ListCategories = ({
  changeCategory,
  selectCategory,
  searchQuery,
  handleSearch,
  handleSearchSubmit,
}) => {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col md={1} mt="2">
      <h4>
        <FontAwesomeIcon
          icon={faSearch}
          className="ms-3"
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        />
      </h4>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <strong>Daftar Kategori</strong>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <input
              type="text"
              placeholder="Search Books"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Button onClick={handleSearchSubmit}>Search</Button>

            {categories &&
              categories.map((category) => (
                <ListGroup.Item
                  key={category.id}
                  onClick={() => changeCategory(category.nama)}
                  className={
                    selectCategory === category.nama && "category-active"
                  }
                  style={{ cursor: "pointer" }}
                >
                  <h5>
                    <Icon nama={category.nama} /> {category.nama}
                  </h5>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </Col>
  );
};

Icon.propTypes = {
  nama: PropTypes.string.isRequired,
};
ListCategories.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  selectCategory: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
};

export default ListCategories;
