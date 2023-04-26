import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Success from "./pages/Success";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
      </Router>
    );
  }
}
