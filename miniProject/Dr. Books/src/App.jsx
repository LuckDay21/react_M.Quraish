import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Faq from "./pages/Faq";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </main>
      </Router>
    );
  }
}
