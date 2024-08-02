import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import "../Contact/css/all.css";
import "../Contact/css/css-font.css";
import "../Contact/css/icon.css";
import "../Contact/css/master.css";
import "../Contact/css/slick-theme.css";
import "../Contact/css/slick.css";
import "../Contact/css/style.css";
import logo6 from "../Contact/images/logo6.png";
import plant from "../Contact/images/contact_us_plant.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Contactus = () => {
  return (
    <>
      {/* <!--start preloader--> */}
      {/* <div className="preloader">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div> */}
      <a id="start"></a>
      <div className="main-container" id="about">
        {/* <!-- start main banner --> */}
        <section className="hero-inner pt-0">
          {/* <!-- start main header --> */}
          <div
            className="nav-container aos-init aos-animate"
            data-aos="fade-down"
          >
            <nav id="menu1" className="bar bar--sm bar-1">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                    <div className="logo">
                      <a href="index.php">
                        <img
                          className="img-fluid logo"
                          alt="Elements"
                          src={logo6}
                        />
                        {/* <!-- <h1>Welt Code Web</h1> --> */}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 text-right hidden-md hidden-sm hidden-xs d-flex justify-content-end align-items-center">
                    <div className="bar__module">
                    <ul className="menu-horizontal text-left">
                        <li>
                          <Link className="text-white" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/services">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/mobileapp">
                            MobileApp
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/portfolio">
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/games">
                            Games
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/contact">
                            Contact
                          </Link>
                        </li>

                        <li>
                          <Link className="text-white" to="/blog">
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9 col-4 text-right hidden-lg">
                    <a
                      href="javascript:void(0)"
                      className="text-white menu-open"
                    >
                   < GiHamburgerMenu/>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="menu hidden-lg">
            <div className="container">
              <div className="row bar bar--sm bar-1">
                <div className="col-lg-3 col-md-6 col-sm-8 col-8">
                  <div className="">
                    <a href="index.php">
                      <img
                        className="img-fluid logo"
                        alt="Elements"
                        src={logo6}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-6 col-sm-4 col-4 text-right">
                  <a
                    href="javascript:void(0)"
                    className="menu-close text-white"
                  >
                 < GiHamburgerMenu/>
                  </a>
                </div>
              </div>
              <ul className="menu-horizontal text-left">
                        <li>
                          <Link className="text-white" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/services">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/mobileapp">
                            MobileApp
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/portfolio">
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/games">
                            Games
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/contact">
                            Contact
                          </Link>
                        </li>

                        <li>
                          <Link className="text-white" to="/blog">
                            Blog
                          </Link>
                        </li>
                      </ul>
            </div>
          </div>{" "}
          <div className="container">
            <div
              className="row align-items-center justify-content-around banner-inner-content aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-md-8 text-center">
                <h1 className="text-white font-weight-bold">Contact</h1>
              </div>
            </div>
          </div>
          {/* <!-- end side menu --> */}
        </section>
        {/* <!-- end main banner -->
        <!-- start contact section --> */}
        <section className="contact-sec-two sec-title pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-5 career d-lg-block pr-0">
                <div className="right-sec">
                  <div className="right-sec-content">
                    <h2 className="text-white">Reach Us</h2>
                    <h4 className="text-white">
                      <HiOutlineMailOpen />
                      info@weltcodeweb.com
                    </h4>
                    <h4 className="text-white">
                      <IoIosPhonePortrait />
                      +91 9871494657
                    </h4>
                    {/* <!-- <h4 className="text-white"><i className="fa fa-mobile pr-3"></i>+91 7017182736</h4>--> */}
                    <h4 className="text-white">
                      <FiMessageCircle />
                      Welt Code Web private ltd 367, 2nd floor Sarai khwaja
                      Faridabad Near Bajrang chowk Faridabad Haryana 121003{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 pl-0 contact-form">
                <div className="left-sec contact-page">
                  <div className="row m-0">
                    <div className="col-lg-10">
                      <h2 className="title">Send Us A Message!</h2>
                      <p>
                        Please fill out the request for quote form below and our
                        expert team will get back to you shortly.
                      </p>
                      <form
                        className="form-contact"
                        name="career-form"
                        action="contact.php"
                        method="POST"
                      >
                        <label>
                          <FaUserAlt />
                          <span className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Your Name:*"
                            />
                          </span>
                        </label>
                        <label>
                          <HiOutlineMailOpen />
                          <span className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Your Email:*"
                            />
                          </span>
                        </label>
                        <label>
                          <IoIosPhonePortrait />
                          <span className="form-group">
                            <input
                              type="number"
                              className="form-control"
                              name="mob"
                              placeholder="Your Number:*"
                            />
                          </span>
                        </label>
                        <label className="mb-0">
                          <FiMessageCircle />
                          <span className="form-group">
                            <textarea
                              name="message"
                              placeholder="Your Message:"
                              type="text"
                            ></textarea>
                          </span>
                        </label>
                        <button
                          className="btn btn--primary type--uppercase"
                          type="submit"
                          name="submit"
                          id="submit"
                        >
                          Submit Now
                        </button>
                      </form>
                    </div>
                    <div className="col-lg-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-0 plant-img">
          <div className="container">
            <div className="plant-img_2">
              <img
                src={plant}
                className="img-fluid float-right plant"
                alt="Plant"
              />
            </div>
          </div>
        </section>
        {/* <!-- end contact section -->
    <!-- start contact us section --> */}
        <section>
          <div className="container">
            <div className="row counter-bg bottom-content">
              <div className="col-lg-12 col-md-12">
                <h2 className="text-white mb-0">
                  <a href="tel: +919871494657" style={{ color: "white" }}>
                    Call us : +91 9871494657
                  </a>
                </h2>
              </div>
              {/* <!-- <div className="col-lg-4 col-md-12">
                        <a href="contact.php" className="btn text-white bottom-link mb-0">Hire Us</a>
                    </div> --> */}
            </div>
          </div>
        </section>
        {/* <!-- end contact us section --> */}
      </div>

      {/* <!-- back to top arrow --> */}
      <a
        className="back-to-top inner-link"
        href="#"
        data-scroll-className="100vh:active"
      >
        <i className="ti-arrow-up"></i>
      </a>
      {/* <!-- start footer section --> */}
      <footer className="footer-3 text-center-xs pt-8 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h3>We Are Here</h3>
              <div className="row">
                <div className="col-md-12 d-flex align-items-start">
                  <div className="d-flex align-items-center">
                    {/* <!--<img src="assets/images/florida.png" className="w-30" alt="map">--> */}
                    <address className="ml-3">
                      Welt Code Web private ltd 367, 2nd floor Sarai khwaja
                      Faridabad Near Bajrang chowk Faridabad Haryana 121003{" "}
                      <br />
                      <IoIosPhonePortrait />{" "}
                      <a href="tel:+919871494657">+91 9871494657</a> <br />
                      {/* <!--<i className="fas fa-mobile-alt"></i> <a href="tel:+917017182736">+91 7017182736</a><br>--> */}
                      <MdOutlineEmail />{" "}
                      <a href="mailto:info@weltcodeweb.com">
                        info@weltcodeweb.com
                      </a>
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row border-right border-r-0">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <a href="index.php">Home</a>
                    </li>
                    <li>
                      <a href="about.php">About</a>
                    </li>
                    <li>
                      <a href="services.php">Services</a>
                    </li>
                    <li>
                      <a href="gallery.php">Portfolio</a>
                    </li>
                    <li>
                      <a href="">Hire Expert</a>
                    </li>
                    <li>
                      <a href="./blog/">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <a href="contact.php">Contact</a>
                    </li>
                    <li>
                      <a href="privacy.php">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms.php"> Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 offset-lg-1 follow-us">
              <h3>Follow Us</h3>
              <ul className="social-nav">
                <li>
                  <a
                    href="https://www.facebook.com/people/Welt-Code-Web-Pvt-Ltd/100089884036109/"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/weltcodeweb/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                {/* <!--  <li>
                            <a href="javascript:void(0)">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li> --> */}
              </ul>
              <p className="mb-0">
                Copyright 2023. All rights reserved to{" "}
                <strong>Welt Code Web</strong>.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="gng">
        <div className="container confloatBtn">
          <div className="row p-0">
            <div className="col-lg-6 col-6" style={{ padding: "0" }}>
              <div className="callBtnFloat">
                <a href="tel: +919871494657" style={{ color: "#fff" }}>
                  <IoIosPhonePortrait /> Call Now
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-6" style={{ padding: "0" }}>
              <div className="whatsBtnFloat">
                <a href="https://wa.me/+919871494657" style={{ color: "#fff" }}>
                  <MdOutlineEmail /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer section --></div> */}
    </>
  );
};

export default Contactus;
