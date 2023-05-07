import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListCategories from "../components/ListCategories";
import Cart from "../components/Cart";
import { API_URL } from "../utils/constants";
import axios from "axios";
import Books from "../components/Books";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      selectCategory: "All Books",
      carts: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.getAllBooks();
    this.getCartList();
  }

  getAllBooks = () => {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const books = res.data;
        this.setState({ books });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getBooksByCategory = (category) => {
    const { searchQuery } = this.state;

    let url = API_URL + "products?category.nama=" + category;
    if (searchQuery !== "") {
      url += "&nama_contains=" + searchQuery;
    }

    axios
      .get(url)
      .then((res) => {
        const books = res.data;
        this.setState({ books, selectCategory: category });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getCartList = () => {
    axios
      .get(API_URL + "carts")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeCategory = (value) => {
    this.getBooksByCategory(value);
  };

  insertCart = (value) => {
    axios
      .get(API_URL + "carts?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const cart = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + "carts", cart)
            .then(() => {
              this.getCartList();
              swal({
                title: "Success!",
                text: "Buku Masuk Keranjang",
                icon: "success",
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const cart = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "carts/" + res.data[0].id, cart)
            .then(() => {
              swal({
                title: "Success!",
                text: "Buku Masuk Keranjang",
                icon: "success",
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  handleSearchSubmit = () => {
    const { selectCategory, searchQuery } = this.state;

    if (searchQuery !== "") {
      axios
        .get(
          API_URL +
            "products?nama=" +
            searchQuery +
            "&category.nama=" +
            selectCategory
        )
        .then((res) => {
          const books = res.data;
          this.setState({ books });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.getBooksByCategory(selectCategory);
    }
  };

  render() {
    const { books, selectCategory, carts } = this.state;

    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories
              changeCategory={this.changeCategory}
              selectCategory={selectCategory}
              searchQuery={this.state.searchQuery}
              handleSearch={this.handleSearch}
              handleSearchSubmit={this.handleSearchSubmit}
            />
            <Col>
              <h4>
                <strong>Daftar Buku</strong>
              </h4>
              <hr />
              <Row>
                {books &&
                  books.map((book) => (
                    <Books
                      key={book.id}
                      book={book}
                      insertCart={this.insertCart}
                    />
                  ))}
              </Row>
            </Col>
            <Cart
              carts={carts}
              {...this.props}
              getCartList={this.getCartList}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
