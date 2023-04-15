import "./css/landingpage.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function LandingPage() {
  useEffect(() => {
    alert("Welcome");
  }, []);

  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
