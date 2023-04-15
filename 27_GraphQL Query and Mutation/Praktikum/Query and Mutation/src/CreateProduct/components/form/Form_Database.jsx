import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ProductDelete } from "../../../config/redux/products/ProductThunk";
import { useDispatch } from "react-redux";
import ProductSlice from "../../../config/redux/ProductData/ProductDataSlice";
import { gql, useMutation, useQuery } from "@apollo/client";

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

  const Get_Product = gql`
    query Get_Product {
      List_Product {
        no
        productName
        productCategory
        imageProduct
        productFreshness
        productPrice
        productDescription
      }
    }
  `;

  const Delete_Product = gql`
    mutation Delete_Product($no: uuid!) {
      delete_List_Product_by_pk(no: $no) {
        no
      }
    }
  `;

  const {
    loading: loadingGetProduct,
    error: errorGetProduct,
    data: dataGetProduct,
  } = useQuery(Get_Product);

  const [
    deleteProductById,
    {
      loading: loadingDeleteProduct,
      error: errorDeleteProduct,
      data: dataDeleteProduct,
    },
  ] = useMutation(Delete_Product);

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
            {dataGetProduct?.List_Product.map((product) => (
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
                        deleteProductById({
                          variables: {
                            no: product.no,
                          },
                        });
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
