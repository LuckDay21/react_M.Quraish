import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fiksi from "./pages/Fiksi";
import NonFiksi from "./pages/NonFiksi";
import Komik from "./pages/Komik";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fiksi" element={<Fiksi />} />
          <Route path="/Non-Fiksi" element={<NonFiksi />} />
          <Route path="/Komik" element={<Komik />} />
        </Routes>
      </Router>
    </>
  );
}
