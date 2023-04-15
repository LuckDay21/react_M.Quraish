import { gql, useQuery } from "@apollo/client";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, useParams } from "react-router-dom";
import Navbar from "../ProductList/components/Navbar";

export default function SearchedProduct() {
  const { name } = useParams();

  const Search_Product = gql`
    query Search_Product($_ilike: String!) {
      List_Product(where: { productName: { _ilike: $_ilike } }) {
        no
        productName
        productPrice
        productDescription
      }
    }
  `;

  const {
    loading: loadingSearchProduct,
    error: errorSearchProduct,
    data: dataSearchProduct,
  } = useQuery(Search_Product, {
    variables: {
      _ilike: name,
    },
  });

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <div>
          {dataSearchProduct?.List_Product.map((product) => (
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg>
                <div className="card-body">
                  <h3>{product.productName}</h3>
                  <h5>{`$ ${product.productPrice}`}</h5>
                  <p className="card-text">{product.productDescription}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        variant="primary"
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <Link
                          className="text-white"
                          to={`/product/${product.no}/${product.productName}`}
                        >
                          Detail View
                        </Link>
                      </Button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
