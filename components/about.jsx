import Image from "next/image";
import abouttopicon from "../assets/abouttopicon.png";
import aboutImage from "../assets/about-3.jpg";

const About = () => {
  return (
    <div id="about" className="mt-5 about-section">
      <div className="">
        <div className="aboutIcon ">
          <Image src={abouttopicon} layout="intrinsic"></Image>
        </div>

        <div className="about-below  align-items-center px-5">
          <div className="left" data-aos="fade-left">
            <h4 className="fs-5 featuredTitle">ABOUT COMPANY</h4>
            <h2> Leading Cleaning Agency Bring Professionalism.</h2>
            <p className="other-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              reprehenderit explicabo obcaecati eligendi alias ea mollitia sit
              et repudiandae placeat?
            </p>
            <div className="what-we-offer">
              <ul>
                <li>
                  {" "}
                  We are always ensure to give our best for our customer.
                </li>
                <li> Give professional support by our professional.</li>
                <li> Our mission is to provide quality product.</li>
              </ul>
            </div>

            <button class="button-79 discover-button" role="button">
              Discover More
            </button>
          </div>
          <div className="right" data-aos="fade-right">
            <div className="about-image-container">
              <Image src={aboutImage} layout="responsive"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
