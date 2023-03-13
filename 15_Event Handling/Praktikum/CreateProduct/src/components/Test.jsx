import React, { useState } from "react";

function CreateProduct() {
  const [isIndonesian, setIsIndonesian] = useState(false);

  const toggleLanguage = () => {
    setIsIndonesian(!isIndonesian);
  };

  return (
    <div>
      <h1>{isIndonesian ? "Buat Akun" : "Create Product"}</h1>
      <p>
        {isIndonesian
          ? "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya."
          : "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."}
      </p>
      <form>{/* form elements */}</form>
      <button onClick={toggleLanguage}>
        {isIndonesian ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
      </button>
    </div>
  );
}

export default CreateProduct;
