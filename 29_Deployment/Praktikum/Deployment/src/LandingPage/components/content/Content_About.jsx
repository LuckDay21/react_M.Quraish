import Twitter from "../../svg/cib-twitter.svg";
import Instagram from "../../svg/cib-instagram.svg";
import Facebook from "../../svg/cib-facebook.svg";

export default function Content_About() {
  return (
    <section className="footer">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-4 my-4">
          <div className="section1 col mb-3">
            <h1>ARSHA</h1>
            <p>Arsha A108 Adam Street New York, NY 535022 United States</p>
            <br />
            <p>
              <strong>Phone:</strong> +1 5589 55488 55
              <strong>Email:</strong> info@example.com
            </p>
          </div>
          <div className="section2 col mb-3">
            <h1>Useful Links</h1>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  About us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Services
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Terms of service
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="section3 col mb-3">
            <h1>Our Services</h1>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Web Design
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Web Development
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Product Management
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Marketing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="text-muted">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          <div className="section4 col mb-3">
            <h1>Our Social Network</h1>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <ul className="list-unstyled d-flex">
              <li>
                <img src={Twitter} alt="twitter" width="36px" height="36px" />
              </li>
              <li className="ms-3">
                <img
                  src={Instagram}
                  alt="instagram"
                  width="36px"
                  height="36px"
                />
              </li>
              <li className="ms-3">
                <img src={Facebook} alt="facebook" width="36px" height="36px" />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
