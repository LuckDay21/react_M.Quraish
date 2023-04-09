import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./CreateProduct/CreateProduct";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login/Login";
import React, { useState } from "react";
import Form_ProductDetails from "./CreateProduct/components/form/Form_ProductDetails";
import SignUp from "./Login/SignUp";
import { Provider } from "react-redux";
import store from "./config/redux/store";
import ProtectedRoute from "../utils/ProtectedRoute";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login setIsSignedIn={setIsSignedIn} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute isSignedIn={isSignedIn}>
                  <LandingPage setSignedIn={setIsSignedIn} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-product"
              element={
                <ProtectedRoute isSignedIn={isSignedIn}>
                  <CreateProduct setSignedIn={setIsSignedIn} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product/:no/:name"
              element={
                <ProtectedRoute isSignedIn={isSignedIn}>
                  <Form_ProductDetails setSignedIn={setIsSignedIn} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}
