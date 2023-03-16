import Form_Database from "./form/Form_Database";
import Form_RandomNumber from "./form/Form_RandomNumber";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Content_Form() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    no: "",
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    productDescription: "",
  });
  const [editing, setEditing] = useState(false);
  const [editProduct, setEditProduct] = useState({
    no: "",
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    productDescription: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      no: uuidv4(),
      productName: product.productName,
      productCategory: product.productCategory,
      productFreshness: product.productFreshness,
      productPrice: product.productPrice,
      productDescription: product.productDescription,
    };

    setProducts([...products, newProduct]);
    setProduct({
      no: "",
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
      productDescription: "",
    });
  };

  const handleDelete = (no) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const filteredProducts = products.filter((product) => product.no !== no);
      setProducts(filteredProducts);
    }
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleEdit = (product) => {
    setEditing(true);
    setEditProduct(product);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedProduct = {
      no: editProduct.no,
      productName: editProduct.productName,
      productCategory: editProduct.productCategory,
      productFreshness: editProduct.productFreshness,
      productPrice: editProduct.productPrice,
      productDescription: editProduct.productDescription,
    };
    const updatedProducts = products.map((product) =>
      product.no === editProduct.no ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditProduct({
      no: "",
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
      productDescription: "",
    });
    setEditing(false);
  };

  return (
    <div className="justify-content-center row g-5">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Detail Product</h4>
        <form
          className="was-validated"
          noValidate=""
          onSubmit={editing ? handleUpdate : handleSubmit}
        >
          <div className="row g-3">
            <Form_RandomNumber />
            <div />
            <div className="col-sm-6 has-validation">
              <label htmlFor="validationProductName" className="form-label">
                Product name
              </label>
              <input
                type="text"
                className="form-control"
                id="product-name"
                placeholder=""
                required
                name="productName"
                value={editing ? editProduct.productName : product.productName}
                onChange={editing ? handleEditChange : handleInputChange}
              />
              <div className="invalid-feedback">
                Valid Product Name is required.
              </div>
              {product.productName.length > 10 && (
                <div style={{ color: "red" }}>
                  Product name must not exceed 10 characters
                </div>
              )}
            </div>
            <div />
            <div className="col-md-5">
              <label htmlFor="productcategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select"
                id="product-category"
                required
                name="productCategory"
                value={
                  editing
                    ? editProduct.productCategory
                    : product.productCategory
                }
                onChange={editing ? handleEditChange : handleInputChange}
              >
                <option value="">Choose...</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid Product Category.
              </div>
            </div>
            <div />
            <div className="my-3">
              <label htmlFor="validationProductFreshness" className="form-lab">
                Product Freshness
              </label>
              <div className="form-check">
                <input
                  id="product-freshness"
                  className="form-check-input"
                  required
                  type="radio"
                  name="productFreshness"
                  value="Brand New"
                  checked={
                    editing
                      ? editProduct.productFreshness === "Brand New"
                      : product.productFreshness === "Brand New"
                  }
                  onChange={editing ? handleEditChange : handleInputChange}
                />
                <label className="form-check-label" htmlFor="new">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  id="product-freshness"
                  className="form-check-input"
                  required
                  type="radio"
                  name="productFreshness"
                  value="Second Hand"
                  checked={
                    editing
                      ? editProduct.productFreshness === "Second Hand"
                      : product.productFreshness === "Second Hand"
                  }
                  onChange={editing ? handleEditChange : handleInputChange}
                />
                <label className="form-check-label" htmlFor="second">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  id="product-freshness"
                  className="form-check-input"
                  required
                  type="radio"
                  name="productFreshness"
                  value="Refurbished"
                  checked={
                    editing
                      ? editProduct.productFreshness === "Refurbished"
                      : product.productFreshness === "Refurbished"
                  }
                  onChange={editing ? handleEditChange : handleInputChange}
                />
                <label className="form-check-label" htmlFor="refurbished">
                  Refurbished
                </label>
              </div>
            </div>
            <div className="">
              <label htmlFor="decription" className="form-label">
                Additional Description
              </label>
              <textarea
                id="additional-description"
                className="form-control col-12"
                aria-label="Additional Description"
                rows={5}
                required
                defaultValue={""}
                name="productDescription"
                value={
                  editing
                    ? editProduct.productDescription
                    : product.productDescription
                }
                onChange={editing ? handleEditChange : handleInputChange}
              />
            </div>
            <div />
            <div className="col-12">
              <label htmlFor="validationProductPrice" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                className="form-control"
                id="product-price"
                placeholder="$ 1"
                required
                name="productPrice"
                value={
                  editing ? editProduct.productPrice : product.productPrice
                }
                onChange={editing ? handleEditChange : handleInputChange}
              />
              <div className="invalid-feedback">
                Please enter a valid Product Price.
              </div>
            </div>
            <button
              id="submit-button"
              className="w-100 btn btn-primary btn-lg"
              type="submit"
            >
              {editing ? "Update Product" : "Create Product"}
            </button>
            <Form_Database
              products={products}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
