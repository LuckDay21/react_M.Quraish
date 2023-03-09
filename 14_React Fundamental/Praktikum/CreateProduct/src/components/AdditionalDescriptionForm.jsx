import "../css/main.css";

export default function AdditionalDescriptionForm() {
  return (
    <div className="">
      <label htmlFor="decription" className="form-label">
        Additional Description
      </label>
      <textarea
        id="additional-description"
        className="form-control col-12"
        aria-label="Additional Description"
        rows={5}
        required=""
        defaultValue={""}
      />
    </div>
  );
}
