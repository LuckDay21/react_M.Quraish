import "./css/main.css";
import Navbar from "./components/Navbar";
import Content_Header from "./components/Content_Header";
import Content_Form from "./components/Content_Form";
import { useEffect } from "react";

export default function CreateProduct() {
  useEffect(() => {
    alert("Welcome");
  }, []);

  return (
    <>
      <Navbar />
      <Content_Header />
      <Content_Form />
    </>
  );
}
