import "./css/main.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portofolio";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
