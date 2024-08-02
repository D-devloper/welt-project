import React from "react";
import "../Game/css/all.css";
import "../Game/css/css-font.css";
import "../Game/css/icon.css";
import "../Game/css/master.css";
import "../Game/css/slick-theme.css";
import "../Game/css/slick.css";
import "../Game/css/style.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo6 from "../Game/images/logo6.png";
import plane2 from "../Game/images/plane2.gif";
import kasino from "../Game/images/kasino4.gif";
import p5 from "../Game/images/p5.gif";
import c3 from "../Game/images/c3-unscreen.gif";
import wheel from "../Game/images/wheel.gif";
import parity2 from "../Game/images/parity2.gif";
import bingo2 from "../Game/images/bingo2.gif";
import ab2 from "../Game/images/ab2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
const GamesSec = () => {
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
                      <a href="">
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
                <h1 className="text-white font-weight-bold">Our Games</h1>
              </div>
            </div>
          </div>
          {/* <!-- end side menu --> */}
        </section>
        {/* <!-- end main banner --> */}

        <section className=" pb-0 overflow-visible">
          <h1 className="light-text">All Games</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-9 offset-md-3 col-xl-9 offset-xl-3">
                <div className="title d-flex">
                  <div className="border-before"></div>
                  <h1 className="pl-3">
                    {" "}
                    Explore Our Exciting Games Collection{" "}
                  </h1>
                </div>
                <p className="pl-4">
                  Dive into a world of adventure and excitement with our
                  carefully crafted games .
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <marquee behavior="scroll" direction="left" scrollamount="10">
                  <img src={plane2} alt="Your Image" width="200" height="150" />

                  <span
                    style={{
                      fontSize: "17px",
                      fontWeight: " 600",
                      marginTop: "12px",
                    }}
                  >
                    we are passionate about creating immersive and engaging
                    gaming experiences. With our expert team of developers,
                    designers, and artists, we bring ideas to life and deliver
                    high-quality games across various genres and platforms
                  </span>

                  <img src={plane2} alt="Your Image" width="200" height="150" />
                </marquee>
              </div>
            </div>
          </div>
        </section>

        <div className="container d-none d-md-block">
          <div
            className="row"
            style={{
              justifyContent: "center;",
              alignItems: "center;",
              marginTop: "10px;",
            }}
          >
            <div className="col-md-6 ">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px;",
                }}
                className="tiny-title mb-0"
              >
                Casino Games
              </h1>

              <p>
                Step into the thrilling world of casino games, where excitement,
                strategy, and luck collide to create an unforgettable gaming
                experience. Whether you're a seasoned player or new to the world
                of casinos, our collection of games offers something for
                everyone.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>

            <div className="col-md-4 text-right">
              <div className="game-img">
                <img
                  src={kasino}
                  alt=""
                  style={{ width: "247px;", marginLeft: "60px" }}
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "60px;" }}>
            <div className="col-md-6 text-left">
              <div className="game-img">
                <img src={p5} alt="" style={{ maxWidth: "286px;" }} />
              </div>
            </div>
            <div className="col-md-6 ">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
                className="tiny-title mb-0"
              >
                Aviator Game
              </h1>

              <p>
                Dive into the thrilling world of Aviator Games, where
                imagination takes flight and adventure awaits! Our collection of
                games is designed to captivate players of all ages, offering a
                blend of excitement, strategy, and endless fun
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 ">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
                className="tiny-title mb-0"
              >
                Color Prediction
              </h1>

              <p>
                Are you ready to put your prediction skills to the test? Welcome
                to the Color Prediction Game, where you'll embark on a thrilling
                journey of predicting the next color in a sequence. Simple yet
                addictive, this game will challenge your instincts and keep you
                hooked for hours on end.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6 text-right ">
              <div className="game-img">
                <img src={c3} alt="" style={{ width: "388px" }} />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 text-left">
              <div className="game-img">
                <img
                  src={wheel}
                  alt=""
                  style={{ maxWidth: "286px", borderRadius: "50%" }}
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
                className="tiny-title mb-0"
              >
                Wheelocity Game
              </h1>

              <p>
                Wheelocity Game" is a thrilling racing experience that puts you
                in the driver's seat of the most powerful and exotic cars. With
                stunning graphics and realistic physics, you'll feel the
                adrenaline rush as you race against the clock and other players
                from around the world.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
          </div>
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 ">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
                className="tiny-title mb-0"
              >
                Parity Game
              </h1>

              <p>
                Parity Game is a thrilling puzzle game that challenges players
                to think strategically and solve complex puzzles. With its
                minimalist design and intuitive gameplay, Parity Game offers a
                refreshing and immersive gaming experience.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6 text-right ">
              <div className="game-img">
                <img src={parity2} alt="" style={{ width: "258px" }} />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 text-left">
              <div className="game-img">
                <img src={bingo2} alt="" style={{ maxWidth: "286px" }} />
              </div>
            </div>
            <div className="col-md-6 ">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
                className="tiny-title mb-0"
              >
                Wingo Games
              </h1>

              <p>
                Wingo Games is a leading game development studio dedicated to
                creating captivating and innovative gaming experiences. With a
                talented team of developers, designers, and artists, we bring
                creative ideas to life, delivering high-quality games that span
                a variety of genres and platforms.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 ">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
                className="tiny-title mb-0"
              >
                Andar Bahar Game
              </h1>

              <p>
                Parity Game is a thrilling puzzle game that challenges players
                to think strategically and solve complex puzzles. With its
                minimalist design and intuitive gameplay, Parity Game offers a
                refreshing and immersive gaming experience.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6 text-right ">
              <div className="game-img">
                <img src={ab2} alt="" style={{ width: "252px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- for mobile view --> */}

        <div className="container d-md-none">
          <div
            className="row"
            style={{
              justifyContent: " center",
              alignItems: "center",
              marginTop: "10px;",
            }}
          >
            <div className="col-md-6 text-center">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
              >
                Casino Game
              </h1>

              <p>
                Step into the thrilling world of casino games, where excitement,
                strategy, and luck collide to create an unforgettable gaming
                experience. Whether you're a seasoned player or new to the world
                of casinos, our collection of games offers something for
                everyone.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>

            <div className="col-md-6 text-center">
              <div className="game-img">
                <img
                  src={kasino}
                  alt=""
                  style={{ width: "247px", marginTop: "20px" }}
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 text-center">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
              >
                Aviator Game
              </h1>

              <p>
                Dive into the thrilling world of Aviator Games, where
                imagination takes flight and adventure awaits! Our collection of
                games is designed to captivate players of all ages, offering a
                blend of excitement, strategy, and endless fun
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6 text-center">
              <div className="game-img">
                <img
                  src={p5}
                  alt=""
                  style={{ maxWidth: "286px", marginTop: "20px;" }}
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 text-center">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
              >
                Color Prediction
              </h1>

              <p>
                Are you ready to put your prediction skills to the test? Welcome
                to the Color Prediction Game, where you'll embark on a thrilling
                journey of predicting the next color in a sequence. Simple yet
                addictive, this game will challenge your instincts and keep you
                hooked for hours on end.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6  text-center">
              <div className="game-img">
                <img
                  src={c3}
                  alt=""
                  style={{ width: "388px", marginTop: "20px" }}
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 text-center">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
              >
                Wheelocity Game
              </h1>

              <p>
                Wheelocity Game" is a thrilling racing experience that puts you
                in the driver's seat of the most powerful and exotic cars. With
                stunning graphics and realistic physics, you'll feel the
                adrenaline rush as you race against the clock and other players
                from around the world.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6 text-center">
              <div className="game-img">
                <img
                  src={wheel}
                  alt=""
                  style={{
                    maxWidth: "286px",
                    borderRadius: "50%",
                    marginTop: "20px;",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 text-center">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
              >
                Parity Game
              </h1>

              <p>
                Parity Game is a thrilling puzzle game that challenges players
                to think strategically and solve complex puzzles. With its
                minimalist design and intuitive gameplay, Parity Game offers a
                refreshing and immersive gaming experience.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6 text-center ">
              <div className="game-img">
                <img
                  src={parity2}
                  alt=""
                  style={{ width: "258px", marginTop: "20px" }}
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 text-center">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
              >
                Wingo Games
              </h1>

              <p>
                Wingo Games is a leading game development studio dedicated to
                creating captivating and innovative gaming experiences. With a
                talented team of developers, designers, and artists, we bring
                creative ideas to life, delivering high-quality games that span
                a variety of genres and platforms.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6 text-center">
              <div className="game-img">
                <img
                  src={bingo2}
                  alt=""
                  style={{ width: "286px", marginTop: "20px" }}
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-6 text-center">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(transparent, transparent), radial-gradient(circle at top left, #091271, #e20346)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "27px",
                }}
              >
                Andar Bahar Game
              </h1>

              <p>
                Parity Game is a thrilling puzzle game that challenges players
                to think strategically and solve complex puzzles. With its
                minimalist design and intuitive gameplay, Parity Game offers a
                refreshing and immersive gaming experience.
              </p>

              <a
                className="btn btn--primary type--uppercase"
                href="contact.php"
              >
                <span className="btn__text">Purchage Now</span>
              </a>
            </div>
            <div className="col-md-6 text-center ">
              <div className="game-img">
                <img
                  src={ab2}
                  alt=""
                  style={{ width: "252px", marginTop: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- for mobile view  end --> */}

        <section className="mt-5">
          <div className="container">
            <div className="row counter-bg bottom-content">
              <div className="col-lg-12 col-md-12">
                <a
                  href="contact.php"
                  className="btn-me"
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px 29px",
                    fontSize: "13px",
                    borderRadius: "20px, 0px, 20px, 0px",
                  }}
                >
                  {" "}
                  Let's Create Your Next Game
                </a>
                {/* <br><br> */}
                <h2 className="text-white mb-0 " style={{ paddingTop: "15px" }}>
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
                    <LuInstagram />
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

export default GamesSec;
