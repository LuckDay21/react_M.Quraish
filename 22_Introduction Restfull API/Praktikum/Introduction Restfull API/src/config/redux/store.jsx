import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductData/ProductDataSlice";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer: ProductSlice.reducer,
  middleware: [thunkMiddleware],
});

export default store;
