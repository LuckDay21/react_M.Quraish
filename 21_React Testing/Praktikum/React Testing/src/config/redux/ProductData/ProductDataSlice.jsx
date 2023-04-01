import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [
    {
      no: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      imageProduct: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      productDescription: "Doe",
    },
  ],
};

const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        listProduct: action.payload,
      };
    },

    update: (state, action) => {
      return {
        ...state,
        listProduct: action.payload,
      };
    },
  },
});

export default ProductSlice;
