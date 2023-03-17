import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Database({ products, handleDelete, handleEdit }) {
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>List Product</h2>
        <table id="table-body" className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.no}>
                <td>
                  <Link to={`/product/${product.no}/${product.productName}`}>
                    {product.no}
                  </Link>
                </td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                <td>{`$ ${product.productPrice}`}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(product)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product.no)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
