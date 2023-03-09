import "../css/main.css";

export default function ProductFreshnessForm() {
  return (
    <div className="my-3">
      <label htmlFor="validationProductFreshness" className="form-lab">
        Product Freshness
      </label>
      <div className="form-check">
        <input
          id="product-freshness"
          name="productCondition"
          type="radio"
          className="form-check-input"
          required=""
        />
        <label className="form-check-label" htmlFor="new">
          Brand New
        </label>
      </div>
      <div className="form-check">
        <input
          id="product-freshness"
          name="productCondition"
          type="radio"
          className="form-check-input"
          required=""
        />
        <label className="form-check-label" htmlFor="second">
          Second Hand
        </label>
      </div>
      <div className="form-check">
        <input
          id="product-freshness"
          name="productCondition"
          type="radio"
          className="form-check-input"
          required=""
        />
        <label className="form-check-label" htmlFor="refurbished">
          Refurbished
        </label>
      </div>
    </div>
  );
}
