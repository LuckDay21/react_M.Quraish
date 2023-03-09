import "../css/main.css";

export default function ImageOfProduct() {
  return (
    <div className="col-md-4 has-validation">
      <label htmlFor="imageproduct" className="form-label">
        Image of Product
      </label>
      <input
        type="file"
        className="form-control"
        id="image-product"
        required=""
      />
    </div>
  );
}
