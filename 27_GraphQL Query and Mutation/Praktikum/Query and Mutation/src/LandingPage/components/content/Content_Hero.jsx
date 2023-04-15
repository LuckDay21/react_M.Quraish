import Hero from "../../img/hero-img.png";

export default function Content_Hero() {
  return (
    <section className="main">
      <div className="container col-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={Hero}
              className="d-block mx-lg-auto img-fluid"
              alt="hero-img"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Better Solutions For Your Business
            </h1>
            <p className="lead">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Get Started
              </button>
              <button type="button" className="btn btn-link btn-lg px-4">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
