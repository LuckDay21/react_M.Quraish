import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  updateProductName,
} from "./features/Products";

export default function Content_Form() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.value);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [image, setImage] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [newProductName, setNewProductName] = useState("");

  const resetForm = () => {
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
    setAdditionalDescription("");
  };

  return (
    <div className="justify-content-center row g-5">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Detail Product</h4>
        <form className="was-validated" noValidate="">
          <div className="row g-3">
            <div className="col-sm-6 has-validation">
              <label htmlFor="validationProductName" className="form-label">
                Product name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Product Name..."
                name="productName"
                id="productName"
                value={productName}
                required
                onChange={(event) => {
                  setProductName(event.target.value);
                }}
              />
              <div className="invalid-feedback">
                Valid Product Name is required.
              </div>
            </div>
            <div />
            <div className="col-md-5">
              <label htmlFor="productcategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select"
                name="productCategory"
                id="productCategory"
                value={productCategory}
                required
                onChange={(event) => {
                  setProductCategory(event.target.value);
                }}
              >
                <option value="">Choose...</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
              </select>
              <div className="invalid-feedback">
                Valid Product Category is required.
              </div>
            </div>
            <div />
            <div className="my-3">
              <label htmlFor="validationProductFreshness" className="form-lab">
                Product Freshness
              </label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Brand New"
                  name="productFreshness"
                  id="productFreshness"
                  required
                  onChange={(event) => {
                    setProductFreshness(event.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="new">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Second Hand"
                  name="productFreshness"
                  id="productFreshness"
                  required
                  onChange={(event) => {
                    setProductFreshness(event.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="second">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Refurbished"
                  name="productFreshness"
                  id="productFreshness"
                  required
                  onChange={(event) => {
                    setProductFreshness(event.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="refurbished">
                  Refurbished
                </label>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="validationProductPrice" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="$ 1"
                name="productPrice"
                id="productPrice"
                value={productPrice}
                required
                onChange={(event) => {
                  setProductPrice(event.target.value);
                }}
              />
              <div className="invalid-feedback">
                Valid Product Price is required.
              </div>
            </div>
            <div />
            <div className="col-md-4 has-validation">
              <label htmlFor="imageproduct" className="form-label">
                Image of Product
              </label>
              <input
                type="file"
                className="form-control"
                name="image"
                id="image"
                required
                onChange={(event) => {
                  setImage(event.target.value);
                }}
              />
              <div className="invalid-feedback">
                Valid Image of Product is required.
              </div>
            </div>
            <div />
            <div className="">
              <label htmlFor="decription" className="form-label">
                Additional Description
              </label>
              <textarea
                className="form-control col-12"
                aria-label="Additional Description"
                name="additionalDescription"
                id="additionalDescription"
                value={additionalDescription}
                rows={5}
                required
                defaultValue={""}
                onChange={(event) => {
                  setAdditionalDescription(event.target.value);
                }}
              />
            </div>
            <button
              className="w-100 btn btn-primary btn-lg"
              onClick={() => {
                dispatch(
                  addProduct({
                    id: uuidv4(),
                    productName: productName,
                    productCategory: productCategory,
                    productFreshness: productFreshness,
                    productPrice: `$ ${productPrice}`,
                    image: image,
                    additionalDescription: additionalDescription,
                  })
                );
                event.preventDefault();
                resetForm();
              }}
            >
              {" "}
              Add Product
            </button>
          </div>
        </form>
        <div className="displayProducts">
          <div className="py-5 text-center">
            <h2>List Product</h2>
            {productList.map((product) => {
              return (
                <div>
                  <h5>
                    {" "}
                    <Link to={`/product/${product.id}/${product.productName}`}>
                      {product.id}
                    </Link>
                  </h5>
                  <h5> {product.productName}</h5>
                  <h5> {product.productCategory}</h5>
                  <h5> {product.productFreshness}</h5>
                  <h5> {product.productPrice}</h5>
                  <h5> {product.image}</h5>
                  <h5> {product.additionalDescription}</h5>
                  <input
                    type="text"
                    placeholder="New Product Name..."
                    onChange={(event) => {
                      setNewProductName(event.target.value);
                    }}
                  />
                  <Button
                    variant="warning"
                    onClick={() => {
                      dispatch(
                        updateProductName({
                          id: product.id,
                          productName: newProductName,
                        })
                      );
                    }}
                  >
                    Update Product Name
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(deleteProduct({ id: product.id }));
                    }}
                  >
                    Delete Product
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
