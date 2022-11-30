import Image from "next/image";
import About from "../components/about.jsx";
import Intro from "../components/intro.jsx";
import MyNavbar from "../components/navbar.jsx";
import Counter from "../components/counter.jsx";
import Why from "../components/why.jsx";
import Valued from "../components/valued.jsx";
import Testimonial from "../components/testimonial.jsx";
import Projects from "../components/projects.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <MyNavbar></MyNavbar>
      <Intro></Intro>
      <About></About>
      <Counter></Counter>
      <Why></Why>
      <Valued></Valued>
      <Testimonial></Testimonial>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
