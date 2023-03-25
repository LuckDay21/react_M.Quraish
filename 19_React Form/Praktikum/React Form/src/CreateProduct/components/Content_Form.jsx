import Form_Database from "./form/Form_Database";
import Form_RandomNumber from "./form/Form_RandomNumber";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Content_Form() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    no: "",
    productName: "",
    productCategory: "",
    imageProduct: "",
    productFreshness: "",
    productPrice: "",
    productDescription: "",
  });
  const [editing, setEditing] = useState(false);
  const [editProduct, setEditProduct] = useState({
    no: "",
    productName: "",
    productCategory: "",
    imageProduct: "",
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
      imageProduct: product.imageProduct,
      productFreshness: product.productFreshness,
      productPrice: product.productPrice,
      productDescription: product.productDescription,
    };

    setProducts([...products, newProduct]);
    setProduct({
      no: "",
      productName: "",
      productCategory: "",
      imageProduct: "",
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
      imageProduct: editProduct.imageProduct,
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
      imageProduct: "",
      productFreshness: "",
      productPrice: "",
      productDescription: "",
    });
    setEditing(false);
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Product Name is required"),
    productCategory: Yup.string().required("Product Category is required"),
    imageProduct: Yup.string().required("Image Of Product is required"),
    productFreshness: Yup.string().required("Product Freshness is required"),
    productPrice: Yup.number()
      .required("Product Price is required")
      .positive("Product price must be a positive number"),
  });

  const productCategories = ["Category 1", "Category 2", "Category 3"];

  return (
    <div className="justify-content-center row g-5">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Detail Product</h4>
        <Formik
          initialValues={{
            productName: "",
            productCategory: "",
            imageProduct: "",
            productFreshness: "",
            productPrice: "",
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form
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
                  <Field
                    type="text"
                    className="form-control"
                    id="product-name"
                    name="productName"
                    required
                    value={
                      editing ? editProduct.productName : product.productName
                    }
                    onChange={editing ? handleEditChange : handleInputChange}
                  />
                  {touched.productName && errors.productName && (
                    <div>{errors.productName}</div>
                  )}
                </div>
                <div />
                <div className="col-md-5">
                  <label htmlFor="productcategory" className="form-label">
                    Product Category
                  </label>
                  <Field
                    className="form-select"
                    id="product-category"
                    required
                    name="productCategory"
                    as="select"
                    value={
                      editing
                        ? editProduct.productCategory
                        : product.productCategory
                    }
                    onChange={editing ? handleEditChange : handleInputChange}
                  >
                    <option value="">Select a category</option>
                    {productCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Field>
                  {touched.productCategory && errors.productCategory && (
                    <div>{errors.productCategory}</div>
                  )}
                </div>
                <div />
                <div className="col-md-4 has-validation">
                  <label htmlFor="imageproduct" className="form-label">
                    Image of Product
                  </label>
                  <Field
                    id="image-product"
                    className="form-control"
                    required
                    type="file"
                    name="imageProduct"
                    value={
                      editing ? editProduct.imageProduct : product.imageProduct
                    }
                    onChange={editing ? handleEditChange : handleInputChange}
                  />
                  {touched.imageProduct && errors.imageProduct && (
                    <div>{errors.imageProduct}</div>
                  )}
                </div>
                <div />
                <div className="my-3">
                  <label
                    htmlFor="validationProductFreshness"
                    className="form-lab"
                  >
                    Product Freshness
                  </label>
                  <div className="form-check">
                    <Field
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
                    <Field
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
                    <Field
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
                  {touched.productFreshness && errors.productFreshness && (
                    <div>{errors.productFreshness}</div>
                  )}
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
                  <label
                    htmlFor="validationProductPrice"
                    className="form-label"
                  >
                    Product Price
                  </label>
                  <Field
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
                  {touched.productPrice && errors.productPrice && (
                    <div>{errors.productPrice}</div>
                  )}
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
