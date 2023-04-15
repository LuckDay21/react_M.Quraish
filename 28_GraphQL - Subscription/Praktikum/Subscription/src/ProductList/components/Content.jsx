import { gql, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

export default function Content() {
  const navigate = useNavigate();

  const Get_Product = gql`
    query Get_Product {
      List_Product {
        no
        productName
        productPrice
        productDescription
      }
    }
  `;

  const {
    loading: loadingGetProduct,
    error: errorGetProduct,
    data: dataGetProduct,
  } = useQuery(Get_Product);

  const formik = useFormik({
    initialValues: {
      search: "",
    },

    onSubmit: (values, { resetForm }) => {
      navigate(`/product/${values.search}`);
      resetForm();
    },
  });

  return (
    <section className="product">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1>PRODUCT LIST</h1>
          </div>
          <div>
            <Form className="d-flex" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="Search"
                name="search"
                className="me-2"
                aria-label="Search"
                onChange={formik.handleChange}
              />
              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {dataGetProduct?.List_Product.map((product) => (
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg>
                <div className="card-body">
                  <h3>{product.productName}</h3>
                  <h5>{`$ ${product.productPrice}`}</h5>
                  <p className="card-text">{product.productDescription}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        variant="primary"
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <Link
                          className="text-white"
                          to={`/product/${product.no}/${product.productName}`}
                        >
                          Detail View
                        </Link>
                      </Button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="loadmore d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => navigate("/product")}
          >
            Load More ...
          </button>
        </div>
      </div>
    </section>
  );
}
