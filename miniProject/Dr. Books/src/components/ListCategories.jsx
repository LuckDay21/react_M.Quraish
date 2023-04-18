import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faPerson,
  faDungeon,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function ListCategories() {
  return (
    <div className="col-md-2">
      <h4>
        <strong>Daftar Kategori</strong>
      </h4>
      <hr />
      <ListGroup>
        <ListGroup.Item>
          <h5>
            <FontAwesomeIcon
              icon={faRobot}
              style={{ color: "#8a2be2" }}
              className="mt-2"
            />{" "}
            <Link to={"/Fiksi"} className="text-decoration-none text-black">
              Fiksi
            </Link>
          </h5>
        </ListGroup.Item>
        <ListGroup.Item>
          <h5>
            <FontAwesomeIcon
              icon={faPerson}
              style={{ color: "#8a2be2" }}
              className="mt-2 ms-1 me-2"
            />{" "}
            <Link to={"/Non-Fiksi"} className="text-decoration-none text-black">
              Non-Fiksi
            </Link>
          </h5>
        </ListGroup.Item>
        <ListGroup.Item>
          <h5>
            <FontAwesomeIcon
              icon={faDungeon}
              style={{ color: "#8a2be2" }}
              className="mt-2 me-1"
            />{" "}
            <Link to={"/Komik"} className="text-decoration-none text-black">
              Komik
            </Link>
          </h5>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
