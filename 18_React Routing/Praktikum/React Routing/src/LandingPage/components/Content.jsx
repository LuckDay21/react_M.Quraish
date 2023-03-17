import Content_About from "./content/Content_About";
import Content_Carousel from "./content/Content_Carousel";
import Content_Hero from "./content/Content_Hero";
import Content_Subscribe from "./content/Content_Subscribe";

export default function Content() {
  return (
    <>
      <Content_Hero />
      <Content_Carousel />
      <Content_Subscribe />
      <Content_About />
    </>
  );
}
