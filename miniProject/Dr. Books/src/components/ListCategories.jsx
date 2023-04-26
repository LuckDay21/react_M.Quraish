/* eslint-disable react/prop-types */
import axios from "axios";
import { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faPerson,
  faDungeon,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Fiksi")
    return <FontAwesomeIcon icon={faRobot} className="mt-2" />;
  if (nama === "Non-Fiksi")
    return <FontAwesomeIcon icon={faPerson} className="mt-2 ms-1 me-2" />;
  if (nama === "Komik")
    return <FontAwesomeIcon icon={faDungeon} className="mt-2 me-1" />;

  return <FontAwesomeIcon icon={faRobot} className="mt-2" />;
};

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, selectCategory } = this.props;

    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
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
      </Col>
    );
  }
}
