import React from "react";
import "../Home/Css/all.css";
import "../Home/Css/icon.css";
import "../Home/Css/master.css";
import "../Home/Css/slick-theme.css";
import "../Home/Css/slick.css";
import "../Home/Css/style.css";
import "../Home/Css/css-font.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import mainbanner from "../Home/images/main-banner.png";
import logo6 from "../Home/images/logo6.png";
import bannerimg from "../Home/images/banner-img.png";
import icon1 from "../Home/images/wordpress-thumb.png";
import icon2 from "../Home/images/shopify-thumb.png";
import icon3 from "../Home/images/icon4.png";
import icon4 from "../Home/images/hubspot-thumb.png";
import icon5 from "../Home/images/codeigniter.png";
import icon6 from "../Home/images/laravel.png";
import icon7 from "../Home/images/nodejs.png";
import icon8 from "../Home/images/php.png";
import icon9 from "../Home/images/angularjs.png";
import icon10 from "../Home/images/clickfunnel-thumb.png";
import first from "../Home/images/icon1.png";
import second from "../Home/images/icon2.png";
import third from "../Home/images/icon4.png";
import portfolio1 from "../Home/images/portfolio-1.jpg";
import portfolio2 from "../Home/images/portfolio-2.jpg";
import portfolio3 from "../Home/images/portfolio-3.jpg";
import portfolio5 from "../Home/images/portfolio-5.jpg";
import portfolio6 from "../Home/images/portfolio-6.jpg";
import process from "../Home/images/process.png";
import Image from "../Home/images/image.png";
import vidicon from "../Home/images/video-icon.png";
import { CiGlobe } from "react-icons/ci";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import blog1 from "../Home/images/01_blog.jpg";
import blog2 from "../Home/images/02_blog.jpg";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import ScriptLoader from "../Home/ScriptLoader";
// import "aos/dist/aos.css";
// import Aos from "aos";
// import '../Home/js/page/home.js'
// import '../Home/js/aos.js'
// import '../Home/js/common.js'
// import '../Home/js/scripts.js'
// import '../Home/js/jquery.min.js'
// import '../Home/js/granim.min.js'
// import '../Home/js/owl.carousel.min.js'
// import '../Home/js/slick.min.js'
// import '../Home/js/smooth-scroll.min.js'
// import "../Home/swiper@9/swiper-bundle.min.css";
// import "../Home/swiper@9/swiper-bundle.min.js";

