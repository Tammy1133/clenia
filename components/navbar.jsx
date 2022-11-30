import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import logo from "../assets/mylog.png";

const MyNavbar = () => {
  return (
    <div className="myNav">
      <Navbar bg="light" expand="lg" className="fixed-top  px-3 px-md-0 ">
        <Container>
          <Link href={"/"}>
            <div className="logo">
              <Navbar.Brand href="#home">
                <Image src={logo} alt="newslogo" height={50} width={50}></Image>
              </Navbar.Brand>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto mx-1 mx-md-none mt-4 mt-lg-0">
              <Nav.Link
                href="#about"
                style={{ textTransform: "uppercase" }}
                className="myNavLink"
              >
                ABOUT-US
              </Nav.Link>
              <Nav.Link
                href="#projects"
                style={{ textTransform: "uppercase" }}
                className="myNavLink"
              >
                OUR PROJECTS
              </Nav.Link>
              <Nav.Link
                className="myNavLink"
                href="#testimonial"
                style={{ textTransform: "uppercase" }}
              >
                TESTIMONIAL
              </Nav.Link>

              <Nav.Link
                style={{ textTransform: "uppercase", textDecoration: "none" }}
                className="myNavLink"
                href="/contact"
              >
                CONTACT-US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar section end */}
    </div>
  );
};

export default MyNavbar;
