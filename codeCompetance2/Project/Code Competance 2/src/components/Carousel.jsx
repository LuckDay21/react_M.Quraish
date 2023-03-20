import Home_1 from "../img/home-1.jpg";
import Home_2 from "../img/home-2.jpg";
import Home_3 from "../img/home-3.jpg";

export default function Carousel() {
  return (
    <>
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleIndicators"
      >
        <div className="carousel-indicators">
          <button
            aria-label="Slide 1"
            className="active"
            data-bs-slide-to={0}
            data-bs-target="#carouselExampleIndicators"
            type="button"
          />
          <button
            aria-label="Slide 2"
            data-bs-slide-to={1}
            data-bs-target="#carouselExampleIndicators"
            type="button"
          />
          <button
            aria-label="Slide 3"
            data-bs-slide-to={2}
            data-bs-target="#carouselExampleIndicators"
            type="button"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="..." className="d-block w-100" src={Home_1} />
            <div className="carousel-caption">
              <h5>Your Dream Mod</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p>
                <a className="btn btn-warning mt-3" href="#">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="..." className="d-block w-100" src={Home_2} />
            <div className="carousel-caption">
              <h5>Always Dedicated</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p>
                <a className="btn btn-warning mt-3" href="#">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="..." className="d-block w-100" src={Home_3} />
            <div className="carousel-caption">
              <h5>24/7 Maintenance</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p>
                <a className="btn btn-warning mt-3" href="#">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
