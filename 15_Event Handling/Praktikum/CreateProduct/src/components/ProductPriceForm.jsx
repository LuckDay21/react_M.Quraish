import "../css/main.css";

export default function ProductPriceForm() {
  return (
    <div className="col-12">
      <label htmlFor="validationProductPrice" className="form-label">
        Product Price
      </label>
      <input
        type="number"
        className="form-control"
        id="product-price"
        placeholder="$ 1"
        required
      />
      <div className="invalid-feedback">
        Please enter a valid Product Price.
      </div>
    </div>
  );
}
