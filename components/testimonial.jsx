import Image from "next/image";
import Carousel from "react-multi-carousel";
import review from "../assets/review.png";
import quote from "../assets/quote3.png";

import rating from "../assets/ratting.png";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 997 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 996, min: 665 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="testimonial" className="testimonial">
      <div className="testBg position-relative">
        <Image
          className="testBgImage"
          src={review}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="test-Details">
        <div className="container">
          <div className="testimonialHeader">TESTIMONIALS</div>
          <div className="testimonialSub">
            Whats Our Valued Customers Saying About Us.
          </div>
        </div>

        <div className="carouselSection">
          <Carousel
            responsive={responsive}
            draggable={true}
            autoPlay={true}
            // autoPlaySpeed={100}
            showDots={true}
            arrows={false}
            keyBoardControl={true}
            infinite={true}
            customTransition="all .2"
            transitionDuration={1000}
            containerClass="carousel-container"
            className="pb-5"
          >
            <div className="eachTest">
              <div className="eachTestText">
                <div className="quoteIcon">
                  <Image src={quote} layout="fill" objectFit="cover"></Image>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                nisi harum labore ad natus, nulla accusamus voluptatem id soluta
                distinctio velit eligendi eum itaque tempora quae. Ducimus
                earum, saepe pariatur magni maiores dolor possimus modi. Facere
                fugiat expedita quod animi.
                <div className="starIcon">
                  <Image src={rating} layout="fill" objectFit="contain"></Image>
                </div>
                <div className="testName">Sammy Larry</div>
                <div className="testJob">Digital Marketer</div>
              </div>
            </div>
            <div className="eachTest">
              <div className="eachTestText">
                <div className="quoteIcon">
                  <Image src={quote} layout="fill" objectFit="cover"></Image>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                nisi harum labore ad natus, nulla accusamus voluptatem id soluta
                distinctio velit eligendi eum itaque tempora quae. Ducimus
                earum, saepe pariatur magni maiores dolor possimus modi. Facere
                fugiat expedita quod animi.
                <div className="starIcon">
                  <Image src={rating} layout="fill" objectFit="contain"></Image>
                </div>
                <div className="testName">John Terry</div>
                <div className="testJob">Social Engineer</div>
              </div>
            </div>
            <div className="eachTest">
              <div className="eachTestText">
                <div className="quoteIcon">
                  <Image src={quote} layout="fill" objectFit="cover"></Image>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                nisi harum labore ad natus, nulla accusamus voluptatem id soluta
                distinctio velit eligendi eum itaque tempora quae. Ducimus
                earum, saepe pariatur magni maiores dolor possimus modi. Facere
                fugiat expedita quod animi.
                <div className="starIcon">
                  <Image src={rating} layout="fill" objectFit="contain"></Image>
                </div>
                <div className="testName">Chis Helject</div>
                <div className="testJob">Digital Marketer</div>
              </div>
            </div>
            <div className="eachTest">
              <div className="eachTestText">
                <div className="quoteIcon">
                  <Image src={quote} layout="fill" objectFit="cover"></Image>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                nisi harum labore ad natus, nulla accusamus voluptatem id soluta
                distinctio velit eligendi eum itaque tempora quae. Ducimus
                earum, saepe pariatur magni maiores dolor possimus modi. Facere
                fugiat expedita quod animi.
                <div className="starIcon">
                  <Image src={rating} layout="fill" objectFit="contain"></Image>
                </div>
                <div className="testName">John Moore</div>
                <div className="testJob">Data Scientist</div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
