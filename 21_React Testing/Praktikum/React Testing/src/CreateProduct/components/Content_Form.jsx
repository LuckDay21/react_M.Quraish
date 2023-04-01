import Form_Database from "./form/Form_Database";
import Form_RandomNumber from "./form/Form_RandomNumber";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import ProductSlice from "../../config/redux/ProductData/ProductDataSlice";

export default function Content_Form() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.listProduct);

  const handleDelete = (no) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const filteredProducts = products.filter((product) => product.no !== no);
      dispatch(ProductSlice.actions.update(filteredProducts));
    }
  };

  const validationSchema = Yup.object({
    productName: Yup.string()
      .required("Product Name is required")
      .matches(
        /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/,
        "Name must not contain symbols"
      )
      .min(5, "Product Name Too Short!")
      .max(25, "Product Name must not exceed 25 characters"),
    productCategory: Yup.string().required("Product Category is required"),
    imageProduct: Yup.string().required("Image Of Product is required"),
    productFreshness: Yup.string().required("Product Freshness is required"),
    productPrice: Yup.number()
      .required("Product Price is required")
      .positive("Product price must be a positive number"),
    productDescription: Yup.string().required(
      "Additional Description is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      no: uuidv4(),
      productName: "",
      productCategory: "",
      imageProduct: null,
      productFreshness: "",
      productPrice: "",
      productDescription: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, { setValues, resetForm }) => {
      setValues({ ...values, uuid: uuidv4() });
      dispatch(ProductSlice.actions.add([...products, values]));
      resetForm();
    },
  });

  const productCategories = ["Category 1", "Category 2", "Category 3"];

  return (
    <div className="justify-content-center row g-5">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Detail Product</h4>

        <form onSubmit={formik.handleSubmit}>
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
                name="productName"
                data-testid="productName-test"
                value={formik.values.productName}
                onChange={formik.handleChange}
              />
              {formik.touched.productName && formik.errors.productName && (
                <div className="text-danger">{formik.errors.productName}</div>
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
                name="productCategory"
                data-testid="productCategory-test"
                as="select"
                value={formik.values.productCategory}
                onChange={formik.handleChange}
              >
                <option value="">Select a category</option>
                {productCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {formik.touched.productCategory &&
                formik.errors.productCategory && (
                  <div className="text-danger">
                    {formik.errors.productCategory}
                  </div>
                )}
            </div>
            <div />
            <div className="col-md-4 has-validation">
              <label htmlFor="imageproduct" className="form-label">
                Image of Product
              </label>
              <input
                id="image-product"
                className="form-control"
                type="file"
                name="imageProduct"
                value={formik.values.imageProduct}
                onChange={formik.handleChange}
              />
              {formik.touched.imageProduct && formik.errors.imageProduct && (
                <div className="text-danger">{formik.errors.imageProduct}</div>
              )}
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
                  type="radio"
                  name="productFreshness"
                  value="Brand New"
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="new">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  id="product-freshness"
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  value="Second Hand"
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="second">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  id="product-freshness"
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  value="Refurbished"
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="refurbished">
                  Refurbished
                </label>
              </div>
              {formik.touched.productFreshness &&
                formik.errors.productFreshness && (
                  <div className="text-danger">
                    {formik.errors.productFreshness}
                  </div>
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
                value={formik.values.productDescription}
                onChange={formik.handleChange}
              />
              {formik.touched.productDescription &&
                formik.errors.productDescription && (
                  <div className="text-danger">
                    {formik.errors.productDescription}
                  </div>
                )}
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
                name="productPrice"
                value={formik.values.productPrice}
                onChange={formik.handleChange}
              />
              {formik.touched.productPrice && formik.errors.productPrice && (
                <div className="text-danger">{formik.errors.productPrice}</div>
              )}
            </div>
            <button
              id="submit-button"
              className="w-100 btn btn-primary btn-lg"
              type="submit"
            >
              Create Product
            </button>
            <Form_Database products={products} handleDelete={handleDelete} />
          </div>
        </form>
      </div>
    </div>
  );
}
