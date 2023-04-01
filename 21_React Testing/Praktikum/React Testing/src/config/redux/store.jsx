import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductData/ProductDataSlice";

const store = configureStore({
  reducer: ProductSlice.reducer,
});

export default store;
