import Image from "next/image";
import counter1 from "../assets/counter/1.png";
import counter2 from "../assets/counter/2.png";
import counter3 from "../assets/counter/3.png";
import counter4 from "../assets/counter/4.png";
import counterbg from "../assets/counter/counterbg.jpg";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        <div className="counterDiv">
          <div className="counterbg">
            <Image
              className="counterImg"
              src={counterbg}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="counter px-5 d-flex flex-wrap">
            <div className="d-flex align-items-center counterItem">
              <div className=" countericon">
                <Image src={counter1} layout="intrinsic"></Image>
              </div>
              <div className="counterDetails d-flex flex-column ">
                <div className="counterNo">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={100}
                      delay={0}
                      duration={2}
                    ></CountUp>
                  )}
                  +
                </div>
                <div className="counterInfo">
                  <h4>Project Done</h4>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center counterItem">
              <div className=" countericon">
                <Image src={counter2} layout="intrinsic"></Image>
              </div>
              <div className="counterDetails d-flex flex-column ">
                <div className="counterNo">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={50}
                      delay={0}
                      duration={2}
                    ></CountUp>
                  )}
                  +
                </div>
                <div className="counterInfo">
                  <h4>Awards won</h4>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center counterItem">
              <div className=" countericon">
                <Image src={counter3} layout="intrinsic"></Image>
              </div>
              <div className="counterDetails d-flex flex-column ">
                <div className="counterNo">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={95}
                      delay={0}
                      duration={2}
                    ></CountUp>
                  )}
                  %
                </div>
                <div className="counterInfo">
                  <h4>Clients Satisfied</h4>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center counterItem">
              <div className=" countericon">
                <Image src={counter4} layout="intrinsic"></Image>
              </div>
              <div className="counterDetails d-flex flex-column ">
                <div className="counterNo">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={23}
                      delay={0}
                      duration={2}
                    ></CountUp>
                  )}
                  +
                </div>
                <div className="counterInfo">
                  <h4>Team members</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
