import React from "react";
import "../About/css/all.css";
import "../About/css/css-font.css";
import "../About/css/icon.css";
import "../About/css/master.css";
import "../About/css/slick-theme.css";
import "../About/css/slick.css";
import "../About/css/style.css";
import logo6 from "../About/images/logo6.png";
import aboutus from "../About/images/aboutus.png";
import image1 from "../About/images/1.png";
import image3 from "../About/images/3.png";
import image4 from "../About/images/4.png";
import { FaEdit } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
 import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
const Aboutsection = () => {
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
        <section className="hero-inner  pt-0">
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
                    <GiHamburgerMenu/>
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
                   <GiHamburgerMenu/>
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
                <h1 className="text-white font-weight-bold">About</h1>
              </div>
            </div>
          </div>
          {/* <!-- end side menu --> */}
        </section>
        {/* <!-- end main banner --> */}
        {/* <!-- start about section --> */}
        <section className="about-section pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
                  About Us
                </p>
                <h2>Get To Know Our Real-Time Journey</h2>
                <p className="text-justify pr-3">
                  Welt Code Web has established in 2020. At that time it was
                  small client base organization has a list of highly respected
                  clients. Welt Code Web is the hub of high-quality,
                  cost-efficient, trustworthy and result-driven web and
                  e-commerce solutions for the clientele in a global range. As a
                  web development company we have become very well known among
                  clients. From font-end development to backend development, we
                  are more advanced than others. Our web designing work is mind
                  blowing. That’s why we stand out from the rest. We build all
                  types of websites.
                </p>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-8 col-8">
                <div className="abt-img">
                  <div className="video-thumb">
                    <img
                      src={aboutus}
                      className="img-fluid mb-0 w-100"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-1 col-sm-3 col-3">
                <h1 className="v-text">HISTORY</h1>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end about section -->
        <!-- start business expert section --> */}
        <section className="business-expert overflow-visible">
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-10 col-md-12">
                <div className="tabs-container" data-content-align="left">
                  <ul className="tabs tabs--spaced">
                    <li className="icon-list active">
                      <div className="tab__title text-center">
                        <IoRocketSharp />
                        <span className="h5">Mission</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                        <FaEye />
                        <span className="h5">Vision</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                        <HiUsers />
                        <span className="h5">Our Team</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                        <FaHandsHoldingChild />
                        <span className="h5">Work Culture</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                        <FaUserTie />
                        <span className="h5">Business Practice</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                        <FaHandHoldingHeart />
                        <span className="h5">Work Ethics</span>
                      </div>
                    </li>
                  </ul>
                  <ul className="tabs-content">
                    <li className="">
                      <div className="tab__content">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-10 col-lg-10">
                              <div className="mt--1 mb--1 content-box">
                                <h3>Mission</h3>
                                <p>
                                  Fostering long-term relationships: We believe
                                  that our success is tied to the success of our
                                  clients, and we strive to build long-term
                                  relationships based on trust, mutual respect,
                                  and shared goals. We are committed to
                                  supporting our clients' ongoing web
                                  development needs and helping them achieve
                                  their online objectives.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!--end of row--> */}
                        </div>
                        {/* <!--end of container--> */}
                      </div>
                    </li>
                    <li className="">
                      <div className="tab__content">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-10 col-lg-10">
                              <div className="mt--1 mb--1 content-box">
                                <h3>Vision</h3>
                                <p>
                                  Embracing innovation: We are committed to
                                  staying at the forefront of web development
                                  technology and exploring new and emerging
                                  trends that can help our clients achieve their
                                  objectives. We continuously evaluate and adopt
                                  new technologies and tools that can help us
                                  deliver better web solutions.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!--end of row--> */}
                        </div>
                        {/* <!--end of container--> */}
                      </div>
                    </li>
                    <li className="">
                      <div className="tab__content">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-10 col-lg-10">
                              <div className="mt--1 mb--1 content-box">
                                <h3>Our Team</h3>
                                <p>
                                  We believe that our success is tied to the
                                  success of our clients, and we are committed
                                  to providing exceptional customer service
                                  throughout the web development process. We
                                  work closely with our clients to understand
                                  their objectives, target audience, and unique
                                  requirements, and we provide regular updates
                                  and communication to ensure that they are
                                  informed and engaged throughout the project.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!--end of row--> */}
                        </div>
                        {/* <!--end of container--> */}
                      </div>
                    </li>
                    <li className="">
                      <div className="tab__content">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-10 col-lg-10">
                              <div className="mt--1 mb--1 content-box">
                                <h3>Work Culture</h3>
                                <p>
                                  <b>Collaboration:</b> We believe that
                                  collaboration is essential to delivering
                                  high-quality web development solutions. Our
                                  team members work closely together, sharing
                                  ideas and feedback to ensure that our projects
                                  meet our clients' needs and exceed their
                                  expectations.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!--end of row--> */}
                        </div>
                        {/* <!--end of container--> */}
                      </div>
                    </li>
                    <li className="">
                      <div className="tab__content">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-10 col-lg-10">
                              <div className="mt--1 mb--1 content-box">
                                <h3>Business Practice</h3>
                                <p>
                                  <b>Customer Focus:</b> We are committed to
                                  understanding our clients' needs and
                                  objectives and delivering web development
                                  solutions that help them achieve their goals.
                                  We provide personalized service and support to
                                  ensure that our clients are fully satisfied
                                  with the work we deliver.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!--end of row--> */}
                        </div>
                        {/* <!--end of container--> */}
                      </div>
                    </li>
                    <li className="">
                      <div className="tab__content">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-10 col-lg-10">
                              <div className="mt--1 mb--1 content-box">
                                <h3>Work Ethics</h3>
                                <p>
                                  <b> Professionalism:</b> We conduct ourselves
                                  with professionalism and respect for others in
                                  all our interactions, both internal and
                                  external. We are committed to creating a work
                                  environment that is inclusive and respectful
                                  of all team members.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <!--end of row--> */}
                        </div>
                        {/* <!--end of container--> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="collaboration-img">
                <img className="img-1 img-fluid mb-0" src={image1} alt="" />
                <img className="img-2 img-fluid mb-0" src={image3} alt="" />
                <img className="img-3 img-fluid mb-0" src={image4} alt="" />
              </div> */}
          </div>
        </section>
        {/* <!-- end business expert section -->


        <!-- end testimonial section -->
        <!-- start project preview section --> */}
        <section className="projects pb-0 about-project">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
                  Projects
                </p>
                <h2>We made it happen with Digital Marketing approach</h2>
                <p>
                  We believe in conducting ourselves with honesty and integrity
                  in all our business dealings. We communicate clearly and
                  honestly with our clients and maintain confidentiality and
                  respect for their intellectual property.
                </p>
              </div>
              <div className="col-lg-8 col-md-12 counter-block">
                <div className="row justify-content-center" id="counter">
                  <div className="col-lg-5 col-md-5 col-sm-6 col-6 counter-box">
                    <div className="boxed bg-transparent d-flex align-items-center justify-content-center boxed--border">
                      <h1>
                        <FaStore />
                      </h1>
                      <div className="employees">
                        <p className="counter-count">879</p>
                        <p className="employee-p">Employee</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-6 col-6 counter-box">
                    <div className="boxed bg-transparent d-flex align-items-center justify-content-center boxed--border">
                      <h1>
                        <FaCrown />
                      </h1>
                      <div className="customer">
                        <p className="counter-count">954</p>
                        <p className="customer-p">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-6 col-6 counter-box">
                    <div className="boxed bg-transparent d-flex align-items-center justify-content-center boxed--border">
                      <h1>
                        <FaEdit />
                      </h1>
                      <div className="design">
                        <p className="counter-count">1050</p>
                        <p className="design-p">Design</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-6 col-6 counter-box">
                    <div className="boxed bg-transparent d-flex align-items-center justify-content-center boxed--border">
                      <h1>
                        <FaUser />
                      </h1>
                      <div className="order">
                        <p className="counter-count">652</p>
                        <p className="order-p">Orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end project preview section -->
         <!-- start contact us section --> */}
        <section>
          <div className="container">
            <div
              className="row counter-bg bottom-content"
              style={{ backgroundColor: "#0a116c" }}
            >
              <div className="col-lg-12 col-md-12">
                <h2 className="text-white mb-0">
                  <a href="tel:+919871494657" style={{ color: "white" }}>
                    Call us : +91 9871494657
                  </a>
                </h2>
              </div>
              {/* <!-- <div className="col-lg-4 col-md-12">
                        <a href="contact.html" className="btn text-white bottom-link mb-0">Hire Us</a>
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
                    {/* <img src="assets/images/florida.png" className="w-30" alt="map"/> */}
                    <address className="ml-3">
                      Welt Code Web private ltd367, 2nd floor Sarai khwaja
                      Faridabad Near Bajrang chowk FaridabadHaryana 121003{" "}
                      <br />
                      <MdOutlinePhoneIphone />
                      <a href="tel:+919871494657">+91 9871494657</a> <br />
                      {/* <!--<i className="fas fa-mobile-alt"></i> <a href="tel:+917017182736">+91 7017182736</a><br>  */}
                      <MdOutlineMailOutline />
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
                    <h5>
                      <FaFacebookF />
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <h5>
                      <FaTwitter />
                    </h5>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/weltcodeweb/"
                    target="_blank"
                  >
                    <h5>
                      <FaInstagram />
                    </h5>
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
            <div className="col-lg-6 col-6">
              <div className="callBtnFloat">
                <a href="tel: +919871494657">
                  <MdOutlinePhoneIphone /> Call Now
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-6">
              <div className="whatsBtnFloat">
                <a href="https://wa.me/+919871494657">
                  <MdOutlineMailOutline />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutsection;