const Mainhome = () => {
  return (
    <>
      {/* ... your code ... */}
      <ScriptLoader src="../Home/js/page/home.js" />
      <ScriptLoader src="../Home/js/aos.js" />
      <ScriptLoader src="../Home/js/common.js" />
      <ScriptLoader src="../Home/js/scripts.js" />
      <ScriptLoader src="../Home/js/jquery.min.js" />
      <ScriptLoader src="../Home/js/granim.min.js" />
      <ScriptLoader src="../Home/js/owl.carousel.min.js" />
      <ScriptLoader src="../Home/js/slick.min.js" />
      <ScriptLoader src="../Home/js/smooth-scroll.min.js" />
      <ScriptLoader src="../Home/swiper@9/swiper-bundle.min.js" />
      {/* <!--start preloader--> */}
      {/* <div className="preloader"> */}
      {/* <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div> */}
      {/* </div> */}
      <a id="start"></a>
      <div className="main-container">
        <section className="hero pt-0">
          <div className="main-banner">
            <img src={mainbanner} className="w-100" alt="Banner" />
          </div>
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
                      <GiHamburgerMenu />
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
                    <GiHamburgerMenu />
                  </a>
                </div>
              </div>
              <ul className="nav flex-column mt-5 lead text-center">
                <li className="my-2">
                  <Link className="text-white" to="/">
                    Home
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-white" to="/about">
                    About
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-white" to="/services">
                    Services
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-white" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-white" to="/games">
                    Games
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-white" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="my-2">
                  <Link className="text-white" to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div
              className="row align-items-center justify-content-around banner-content"
              data-aos="fade-up"
            >
              <div className="ol-xl-6 col-lg-6 col-md-6 col-sm-6 banner-line">
                <h1 className="font-weight-bold">
                  <a
                    href="index.php"
                    className="typewrite text-white"
                    data-period="2000"
                    data-type='[ "Web / APP Development"]'
                  >
                    <span className="wrap">&nbsp;</span>
                  </a>
                </h1>
                <p className="lead text-white">
                  Welcome to Welt Code Web! We are a team of passionate and
                  experienced developers who specialize in creating beautiful,
                  functional, and user-friendly websites for businesses and
                  individuals.
                </p>
                <a
                  className="btn btn--light type--uppercase"
                  href="tel:+919871494657"
                >
                  <span className="btn__text text-white">
                    Call us : +91 9871494657
                  </span>
                </a>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-center banner-line">
                <img src={bannerimg} className="w-100" alt="Banner" />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- end main banner -->

      <!-- start service section --> */}
      <section className="bg--secondary cms-tech pb-0">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 mt-10">
              <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
                Services
              </p>
              <h1>Innovative Services We Provide</h1>
              <p className="text-justify">
                Progressive Web Apps (PWA): Explain how your web development
                company can build a PWA that delivers a native app-like
                experience across all devices and platforms. Voice User
                Interface (VUI) Development: Showcase your ability to build
                VUIs, allowing users to interact with your website through voice
                commands and speech recognition technology.
              </p>
              <p className="text-justify">
                API Development and Integration: Explain how your web
                development company can build APIs and integrate them into your
                clients' websites, enabling seamless data exchange with other
                applications and platforms. Data Analytics and Reporting:
                Provide information on how your web development company can
                incorporate data analytics and reporting features into your
                clients' websites, allowing them to track website performance,
                user behavior, and other important metrics.
              </p>
              <a
                className="btn btn--primary type--uppercase"
                href="tel:+919871494657"
              >
                <span className="btn__text"> +91 9871494657 </span>
              </a>
            </div>
            <div className="col-lg-7 col-md-12 offset-lg-1 service-blocks">
              <div className="row">
                <div className="col-md-6">
                  <a href="javascript:void(0)" className="font-weight-normal">
                    <div
                      className="card card-2 text-center aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <div className="card__top">
                        <img
                          alt="Wordpress"
                          src={first}
                          className="img-fluid mb-3"
                        />
                      </div>
                      <div className="card__body pt-0">
                        <h4>Wordpress</h4>
                        <p className="mb-0">
                          WordPress developer is a type of web developer.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="font-weight-normal">
                    <div
                      className="card card-2 text-center mt-5 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <div className="card__top">
                        <img
                          alt="Shopify"
                          src={second}
                          className="img-fluid mb-3"
                        />
                      </div>
                      <div className="card__body pt-0">
                        <h4>Shopify</h4>
                        <p className="mb-0">
                          development store is a free Shopify account that comes
                          with a few limitations.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="font-weight-normal">
                    <div
                      className="card card-2 text-center mt-5 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <div className="card__top">
                        <img
                          alt="Shopify"
                          src={third}
                          className="img-fluid mb-3"
                        />
                      </div>
                      <div className="card__body pt-0">
                        <h4>Html</h4>
                        <p className="mb-0">
                          The tag indicates that this is an HTML5 document. The
                          html tag contains all of the HTML code for the
                          webpage, and includes the head and body sections.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 mt-60 sec-cl">
                  <a href="javascript:void(0)" className="font-weight-normal">
                    <div
                      className="card card-2 text-center aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration="750"
                    >
                      <div className="card__top">
                        <img
                          alt="Hubspot"
                          src={second}
                          className="img-fluid mb-3"
                        />
                      </div>
                      <div className="card__body pt-0">
                        <h4>PHP</h4>
                        <p className="mb-0">
                          Backend development, or server-side scripting, is all
                          about what goes on behind the scenes.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="font-weight-normal">
                    <div
                      className="card card-2 text-center mt-5 aos-init"
                      data-aos="fade-up"
                      data-aos-duration="750"
                    >
                      <div className="card__top">
                        <img
                          alt="Katra CMS"
                          src={third}
                          className="img-fluid mb-3"
                        />
                      </div>
                      <div className="card__body pt-0">
                        <h4>Codeigniter</h4>
                        <p className="mb-0">
                          CodeIgniter is a globally popular, open-source PHP
                          framework, used for developing scalable websites and
                          web apps.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="font-weight-normal">
                    <div
                      className="card card-2 text-center mt-5 aos-init"
                      data-aos="fade-up"
                      data-aos-duration="750"
                    >
                      <div className="card__top">
                        <img
                          alt="Katra CMS"
                          src={first}
                          className="img-fluid mb-3"
                        />
                      </div>
                      <div className="card__body pt-0">
                        <h4>Laravel</h4>
                        <p className="mb-0">
                          Laravel is an open-source PHP framework that develops
                          web applications using the MVC structure.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--end of masonry--> */}
        </div>
        {/* <!--end of container--> */}
      </section>
      {/* <!-- end service section --> */}
      {/* <!-- start portfolio section --> */}
      <section className="pb-0 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-8">
              <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
                Portfolio
              </p>
              <h2>Our Latest Projects</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="our_service">
                <div className="boxed bg-transparent">
                  <div className="project-thumb hover-element">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img
                            src={portfolio1}
                            alt="car services"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title">
                          <h5>Car repair Services</h5>
                          <span>Web Development</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="boxed bg-transparent">
                  <div className="project-thumb hover-element">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img
                            src={portfolio2}
                            alt="Bitcoin"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title">
                          <h5>Bitcoin Agency</h5>
                          <span>Web Development</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="boxed bg-transparent">
                  <div className="project-thumb hover-element">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img
                            src={portfolio3}
                            alt="Hosting"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title">
                          <h5>Hosting Agency</h5>
                          <span>Web Developmentg</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="boxed bg-transparent">
                  <div className="project-thumb hover-element">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img
                            src={portfolio5}
                            alt="web development"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title">
                          <h5>Kriworld</h5>
                          <span>Web Development</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="boxed bg-transparent">
                  <div className="project-thumb hover-element">
                    <a href="javascript:void(0)">
                      <div className="hover-element__initial">
                        <div className="background-image-holder">
                          <img
                            src={portfolio6}
                            alt="web development"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="hover-element__reveal" data-overlay="9">
                        <div className="project-thumb__title">
                          <h5>Neon Lights</h5>
                          <span>Web Development</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end portfolio section -->

      <!-- start process section --> */}
      <section className="pb-0 new">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="step-img text-center">
                <img src={process} className="img-fluid" alt="about Design" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 process-sequence">
              <div className="timeline" data-step="1">
                <h3>UI & UX Design</h3>
                <p>
                  Generally, people associate the word design (when it comes to
                  tech) only with visual design or web design. However, UX
                  design, which stands for 'user experience design' focuses on
                  the user or customer experience, and is the 'behind the
                  scenes' or invisible side of design.
                </p>
              </div>
              <div className="timeline" data-step="2">
                <h3>Development</h3>
                <p>
                  Web clients’ assumptions for sites are ceaselessly creating.
                  At this point, not an incredible-looking site is sufficient,
                  it should be intelligent, simple to deal with, and utilitarian
                  as well.
                </p>
              </div>
              <div className="timeline" data-step="3">
                <h3>Marketing</h3>
                <p>
                  marketing helps in increasing the brand value of any company.
                  To do business, it is not necessary to create only websites
                  and mobile applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end process section -->
      <!-- start about section --> */}
      <section className="about-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="about-box p-5 bg-light">
                <p className="mb-0 text-orange font-weight-bold type--uppercase">
                  About Us
                </p>
                <h2>Get To Know Our Progressvie Journey</h2>
                <p className="text-justify">
                  Our skilled and experienced team will help you grow your
                  business
                </p>
                <p className="text-justify">
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
                <a className="btn btn--primary type--uppercase" href="">
                  <span className="btn__text"> Learn More About Us </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end process section -->
      <!-- start technology section --> */}
      <section className="technologies pb-0">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-8 col-sm-8 mb-5">
              <div className="mb-80">
                <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
                  Technologies
                </p>
                <h2>The Technologies We Work With</h2>
              </div>
              <div className="tech-detail" id="php">
                <h2>Core PHP</h2>

                <p>
                  Backend development, or server-side scripting, is all about
                  what goes on behind the scenes. When you interact with a
                  website in some way—for example, filling out a form and
                  clicking “submit”—the frontend communicates this action to the
                  backend. The backend responds by sending the relevant
                  information to the frontend—for example, the code needed to
                  display a message such as “Thank you for filling out this
                  form”.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="laravel">
                <h2>Laravel</h2>
                <p>
                  Laravel is an open-source PHP framework that develops web
                  applications using the MVC structure. Composer based MVC.
                  Laravel uses an MVC structure that provides better
                  documentation, improves performance, and offers several
                  inbuilt functionalities. Eloquent ORM.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="codeigniter">
                <h2>CodeIgniter</h2>
                <p>
                  CodeIgniter is a globally popular, open-source PHP framework,
                  used for developing scalable websites and web apps. It allows
                  CI developers to build fast, dynamic, and robust solutions for
                  a multiple number of industries. Being based on MVC structure,
                  it helps CI experts to create smart and engaging CI solutions.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="angularjs">
                <h2>Angular JS</h2>
                <p>
                  AngularJS Web Application Development gives a solid set of
                  solution to the client side applications. AngularJS features
                  like form validation, dependencies and data binding gives an
                  interconnected set of CRUD (Create, Read, Update, Delete)
                  application is build using AngularJS. Directory layouts speed
                  the applications.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="nodejs">
                <h2>Node JS</h2>
                <p>
                  Node. js development is designed to easily create fast and
                  scalable web applications and develop solutions for
                  high-traffic needs. It offers a wide range of advantages: Easy
                  to learn: Since most developers already know JavaScript, it's
                  easy to get started using Node. js without much of a learning
                  curve.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="wordpress">
                <h2>Wordpress</h2>
                <p>
                  A WordPress developer is a type of web developer. They
                  specialize in building websites with WordPress. They are also
                  full-stack developers, meaning they can develop the front-end
                  and back-end of a website. A WordPress developer may be hired
                  to enhance the WordPress software or build a custom website
                  for a client.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="shopify">
                <h2>Shopify</h2>
                <p>
                  A development store is a free Shopify account that comes with
                  a few limitations. You can use a development store to test any
                  themes or apps that you create, or to set up a Shopify account
                  for a client. Setting up a development store and transferring
                  it to a client gives you a recurring commission.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="hubspot">
                <h2>Hubspot</h2>
                <p>
                  HubSpot consistently drives innovation in the field of web
                  development. It is a mighty editor having a simplistic nature
                  and fun to use. In a HubSpot COS and CMS development, we
                  develop the product or service tailored to your business
                  requirements, that takes your business to brand-new heights.
                  Marketing with HubSpot is impeccable as it facilitates the
                  most advanced inbound marketing tools.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="katra">
                <h2>Kartra</h2>
                <p>
                  Kartra is an online platform that facilitates shopping-cart,
                  email marketing, list building, web hosting, business
                  management, and whatnot. It is a dream tool for marketers! It
                  connects everything on a single platform for sound management.
                  It works on a drag-and-drop sequence builder that can allow
                  you to create campaigns, automate emails, add customers to
                  your subscription lists, and many more.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="kajabi">
                <h2>Kajabi</h2>
                <p>
                  Kajabi is an all-in-one business platform designed to help
                  organizations build websites and landing pages, streamline
                  payments and marketing automation, and more. Key features
                  include marketing emails, ready-to-use templates, advanced
                  automation, chat support, code editor, and webinars and
                  events.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
              <div className="tech-detail d-none" id="clickfunnel">
                <h2>ClickFunnel</h2>
                <p>
                  A click funnel is a series of pages that lead to a conversion
                  event. Prospects often enter a click funnel through a link on
                  a social media post, a paid search ad or an email. That link
                  takes the prospect to a landing page specific to a product or
                  service your business sells.
                </p>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text"> Learn more </span>
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tech-container">
                <div className="c-1">
                  <div className="c-2">
                    <div className="c-3">
                      <div
                        className="tech-icon c-icon active"
                        data-aos="zoom-in"
                        data-id="php"
                      >
                        <img alt="Image" src={icon8} />
                      </div>
                      <div
                        className="tech-icon c-icon"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-id="laravel"
                      >
                        <img alt="Laravel" src={icon6} />
                      </div>
                      <div
                        className="tech-icon c-icon"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-id="codeigniter"
                      >
                        <img alt="Codeigniter" src={icon5} />
                      </div>
                      <div
                        className="tech-icon c-icon"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-id="angularjs"
                      >
                        <img alt="Angularjs" src={icon9} />
                      </div>
                      <div
                        className="tech-icon c-icon"
                        data-aos="zoom-in"
                        data-aos-delay="150"
                        data-id="nodejs"
                      >
                        <img alt="Nodejs" src={icon7} />
                      </div>
                      <div
                        className="tech-icon c-icon-small"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-id="wordpress"
                      >
                        <img alt="Wordpress" src={icon1} />
                      </div>
                      <div
                        className="tech-icon c-icon-small"
                        data-aos="zoom-in"
                        data-aos-delay="150"
                        data-id="shopify"
                      >
                        <img alt="Shopify" src={icon2} />
                      </div>
                      <div
                        className="tech-icon c-icon-small"
                        data-aos="zoom-in"
                        data-aos-delay="450"
                        data-id="hubspot"
                      >
                        <img alt="Hubspot" src={icon3} />
                      </div>
                      <div
                        className="tech-icon c-icon-small"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-id="katra"
                      >
                        <img alt="Katra" src={icon4} />
                      </div>
                      <div
                        className="tech-icon c-icon-small"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-id="kajabi"
                      >
                        <img alt="Kajabi" src={icon5} />
                      </div>
                      <div
                        className="tech-icon c-icon-small"
                        data-aos="zoom-in"
                        data-id="clickfunnel"
                      >
                        <img alt="Clickfunnel" src={icon10} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end technology section -->
      <!-- start project count section --> */}
      <section className="project-count-section">
        <div className="container">
          <div className="counter-bg py-5">
            <h2 className="text-center pb-4">
              We Have Successfully <br />
              Completed 1500+ Projects
            </h2>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                <div className="employees">
                  <p className="counter-count">879</p>
                  <p className="employee-p">Employee</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                <div className="customer">
                  <p className="counter-count">954</p>
                  <p className="customer-p">Customer</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                <div className="design">
                  <p className="counter-count">1050</p>
                  <p className="design-p">Design</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                <div className="order">
                  <p className="counter-count">652</p>
                  <p className="order-p">Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end project count section -->
      <!-- start key feture section --> */}
      <section className="video-testimonial-section pb-0">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4">
              <div className="video-thumb">
                <img src={Image} className="img-fluid mb-0 v-img" alt="video" />
                <div className="modal-instance d-block">
                  <div className="play-button modal-trigger">
                    <img src={vidicon} className="img-fluid" alt="video icon" />
                  </div>
                  <div className="modal-container">
                    <div className="modal-content">
                      <iframe
                        height="315"
                        src="https://www.youtube.com/embed/UGlTMXSO6t0"
                        className="w-100"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12">
              <div className="blocks">
                <div className="row m-0">
                  <div className="col-md-6 col-sm-6 inner-block border-right border-bottom">
                    <div className="icon-block text-center mb-5">
                      <span className="icon icon-bg-1">
                        <h4>
                          <CiGlobe />
                        </h4>
                      </span>
                    </div>
                    <div className="text-box text-center">
                      <h3>Industries We Serve</h3>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 inner-block border-bottom">
                    <div className="icon-block text-center mb-5">
                      <span className="icon icon-bg-1">
                        <h4>
                          {" "}
                          <IoSpeedometerOutline />
                        </h4>
                      </span>
                    </div>
                    <div className="text-box text-center">
                      <h3>How We Work</h3>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 pt-4 inner-block border-right">
                    <div className="icon-block text-center mb-5">
                      <span className="icon icon-bg-1">
                        <h4>
                          {" "}
                          <IoSettingsOutline />
                        </h4>
                      </span>
                    </div>
                    <div className="text-box text-center">
                      <h3>How We Manage</h3>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 pt-4">
                    <div className="icon-block text-center mb-5">
                      <span className="icon icon-bg-1">
                        <h4>
                          {" "}
                          <IoIosStarOutline />
                        </h4>
                      </span>
                    </div>
                    <div className="text-box text-center">
                      <h3>How Much We Are Rated</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--<section className="pricing-plan pb-0 "> */}
      {/* <div className="container">
          <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
            Services
          </p>
          <h1>Our Pricing Model</h1>
          <div className="row">
            <div className="col-md-4 pricing-box pr-0">
              <div className="pricing-block border-box py-5 px-3 text-center">
                <i className="fas fa-store"></i>
                <h3 className="mb-0">Business Websites</h3>
                <h2>Starting From $181 + Android app free</h2>
                <ul>
                  <li>
                    <i className="ti-check-box"></i>1 Free Domain Name
                  </li>
                  <li>
                    <i className="ti-check-box"></i>UL (5) Pages* (Informative
                    Website)
                  </li>
                  <li>
                    <i className="ti-check-box"></i>Unlimited (Bandwidth/ Space)
                  </li>
                  <li>
                    <i className="ti-check-box"></i>cPanel* Access{" "}
                  </li>
                  <li>
                    <i className="ti-check-box"></i>100% Responsive Website{" "}
                  </li>
                  <li>
                    <i className="ti-check-box"></i>WhatsApp Integration{" "}
                  </li>
                  <li>
                    <i className="ti-check-box"></i>SSL Certificate{" "}
                  </li>
                  <li>
                    <i className="ti-check-box"></i>cPanel* Access{" "}
                  </li>
                </ul>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text">Learn More</span>
                </a>
              </div>
            </div>
            <div className="col-md-4 px-0 pricing-box">
              <div className="pricing-block border-box py-5 px-3 text-center">
                <i className="fas fa-user fa-5x"></i>
                <h3 className="mb-0">eCommerce Websites</h3>
                <h2>Starting From $362 + Android app free</h2>
                <ul>
                  <li>
                    <i className="ti-check-box"></i>1 Free Domain Name
                  </li>
                  <li>
                    <i className="ti-check-box"></i>UL (10) Pages* (Dynamic
                    Design)
                  </li>
                  <li>
                    <i className="ti-check-box"></i>Unlimited (Bandwidth/ Space)
                  </li>
                  <li>
                    <i className="ti-check-box"></i>cPanel* Access{" "}
                  </li>
                  <li>
                    <i className="ti-check-box"></i>100% Responsive Website{" "}
                  </li>
                  <li>
                    <i className="ti-check-box"></i>WhatsApp Integration{" "}
                  </li>
                  <li>
                    <i className="ti-check-box"></i>SSL Certificate{" "}
                  </li>
                  <li>
                    <i className="ti-check-box"></i>cPanel* Access{" "}
                  </li>
                </ul>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text">Learn More</span>
                </a>
              </div>
            </div>
            <div className="col-md-4 pl-0 pricing-box">
              <div className="pricing-block border-box py-5 px-3 text-center">
                <i className="fas fa-crown fa-5x"></i>
                <h3 className="mb-0">Android App</h3>
                <h2>Starting From $604</h2>
                <ul>
                  <li>
                    <i className="ti-check-box"></i>1 year Support
                  </li>
                  <li>
                    <i className="ti-check-box"></i>App Maintanance
                  </li>
                  <li>
                    <i className="ti-check-box"></i>App on Play Store
                  </li>
                  <li>
                    <i className="ti-check-box"></i>Flutter App
                  </li>
                  <li>
                    <i className="ti-check-box"></i>Native App
                  </li>
                  <li>
                    <i className="ti-check-box"></i>Hybrid App
                  </li>
                  <li>
                    <i className="ti-check-box"></i>IOS App
                  </li>
                </ul>
                <a
                  className="btn btn--primary type--uppercase"
                  href="javascript:void(0)"
                >
                  <span className="btn__text">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      {/* </section> */}
      {/* <!-- end key feture section -->
      <!-- start industries section -->

      <!-- end industries section -->
      <!-- start blog section --> */}
      <section className="blog-section home-blog-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-2">
              <p className="mb-0 text-orange font-weight-bold type--uppercase tiny-title">
                Latest News
              </p>
              <h2>Blog Post</h2>
            </div>
            <div className="col-lg-6">
              <div className="blog-block mb-5 d-flex">
                <div className="blog-img">
                  <img src={blog1} className="img-fluid" alt="Blog" />
                </div>
                <div className="blog-content">
                  <p>13 March</p>
                  <h4>
                    <a href="">Creative UI/UX Design</a>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog-block mb-5 d-flex">
                <div className="blog-img">
                  <img src={blog2} className="img-fluid" alt="Blog" />
                </div>
                <div className="blog-content">
                  <p>13 March</p>
                  <h4>
                    <a href="">Designing Your Own Logo</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end blog section --> */}
      {/* </div> */}
      {/* // </section> */}
      {/* <!-- back to top arrow --> */}
      <a
        className="back-to-top inner-link"
        href="#"
        data-scroll-className="100vh:active"
      >
        <i className="ti-arrow-up"></i>
      </a>
      {/* <!-- start footer section --> */}
      <section className="contact-sec-two sec-title pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5 career d-lg-block pr-0">
              <div className="right-sec">
                <div className="right-sec-content">
                  <h2 className="text-white">Reach Us</h2>
                  <h4 className="text-white">
                    <MdOutlineEmail />
                    info@weltcodeweb.com
                  </h4>
                  <h4 className="text-white">
                    <MdOutlinePhoneIphone />
                    +91 9871494657
                  </h4>
                  {/* <!-- <h4 className="text-white"><i className="fa fa-mobile pr-3"></i>+91 7017182736</h4>--> */}
                  <h4 className="text-white">
                    <FaLocationDot /> Welt Code Web private ltd 367, 2nd floor
                    Sarai khwaja Faridabad Near Bajrang chowk Faridabad Haryana
                    121003
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
                      Faridabad Near Bajrang chowk Faridabad Haryana 121003
                      <br />
                      <MdOutlinePhoneIphone />
                      <a href="tel:+919871494657">+91 9871494657</a>
                      <br />
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
                    {" "}
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
                Copyright 2023. All rights reserved to
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
                  <MdOutlineEmail /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainhome;
