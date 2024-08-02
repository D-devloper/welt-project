import React from "react";
import "../Mobileapp/css/all.css";
import "../Mobileapp/css/css-font.css";
import "../Mobileapp/css/icon.css";
import "../Mobileapp/css/master.css";
import "../Mobileapp/css/slick-theme.css";
import "../Mobileapp/css/slick.css";
import "../Mobileapp/css/style.css";
import logo6 from "../Mobileapp/images/logo6.png";
import app from "../Mobileapp/images/app.jpg";
import aboutus from "../Mobileapp/images/aboutus.png";
import { FaEdit } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
// import { MdOutlineMailOutline } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";``
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
const MobileApp = () => {
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
                    <i className="fas fa-times"></i>
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
                <h1 className="text-white font-weight-bold">
                  Mobile Application
                </h1>
              </div>
            </div>
          </div>
          {/* <!-- end side menu --> */}
        </section>
        {/* <!-- end main banner --> */}
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h3>Diffrent Types of Application </h3>
                <ul className="whyus">
                  <li>
                    <span className="num">1</span>
                    <div className="whyus-text">
                      <b>Mobile applications:</b>These are applications that are
                      specifically designed to be used on mobile devices, such
                      as smartphones and tablets. Mobile applications can be
                      built for different operating systems, including iOS and
                      Android.
                    </div>
                  </li>
                  <li>
                    <span className="num">2</span>
                    <div className="whyus-text">
                      <b>Web applications:</b>These are applications that are
                      accessed through a web browser, and do not require
                      installation on the user's device. Web applications can be
                      built using web technologies such as HTML, CSS, and
                      JavaScript.
                    </div>
                  </li>
                  <li>
                    <span className="num">3</span>
                    <div className="whyus-text">
                      <b>Game applications:</b>These are applications that are
                      designed for entertainment purposes, and can include a
                      wide range of genres, including puzzle games, action
                      games, and role-playing games.
                    </div>
                  </li>
                  <li>
                    <span className="num">4</span>
                    <div className="whyus-text">
                      <b>Enterprise applications:</b>These are applications that
                      are used by businesses and organizations to manage and
                      streamline their operations.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-5">
                <div className="whyus-img">
                  <img src={app} className="img-fluid" alt="Whyus" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- start about section --> */}
        <section className="about-section pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
                  Mobile Application
                </p>
                <h2>Get To Know Our Real-Time Journey</h2>
                <p className="text-justify pr-3">
                  <b>User interface (UI) design:</b> The user interface is the
                  visual and interactive design of the app that users see and
                  interact with. UI design includes elements such as icons,
                  buttons, menus, and other visual elements that make the app
                  easy to use and navigate.
                </p>
                <p className="text-justify pr-3">
                  <b>Gamification and rewards:</b> Gamification and rewards
                  features are often used to increase user engagement and
                  retention. This can include features such as points, badges,
                  or rewards for completing certain actions or achieving certain
                  goals within the app.
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
                        < IoRocketSharp/>
                        <span className="h5">Mission</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                       < FaEye/>
                        <span className="h5">Vision</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                       <HiUsers/>
                        <span className="h5">Our Team</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                       < FaHandsHoldingChild/>
                        <span className="h5">Work Culture</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                    < FaUserTie/>
                        <span className="h5">Business Practice</span>
                      </div>
                    </li>
                    <li className="icon-list">
                      <div className="tab__title text-center">
                   < FaHandHoldingHeart/>
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
            <div className="collaboration-img">
              <img
                className="img-1 img-fluid mb-0"
                src="assets/images/1.png"
                alt=""
              />
              <img
                className="img-2 img-fluid mb-0"
                src="assets/images/3.png"
                alt=""
              />
              <img
                className="img-3 img-fluid mb-0"
                src="assets/images/4.png"
                alt=""
              />
            </div>
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
        <section className="contact-sec-two sec-title pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-5 career d-lg-block pr-0">
                <div className="right-sec">
                  <div className="right-sec-content">
                    <h2 className="text-white">Reach Us</h2>
                    <h4 className="text-white">
                      <MdOutlineEmail />
                      info@designcodeweb.com
                    </h4>
                    <h4 className="text-white">
                      <MdOutlinePhoneIphone />
                      +91 9871494657
                    </h4>
                    {/* <!-- <h4 className="text-white"><i className="fa fa-mobile pr-3"></i>+91 7017182736</h4>--> */}
                    <h4 className="text-white">
                      <FaLocationDot />
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
                          <FaUser />
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
                        <MdOutlineEmail />
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
                        <MdOutlinePhoneIphone />
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
                          <BiMessageRounded />
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
        {/* <!-- end project preview section -->
         <!-- start contact us section --> */}
        <section>
          <div className="container">
            <div className="row counter-bg bottom-content">
              <div className="col-lg-12 col-md-12">
                <h2 className="text-white mb-0">
                  <a href="tel:+919871494657" style={{ color: "#fff;" }}>
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
                      Faridabad Near Bajrang chowk Faridabad Haryana 121003 <br />
                      <MdOutlinePhoneIphone />
                      <a href="tel:+919871494657">+91 9871494657</a> <br />
                      {/* <!--<i className="fas fa-mobile-alt"></i> <a href="tel:+917017182736">+91 7017182736</a><br>--> */}
                      <MdOutlineEmail />
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
            <div className="col-lg-6 col-6" style={{ padding: "0" }}>
              <div className="callBtnFloat">
                <a href="tel: +919871494657" style={{ color: "#fff" }}>
                  <i className="fa fa-phone"></i> Call Now
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-6" style={{ padding: "0" }}>
              <div className="whatsBtnFloat">
                <a href="https://wa.me/+919871494657" style={{ color: "#fff" }}>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
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

export default MobileApp;
