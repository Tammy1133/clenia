import Image from "next/image";
import valued1 from "../assets/valued/1.png";
import valued2 from "../assets/valued/2.png";
import valued3 from "../assets/valued/3.png";
import valued4 from "../assets/valued/4.png";
import valued5 from "../assets/valued/5.png";
import valued6 from "../assets/valued/6.png";

const Valued = () => {
  return (
    <div className="valued">
      <div className=" valuedSection ">
        <div className=" text-center">
          <h6 className="valuedHeader">VALUED SERVICES</h6>
          <h3 className="valuedSub ">
            Managed Residential & Commercial Cleaning Services For You.
          </h3>
        </div>
      </div>

      <div className=" container d-flex flex-wrap justify-content-center allCols">
        <div class="col-1-of-3 mx-auto" data-aos="fade-up">
          <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__details ">
                <div className="cardIcon position-relative">
                  <Image src={valued1} layout="intrinsic"></Image>
                </div>

                <div className="card-title">Covid-19 Cleaning</div>
                <div className="card-Subtitle">
                  We denounce with righteous indig onto nation and dislike men
                  who are so beguiled and demo data.
                </div>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <h3 className="side-header">Covid-19 Cleaning</h3>
              <div className="side-others">
                We denounce with righteous indig onto nation and dislike men who
                are so beguiled and demo data.
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3 mx-auto" data-aos="fade-up">
          <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__details ">
                <div className="cardIcon position-relative">
                  <Image src={valued2} layout="intrinsic"></Image>
                </div>

                <div className="card-title">Kitchen Cleaning</div>
                <div className="card-Subtitle">
                  We denounce with righteous indig onto nation and dislike men
                  who are so beguiled and demo data.
                </div>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <h3 className="side-header">Kitchen Cleaning</h3>
              <div className="side-others">
                We denounce with righteous indig onto nation and dislike men who
                are so beguiled and demo data.
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3 mx-auto" data-aos="fade-up">
          <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__details ">
                <div className="cardIcon position-relative">
                  <Image src={valued3} layout="intrinsic"></Image>
                </div>

                <div className="card-title">Office Cleaning</div>
                <div className="card-Subtitle">
                  We denounce with righteous indig onto nation and dislike men
                  who are so beguiled and demo data.
                </div>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <h3 className="side-header">Office Cleaning</h3>
              <div className="side-others">
                We denounce with righteous indig onto nation and dislike men who
                are so beguiled and demo data.
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3 mx-auto" data-aos="fade-up">
          <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__details ">
                <div className="cardIcon position-relative">
                  <Image src={valued4} layout="intrinsic"></Image>
                </div>

                <div className="card-title">Window Cleaning</div>
                <div className="card-Subtitle">
                  We denounce with righteous indig onto nation and dislike men
                  who are so beguiled and demo data.
                </div>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <h3 className="side-header">Window Cleaning</h3>
              <div className="side-others">
                We denounce with righteous indig onto nation and dislike men who
                are so beguiled and demo data.
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3 mx-auto" data-aos="fade-up">
          <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__details ">
                <div className="cardIcon position-relative">
                  <Image src={valued5} layout="intrinsic"></Image>
                </div>

                <div className="card-title">Carpet Cleaning</div>
                <div className="card-Subtitle">
                  We denounce with righteous indig onto nation and dislike men
                  who are so beguiled and demo data.
                </div>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <h3 className="side-header">Carpet Cleaning</h3>
              <div className="side-others">
                We denounce with righteous indig onto nation and dislike men who
                are so beguiled and demo data.
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3 mx-auto" data-aos="fade-up">
          <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__details ">
                <div className="cardIcon position-relative">
                  <Image src={valued6} layout="intrinsic"></Image>
                </div>

                <div className="card-title">Toilet Cleaning</div>
                <div className="card-Subtitle">
                  We denounce with righteous indig onto nation and dislike men
                  who are so beguiled and demo data.
                </div>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <h3 className="side-header">Toilet Cleaning</h3>
              <div className="side-others">
                We denounce with righteous indig onto nation and dislike men who
                are so beguiled and demo data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valued;
