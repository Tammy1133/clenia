import Image from "next/image";

import project1 from "../assets/projects/1.jpg";
import project2 from "../assets/projects/2.jpg";
import project3 from "../assets/projects/3.jpg";
import project4 from "../assets/projects/4.jpg";
import project5 from "../assets/projects/5.jpg";
import project6 from "../assets/projects/6.jpg";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projectHeader">COMPLETED PROJECTS</div>
      <div className="projectSubHeader">
        What`&apos;`s Awesome Projects We Finished For Customers
      </div>

      <div className="mt-3">
        <div className="projectsList">
          <div className="eachProject">
            <div className="eachImage">
              <Image src={project1} layout="fill" objectFit="cover"></Image>
            </div>
            <div className="project-name">
              <h3>Dust Surfaces</h3>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="eachProject">
            <div className="eachImage">
              <Image src={project2} layout="fill" objectFit="cover"></Image>
            </div>
            <div className="project-name">
              <h3>Vaccum Carpet</h3>
              <p>Abuja, Nigeria</p>
            </div>
          </div>

          <div className="eachProject">
            <div className="eachImage">
              <Image src={project3} layout="fill" objectFit="cover"></Image>
            </div>
            <div className="project-name">
              <h3>Outdoor Cleaning</h3>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <div className="eachProject">
            <div className="eachImage">
              <Image src={project4} layout="fill" objectFit="cover"></Image>
            </div>
            <div className="project-name">
              <h3>Commercial Cleaning</h3>
              <p>Eboyi, Nigeria</p>
            </div>
          </div>

          <div className="eachProject">
            <div className="eachImage">
              <Image src={project5} layout="fill" objectFit="cover"></Image>
            </div>
            <div className="project-name">
              <h3>Window Cleaning</h3>
              <p>Epe, Nigeria</p>
            </div>
          </div>

          <div className="eachProject">
            <div className="eachImage">
              <Image src={project6} layout="fill" objectFit="cover"></Image>
            </div>
            <div className="project-name">
              <h3>Equipment Cleaning</h3>
              <p>Eboyi, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flipCont d-flex flex-wrap ">
        <div className="eachProject" data-aos="fade-up">
          <div className="eachImage">
            <Image src={project1} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="project-name">
            <h3>Dust Surfaces</h3>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="eachProject" data-aos="fade-up">
          <div className="eachImage">
            <Image src={project2} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="project-name">
            <h3>Vaccum Carpet</h3>
            <p>Abuja, Nigeria</p>
          </div>
        </div>

        <div className="eachProject" data-aos="fade-up">
          <div className="eachImage">
            <Image src={project3} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="project-name">
            <h3>Outdoor Cleaning</h3>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="eachProject" data-aos="fade-up">
          <div className="eachImage">
            <Image src={project4} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="project-name">
            <h3>Commercial Cleaning</h3>
            <p>Eboyi, Nigeria</p>
          </div>
        </div>

        <div className="eachProject" data-aos="fade-up">
          <div className="eachImage">
            <Image src={project5} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="project-name">
            <h3>Window Cleaning</h3>
            <p>Epe, Nigeria</p>
          </div>
        </div>

        <div className="eachProject" data-aos="fade-up">
          <div className="eachImage">
            <Image src={project6} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="project-name">
            <h3>Equipment Cleaning</h3>
            <p>Eboyi, Nigeria</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
