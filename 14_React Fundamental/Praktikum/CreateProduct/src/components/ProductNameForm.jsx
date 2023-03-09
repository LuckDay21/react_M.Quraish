import "../css/main.css";

export default function ProductNameForm() {
  return (
    <div className="col-sm-6 has-validation">
      <label htmlFor="validationProductName" className="form-label">
        Product name
      </label>
      <input
        type="text"
        className="form-control"
        id="product-name"
        placeholder=""
        required=""
      />
      <div className="invalid-feedback">Valid Product Name is required.</div>
      <div className="valid-feedback">Valid Product Name.</div>
    </div>
  );
}
