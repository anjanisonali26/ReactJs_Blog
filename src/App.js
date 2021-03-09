import "./App.css";
import Portfolio from "./components/Portfolio.jsx";


function App() {
  const portfolioLinks = [
    {
      title: "Angular8 -> Frontend",
      caption: "E-comerce & Web Tournament",
      link: "https://jakartatournament.netlify.app/home"
    },
    {
      title: "NodeJS (Express) -> BackEnd",
      caption: "BackEnd Game & Web Tournament",
      link: "http://bit.ly/backendgame"
    },
    {
      title: "Design",
      caption: "Adobe Illustrator, Adobe XD, CorelDraw",
      link: "http://bit.ly/3qa8MvV"
    }

  ];
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
          Anjani Sonali Bendre
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Sosmed
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome!</div>
            <div className="intro-heading text-uppercase">My Website</div>
            <a
              className="btn btn-danger btn-xl text-uppercase js-scroll-trigger"
              href="http://bit.ly/CV_AnjaniSonaliBendre"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Education and Experience</h2>
              <h3 className="section-subheading text-muted">
                This is my edu and experience.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img class="img-telkom" src="https://smktelkom-pwt.sch.id/wp-content/uploads/2019/02/logo-telkom-schools-bundar-1024x1024.png" />
              </span>
              <h4 className="service-heading">Telkom School</h4>
              <p className="text-muted">
                SMK Telkom Malang is the pioneer of the first vocational high school in Indonesia in the field of Technology and Information Technology.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img class="img-saltac" src="https://media-exp1.licdn.com/dms/image/C510BAQGy3oW6l2gXig/company-logo_200_200/0/1582168743193?e=2159024400&v=beta&t=dp8X-IyCthfAAoxTzoGi_7KpfriiYaC0hFU6s7UwqVE" />
              </span>
              <h4 className="service-heading">Salt Academy</h4>
              <p className="text-muted">
                Guaranteed job placement. in the industry and priority. to work for SALT Indonesia. DEVELOP YOUR ATTITUDE.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img class="img-saltind" src="https://media-exp1.licdn.com/dms/image/C510BAQENgKKAPBX4iw/company-logo_200_200/0/1557821978122?e=2159024400&v=beta&t=rQK9Dpv7NGWkar6SSALXn-p7l73MrfzGQw5NwWi2jWA" />
              </span>
              <h4 className="service-heading">SALT Indonesia</h4>
              <p className="text-muted">
                Here I work as a Frontend Developer. ENTERPRISE MARKETING TECHNOLOGY DEVELOPMENT. Assist enterprise adaptable to technology disruptions by marketing technology transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Workshop experience</h2>
              <h3 className="section-subheading text-muted">
                Hi, I include the experience of the IT workshop, and the experience of participating in the competition.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>May 2019</h4>
                      <h4 className="subheading">Workshop Security Software Freedom Day 2019 in Brawijaya University</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Security software is any type of software that secures and protects a computer, network or any computing-enabled device. It manages access control, provides data protection, secures the system against viruses and network/Internet based intrusions, and defends against other system-level security risks.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>June 2018</h4>
                      <h4 className="subheading">Essay Competition</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                      The essay competition tells about the world of IT, consisting of 600 words, 3 pages.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>August 2019</h4>
                      <h4 className="subheading">Paskibra at PT Telkom Area Malang</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                      Here I am as a flag raiser, here I learn about courage, solidarity, and teamwork
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be Part
                      <br />
                      Of Our
                      <br />
                      Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                My Social Media
              </h2>
              <h3 className="section-subheading text-muted">
                Here, I describe my social media which I often use.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                  alt="instagram"
                />
                <h4>Instagram</h4>
                <p className="text-muted">Anjani Sonali Bendre</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/anjanisonalii/">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt=""
                />
                <h4>Github</h4>
                <p className="text-muted">anjanisonali26</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://github.com/anjanisonali26">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="f.png"
                  alt=""
                />
                <h4>Facebook</h4>
                <p className="text-muted">Anjani Sonali Bendre</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/anjani.bendre26/">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/envato.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/designmodo.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/themeforest.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img
                  className="img-fluid d-block mx-auto"
                  src="img/logos/creative-market.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Please contact Me
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">
                Copyright &copy; AnjaniSB 2021
              </span>
            </div>
           
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="https://wa.me/6287751766663">WhatsApp</a>
                </li>
                <li className="list-inline-item">
                  <a href="https://t.me/anjanisonalii">Telegram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
