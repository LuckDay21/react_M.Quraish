import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../FakeData";

export const productSlice = createSlice({
  name: "products",
  initialState: { value: ProductsData },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload.id
      );
    },

    updateProductName: (state, action) => {
      state.value.map((product) => {
        if (product.id === action.payload.id) {
          product.productName = action.payload.productName;
        }
      });
    },
  },
});

export const { addProduct, deleteProduct, updateProductName } =
  productSlice.actions;
export default productSlice.reducer;
