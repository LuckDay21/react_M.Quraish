import { createSlice } from "@reduxjs/toolkit";
import {
  ProductDelete,
  ProductGet,
  ProductPost,
  ProductPut,
} from "../products/ProductThunk";

const initialState = {
  listProduct: [],
  type: "",
  isEdit: false,
};

const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setIsEdit: (state, action) => {
      return { ...state, isEdit: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ProductGet.fulfilled, (state, action) => {
        return { ...state, listProduct: action.payload, type: action.type };
      })
      .addCase(ProductPost.fulfilled, (state, action) => {
        return { ...state, type: action.type };
      })
      .addCase(ProductDelete.fulfilled, (state, action) => {
        return {
          ...state,
          listProduct: state.listProduct.filter(
            (product) => product.id !== action.payload
          ),
          type: action.type,
        };
      })
      .addCase(ProductPut.fulfilled, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
  },
});

export default ProductSlice;
