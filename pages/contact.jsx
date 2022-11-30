import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  return (
    <div style={{ marginTop: "37px" }}>
      <Navbar bg="light" expand="lg" className="fixed-top py-2">
        <Container>
          <Link href={"/"}>
            <div className="logo">
              <Navbar.Brand href="#home">
                <div className="mx-2">
                  <Image
                    src={logo}
                    alt="newslogo"
                    height={70}
                    width={100}
                  ></Image>
                </div>
              </Navbar.Brand>
            </div>
          </Link>
        </Container>
      </Navbar>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2
                className="heading-section"
                style={{
                  fontSize: "35px",
                  fontWeight: "bolder",
                  marginTop: "20px",
                }}
              >
                Get in touch
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Send us a Message</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" for="name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" for="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" for="#">
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <button
                                type="submit"
                                value="Send Message"
                                className="btn
                                btn-primary"
                              >
                                Submit
                              </button>

                              <div>
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                    <div
                      className="info-wrap w-100 p-md-5 p-4"
                      style={{ backgroundColor: "#459e06" }}
                    >
                      <h3>Let&apos;s get in touch</h3>
                      <p className="mb-4">
                        We&apos;re open for any suggestion or just to have a
                        chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="bi bi-geo-fill"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span> Lorem ipsum dolor sit, amet
                            consectetur
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="bi bi-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone: </span>
                            <a href="tel://8112037963" className="text-light">
                              08112037963
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="bi bi-envelope"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="#">
                              <span style={{ fontSize: "14px" }}>
                                ajayitamilore@gmail.com
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="bi bi-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Website </span>{" "}
                            <a href="#" className="text-light">
                              tammzcleaning.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "1px" }} className="myFoot">
        <div className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
          <div className="row">
            <div className="col-lg-7 col-md-11 mb-5 mx-md-3">
              <a href="" className="navbar-brand">
                <h3 className="mb-2 mt-2 display-5 text-uppercase featuredHeader fw-normal footerHeader">
                  Tammz
                </h3>
              </a>
              <p>
                {" "}
                Suitable for all your cleaning services <br />
                and all business related to cleaning and organization
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a
                  className="btn btn-outline-secondary text-center mx-1 px-0"
                  style={{ width: "38px", height: "38px" }}
                  href="#"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  className="btn btn-outline-secondary text-center mx-1 px-0"
                  style={{ width: "38px", height: " 38px" }}
                  href="#"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-secondary text-center mx-1 px-0"
                  style={{ width: "38px", height: " 38px" }}
                  href="#"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  className="btn btn-outline-secondary text-center mx-1 px-0"
                  style={{ width: "38px", height: " 38px" }}
                  href="#"
                >
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  className="btn btn-outline-secondary text-center mx-1 px-0"
                  style={{ width: "38px", height: " 38px" }}
                  href="#"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
