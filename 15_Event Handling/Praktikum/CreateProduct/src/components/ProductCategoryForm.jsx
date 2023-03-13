import "../css/main.css";

export default function ProductCategoryForm() {
  return (
    <div className="col-md-5">
      <label htmlFor="productcategory" className="form-label">
        Product Category
      </label>
      <select className="form-select" id="product-category" required>
        <option value="">Choose...</option>
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
      </select>
      <div className="invalid-feedback">
        Please select a valid Product Category.
      </div>
    </div>
  );
}
