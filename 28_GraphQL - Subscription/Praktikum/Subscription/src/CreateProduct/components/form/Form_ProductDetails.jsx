import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../ProductList/components/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useFormik } from "formik";
import { gql, useMutation, useQuery } from "@apollo/client";

export default function Form_ProductDetails() {
  const Params = useParams();

  const Get_Product = gql`
    query Get_Product($_eq: uuid!) {
      List_Product(where: { no: { _eq: $_eq } }) {
        no
        productName
        comment
      }
    }
  `;

  const Update_Comment = gql`
    mutation Update_Comment($_eq: uuid!, $comment: jsonb = "") {
      update_List_Product(
        where: { no: { _eq: $_eq } }
        _set: { comment: $comment }
      ) {
        returning {
          comment
        }
      }
    }
  `;

  const {
    loading: loadingGetProduct,
    error: errorGetProduct,
    data: dataGetProduct,
  } = useQuery(Get_Product, {
    variables: {
      _eq: Params.no,
    },
  });

  const Comment = dataGetProduct?.List_Product[0].comment || [];

  const [
    updateComment,
    {
      loading: loadingUpdateComment,
      error: errorUpdateComment,
      data: dataUpdateComment,
    },
  ] = useMutation(Update_Comment);

  const formik = useFormik({
    initialValues: {
      // no: uuidv4(),
      // productName: "",
      // productCategory: "",
      // imageProduct: null,
      // productFreshness: "",
      // productPrice: "",
      // productDescription: "",
      comment: "",
    },

    onSubmit: (values, { resetForm }) => {
      // // dispatch(
      // //   ProductPost({
      // //     ...values,
      // //     no: uuidv4,
      // //   })
      // // );
      // addProductById({
      //   variables: {
      //     no: values.no,
      //     productName: values.productName,
      //     productCategory: values.productCategory,
      //     imageProduct: values.imageProduct,
      //     productFreshness: values.productFreshness,
      //     productPrice: values.productPrice,
      //     productDescription: values.productDescription,
      //   },
      // });
      updateComment({
        variables: {
          _eq: Params.no,
          comment: [...Comment, values.comment],
        },
      });
      resetForm();
    },
  });

  return (
    <div>
      <Navbar />
      <h2>Product Details</h2>
      <p>Product No: {Params.no}</p>
      <p>Product Name: {Params.name}</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Comment"
          name="comment"
          className="me-2"
          aria-label="Comment"
          onChange={formik.handleChange}
        />
        <Button variant="outline-primary" type="submit">
          Add
        </Button>
      </form>
      <h3>Comment</h3>
      {Comment.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
