import AboutCounter from "../About/Counter";

const About = () => {
  return (
    <>
      <section
        className="page-title-area"
        style={{ backgroundImage: "url(assets/img/bg/page-title-bg-01.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="page-title text-center">
                <h1>About Us</h1>
                <div className="breadcrumb">
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">
                        Home <i className="far fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-eduplus-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-img-box pos-rel mb-30">
                <div className="about-one">
                  <img src="assets/img/about/about1.jpg" alt="" />
                </div>
                <div className="about-two d-none d-lg-block">
                  <img src="assets/img/about/about2.jpg" alt="" />
                </div>
                <div className="about-tag d-none d-sm-block">
                  <div className="about-tag-inner">
                    <h2>25</h2>
                    <p>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-wrapper mb-30">
                <div className="section-title text-left mb-60">
                  <h2> We create high-flier entrepreneurs</h2>
                  <p className="left-line pos-rel pl-30">
                  Benefit your entrepreneurial ventures largely learning the essentials from Founder through the high-yielding courses 
                  </p>
                </div>
                <div className="about-inner-text">
                  <ul className="inner-content-list">
                    <li>
                      <div className="inner-content d-flex">
                        <div className="inner-content-icon">
                          <i className="fal fa-book" />
                        </div>
                        <div className="inner-content-text">
                          <h6>Professional &amp; Expert</h6>
                          <p>
                          Constructive entrepreneurial tips: while attending the courses, you’ll gain loads of entrepreneurial tips and tactics for strategic and innovative management of business opportunities in your own company{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-content d-flex mb-25">
                        <div className="inner-content-icon">
                          <i className="fal fa-trophy" />
                        </div>
                        <div className="inner-content-text">
                          <h6>Job Placement Support</h6>
                          <p>
                          Learn from top entrepreneurial bodies: we are yielding you the way to learn directly from the world renowned entrepreneur faces who’ll incline their hard-won knowledge and strategic ideas for your startup success. {" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <a className="c-btn btn-theme f-left mr-15" href="about.html">
                  learn more <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     <AboutCounter />
      <section className="we-are-area grey-bg pt-160 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="skill-wrapper">
                <div className="section-title text-left mb-35">
                  <span>
                    <i className="fal fa-ellipsis-h" /> Who We Are
                  </span>
                  <h2>Grab the opportunity to success</h2>
                  <p>
                  Short Description: Founder equips you with the right set of skills and globally equivalent entrepreneurial knowledge. Transform your learning journey into a success story. 
                  </p>
                </div>
                <div className="skill-area">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="skills mb-40">
                        <div className="skills-box">
                          <div className="chart" data-percent={83}>
                            <h3>
                              83<span>%</span>
                            </h3>
                          </div>
                        </div>
                        <h6>Enginering Studies</h6>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="skills mb-40">
                        <div className="skills-box">
                          <div className="chart2" data-percent={79}>
                            <h3>
                              79<span>%</span>
                            </h3>
                          </div>
                        </div>
                        <h6>General &amp; Other Studies</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="our-video pos-rel">
                <div className="video-thumb">
                  <img src="assets/img/bg/video-bg-02.jpg" alt="" />
                </div>
                <div className="video-area">
                  <a
                    className="popup-video"
                    href="https://www.youtube.com/watch?v=D-goSWGqI2U"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
