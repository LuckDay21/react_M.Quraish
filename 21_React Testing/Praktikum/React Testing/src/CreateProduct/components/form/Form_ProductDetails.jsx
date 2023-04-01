import React from "react";
import { useParams } from "react-router-dom";

export default function Form_ProductDetails() {
  const Params = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product No: {Params.no}</p>
      <p>Product Product Name: {Params.name}</p>
    </div>
  );
}
