import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductNameForm from "./components/ProductNameForm";
import ProductCategoryForm from "./components/ProductCategoryForm";
import ImageOfProduct from "./components/ImageOfProduct";
import ProductFreshnessForm from "./components/ProductFreshnessForm";
import AdditionalDescriptionForm from "./components/AdditionalDescriptionForm";
import ProductPriceForm from "./components/ProductPriceForm";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  return (
    <>
      <Navbar />

      <section className="mainP">
        <div className="container">
          <main>
            <Header></Header>
            <div className="justify-content-center row g-5">
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Detail Product</h4>
                <form className="was-validated" noValidate="">
                  <div className="row g-3">
                    <ProductNameForm />

                    <div></div>

                    <ProductCategoryForm />

                    <div></div>

                    <ImageOfProduct />

                    <div></div>

                    <ProductFreshnessForm />

                    <AdditionalDescriptionForm />

                    <div></div>

                    <ProductPriceForm />
                  </div>

                  <SubmitButton />
                </form>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
