import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ProductDelete } from "../../../config/redux/products/ProductThunk";
import { useDispatch } from "react-redux";
import ProductSlice from "../../../config/redux/ProductData/ProductDataSlice";

export default function Database({ products, handleDelete, formik }) {
  const dispatch = useDispatch();

  const handleEdit = (product) => {
    dispatch(ProductSlice.actions.setIsEdit(true));
    formik.setValues({
      no: product.no,
      productName: product.productName,
      productCategory: product.productCategory,
      imageProduct: product.imageProduct,
      productFreshness: product.productFreshness,
      productPrice: product.productPrice,
      productDescription: product.productDescription,
      id: product.id,
    });
  };

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
              <th>Image Of Product</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <Link to={`/product/${product.no}/${product.productName}`}>
                    {product.no}
                  </Link>
                </td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.imageProduct}</td>
                <td>{product.productFreshness}</td>
                <td>{`$ ${product.productPrice}`}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this product?"
                        )
                      ) {
                        dispatch(ProductDelete(product.id));
                      }
                    }}
                  >
                    Delete
                  </Button>
                  <Button variant="warning" onClick={() => handleEdit(product)}>
                    Edit
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
