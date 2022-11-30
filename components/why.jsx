import Image from "next/image";

import choose1 from "../assets/choose/1.png";
import choose2 from "../assets/choose/2.png";
import choose3 from "../assets/choose/3.png";
import choose4 from "../assets/choose/4.png";
import choose5 from "../assets/choose/5.png";
import choose6 from "../assets/choose/6.png";
import whyChoose from "../assets/choose/why-choose3.jpg";

const Why = () => {
  return (
    <div className="whySection ">
      <div className="whyHeader text-center">
        <h6 className="featuredTitle fs-6">WHY CHOOSE US</h6>
        <h3 className="fs-2 whyHeader">
          Get Tammz Services & Drive More Customers.
        </h3>
      </div>

      <div className="d-lg-flex  mainDiv mx-2">
        <div className="d-flex  flex-column allWhy ">
          <div className="d-flex whyItem container  align-items-center ">
            <div className="chooseIcon position-relative left">
              <Image src={choose1} layout="fill" objectFit="contain"></Image>
            </div>
            <div className="right">
              <h5 className="chooseHeader">We Are Experts.</h5>
              <p>Nor is there anyone who loves pursues desires obtain</p>
            </div>
          </div>

          <div className="d-flex whyItem container  align-items-center ">
            <div className="chooseIcon position-relative left">
              <Image src={choose2} layout="fill" objectFit="contain"></Image>
            </div>
            <div className="right">
              <h5 className="chooseHeader">We Are Complete.</h5>
              <p>Nor is there anyone who loves pursues desires obtain</p>
            </div>
          </div>

          <div className="d-flex whyItem container  align-items-center ">
            <div className="chooseIcon position-relative left">
              <Image src={choose3} layout="fill" objectFit="contain"></Image>
            </div>
            <div className="right">
              <h5 className="chooseHeader">We Are Dedicated.</h5>
              <p>Nor is there anyone who loves pursues desires obtain</p>
            </div>
          </div>
        </div>

        <div className="whyChooseImage d-lg-block mx-auto mt-5 mt-lg-0 align-items-center">
          <Image src={whyChoose} layout="fill" objectFit="cover"></Image>
        </div>

        <div className="d-flex  flex-column allWhy">
          <div className="d-flex whyItem container  align-items-center ">
            <div className="chooseIcon position-relative left">
              <Image src={choose1} layout="fill" objectFit="contain"></Image>
            </div>
            <div className="right">
              <h5 className="chooseHeader">We Are Experts.</h5>
              <p>Nor is there anyone who loves pursues desires obtain</p>
            </div>
          </div>

          <div className="d-flex whyItem container  align-items-center ">
            <div className="chooseIcon position-relative left">
              <Image src={choose2} layout="fill" objectFit="contain"></Image>
            </div>
            <div className="right">
              <h5 className="chooseHeader">We Are Complete.</h5>
              <p>Nor is there anyone who loves pursues desires obtain</p>
            </div>
          </div>

          <div className="d-flex whyItem container  align-items-center ">
            <div className="chooseIcon position-relative left">
              <Image src={choose3} layout="fill" objectFit="contain"></Image>
            </div>
            <div className="right">
              <h5 className="chooseHeader">We Are Dedicated.</h5>
              <p>Nor is there anyone who loves pursues desires obtain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
