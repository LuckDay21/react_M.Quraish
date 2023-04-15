import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const ProductGet = createAsyncThunk("products/ProductGet", async () => {
  const data = await axios.get(
    "https://642d0c37bf8cbecdb4fc269a.mockapi.io/products"
  );
  return data.data;
});

export const ProductPost = createAsyncThunk(
  "products/ProductPost",
  async (params) => {
    const data = await axios.post(
      "https://642d0c37bf8cbecdb4fc269a.mockapi.io/products",
      params
    );
    return data.data;
  }
);

export const ProductDelete = createAsyncThunk(
  "products/ProductDelete",
  async (id) => {
    const data = await axios.delete(
      `https://642d0c37bf8cbecdb4fc269a.mockapi.io/products/${id}`
    );
    return data.data;
  }
);

export const ProductPut = createAsyncThunk(
  "products/ProductPut",
  async (params) => {
    const data = await axios.put(
      `https://642d0c37bf8cbecdb4fc269a.mockapi.io/products/${params.id}`,
      params
    );
    return data.data;
  }
);
