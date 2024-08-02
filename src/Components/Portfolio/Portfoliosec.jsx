import React from "react";
import "../Portfolio/css/css-font.css";
import "../Portfolio/css/all.css";
import "../Portfolio/css/icon.css";
import "../Portfolio/css/master.css";
import "../Portfolio/css/slick-theme.css";
import "../Portfolio/css/slick.css";
import "../Portfolio/css/style.css";
import logo6 from "../Portfolio/images/logo6.png";
import portfolio1 from "../Portfolio/images/portfolio-1.jpg";
import portfolio2 from "../Portfolio/images/portfolio-2.jpg";
import portfolio3 from "../Portfolio/images/portfolio-3.jpg";
// import portfolio4 from '../Portfolio/images/portfolio-4.jpg'
import portfolio5 from "../Portfolio/images/portfolio-5.jpg";
import portfolio6 from "../Portfolio/images/portfolio-6.jpg";
// import portfolio7 from '../Portfolio/images/portfolio-7.jpg'
import portfolio8 from "../Portfolio/images/portfolio-8.jpg";
import portfolio9 from "../Portfolio/images/portfolio-9.jpg";
import portfolio10 from "../Portfolio/images/portfolio-10.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
const Portfoliosec = () => {
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
          </div>
          <div className="container">
            <div
              className="row align-items-center justify-content-around banner-inner-content aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-md-8 text-center">
                <h1 className="text-white font-weight-bold">Gallery</h1>
              </div>
            </div>
          </div>
          {/* <!-- end side menu --> */}
        </section>
        {/* <!-- end main banner -->
        <!-- start portfolio section --> */}
        <section className="pb-0 sec-title">
          <div className="masonry masonry--gapless">
            <div className="container">
              <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
                Gallery
              </p>
              <h2>The Projects we developed</h2>
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="masonry-filter-container text-center row mb-0">
                    <div className="masonry-filter-holder">
                      <div
                        className="masonry__filters custom-masonry"
                        data-filter-all-text="All Projects"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="masonry__container bg--secondary">
                <div
                  className="col-md-4 col-12 masonry__item"
                  data-masonry-filter="Web Development"
                >
                  <div className="project-thumb hover-element height-40">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img alt="background" src={portfolio1} />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-4 col-12 masonry__item"
                  data-masonry-filter="Web Development"
                >
                  <div className="project-thumb hover-element height-40">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img alt="background" src={portfolio2} />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-4 col-12 masonry__item"
                  data-masonry-filter="Digital Marketing"
                >
                  <div className="project-thumb hover-element height-40">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img alt="background" src={portfolio3} />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title"></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  className="col-md-4 col-12 masonry__item"
                  data-masonry-filter="Web Development"
                >
                  <div className="project-thumb hover-element height-40">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img alt="background" src={portfolio5} />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-4 col-12 masonry__item"
                  data-masonry-filter="Web Development"
                >
                  <div className="project-thumb hover-element height-40">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img alt="background" src={portfolio6} />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title"></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  className="col-md-4 col-12 masonry__item"
                  data-masonry-filter="Digital Marketing"
                >
                  <div className="project-thumb hover-element height-40">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img alt="background" src={portfolio8} />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-4 col-12 masonry__item"
                  data-masonry-filter="Digital Marketing"
                >
                  <div className="project-thumb hover-element height-40">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img alt="background" src={portfolio9} />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-4 col-12 masonry__item"
                  data-masonry-filter="Digital Marketing"
                >
                  <div className="project-thumb hover-element height-40">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img alt="background" src={portfolio10} />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--end of masonry__container--> */}
          </div>
          {/* <!--end of masonry--> */}
        </section>
        {/* <!-- end portfolio section --> */}
        {/* <!-- start contact us section --> */}
        <section>
          <div className="container">
            <div className="row counter-bg bottom-content">
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
                    {/* <!--<img src="assets/images/florida.png" className="w-30" alt="map">--> */}
                    <address className="ml-3">
                      Welt Code Web private ltd 367, 2nd floor Sarai khwaja
                      Faridabad Near Bajrang chowk Faridabad Haryana 121003 <br />
                      <MdOutlinePhoneIphone/>
                      <a href="tel:+919871494657">+91 9871494657</a> <br />
                      {/* <!--<i className="fas fa-mobile-alt"></i> <a href="tel:+917017182736">+91 7017182736</a> */}
                    < MdOutlineMailOutline/>
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
      {/* <!-- end footer section --></div>   */}
    </>
  );
};

export default Portfoliosec;
