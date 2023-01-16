import rice from "../assets/slid.jpg";
import Image from "next/image";
import service1 from "../assets/services/1.png";
import service2 from "../assets/services/2.png";
import service3 from "../assets/services/3.png";

const Intro = () => {
  return (
    <div>
      <div class="absolute-bg-intro d-flex justify-content-center align-items-center">
        <div className="">
          <Image
            className="absolute-bg-img"
            src={rice}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div class=" position-absolute text-center">
          <div class=" intro-section">
            <h6 className="welcome " data-aos="fade-up">
              Welcome to tmz
            </h6>
            <h2 class="commercial" data-aos="fade-up">
              Commercial{" "}
            </h2>
            <h4 className="cservices" data-aos="fade-up">
              Cleaning services
            </h4>
            <p class=" other-intro " data-aos="fade-up">
              Suitable for all your cleaning services <br />
            </p>
            <div class="d-flex  justify-content-center mt-4" data-aos="fade-up">
              <a href="#about">
                <button class="button-88 " role="button">
                  Explore
                  <i
                    style={{ marginLeft: "10px" }}
                    class="bi bi-arrow-down"
                  ></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------Featured section ---------------------------------------------- */}

      <div className="d-lg-flex featuredsection mx-lg-5  container justify-content-between align-items-center">
        <div className="left ml-lg-5">
          <h5 className="featuredTitle" data-aos="fade-left">
            Featured Services
          </h5>
          <h2 className="twentyFiveYears" data-aos="fade-left">
            25+ Years We have provided high-quality cleaning
          </h2>
        </div>
        <div className="right">
          <h5 className="featuredright mt-5 mt-lg-none" data-aos="fade-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum
            adipisci autem magnam. Aliquid, aliquam consectetur quis hic ipsa at
            eos necessitatibus deleniti tempore.
          </h5>
        </div>
      </div>

      <div className="mt-3" data-aos="fade-up">
        <div class="rs-services services-style4 pt-115 pb-120 md-pt-75 md-pb-80">
          <div class="container mt-5">
            <div class="row ">
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="services-item">
                  <div className="d-flex justify-content-between">
                    <div class="services-icon">
                      <Image src={service1} layout="intrinsic" />
                    </div>
                    <div className="serial-no">01</div>
                  </div>
                  <div class="services-text">
                    <h3 class="title"> COVID-19 Cleaning</h3>
                    <p class="services-txt">
                      {" "}
                      Quisque placerat vitae lacus ut scelet risque. Fusce
                      luctus odio ac nibh luctus, in porttitor theo lacus
                      egestas.
                    </p>
                    <button class="button-41" role="button">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="services-item">
                  <div className="d-flex justify-content-between">
                    <div class="services-icon">
                      <Image src={service2} layout="intrinsic" />
                    </div>
                    <div className="serial-no">02</div>
                  </div>
                  <div class="services-text">
                    <h3 class="title"> Commercial Cleaning</h3>
                    <p class="services-txt">
                      {" "}
                      Quisque placerat vitae lacus ut scelet risque. Fusce
                      luctus odio ac nibh luctus, in porttitor theo lacus
                      egestas.
                    </p>
                    <button class="button-41" role="button">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 md-mb-30">
                <div class="services-item">
                  <div className="d-flex justify-content-between">
                    <div class="services-icon">
                      <Image src={service3} layout="intrinsic" />
                    </div>
                    <div className="serial-no">03</div>
                  </div>
                  <div class="services-text">
                    <h3 class="title"> COVID-19 Cleaning</h3>
                    <p class="services-txt">
                      {" "}
                      Quisque placerat vitae lacus ut scelet risque. Fusce
                      luctus odio ac nibh luctus, in porttitor theo lacus
                      egestas.
                    </p>
                    <button class="button-41" role="button">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------Featured section ---------------------------------------------- */}
    </div>
  );
};

export default Intro;
