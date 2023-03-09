import "../css/main.css";
import BsLogo from "../img/bootstrap-logo.svg.png";

export default function Header() {
  return (
    <div className="py-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={BsLogo}
        alt=""
        width={72}
        height={57}
      />
      <h2>Create Product</h2>
      <p className="lead">
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
    </div>
  );
}
