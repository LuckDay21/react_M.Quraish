import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./CreateProduct/CreateProduct";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login/Login";
import React from "react";
import Form_ProductDetails from "./CreateProduct/components/form/Form_ProductDetails";
import SignUp from "./Login/SignUp";
import { Provider } from "react-redux";
import store from "./config/redux/store";

export default function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route
              path="/product/:no/:name"
              element={<Form_ProductDetails />}
            />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}
