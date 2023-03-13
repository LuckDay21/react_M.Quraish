import "../css/main.css";
import React, { useState } from "react";
import BsLogo from "../img/bootstrap-logo.svg.png";

export default function Header() {
  const [id, setId] = useState(false);

  const toggleLanguage = () => {
    setId(!id);
  };

  return (
    <div className="py-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={BsLogo}
        alt=""
        width={72}
        height={57}
      />
      <h2>{id ? "Buat Akun" : "Create Product"}</h2>
      <p className="lead">
        {id
          ? "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya."
          : "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."}
      </p>
      <form>{/* form elements */}</form>
      <button className="btn btn-primary btn-lg" onClick={toggleLanguage}>
        {id ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
      </button>
    </div>
  );
}
