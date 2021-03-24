import Slider from "react-slick";

 const Testimonial = () => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      
        <>
        <div className="testimonial-area pt-130 pb-100" style ={ { backgroundImage: "url('assets/img/bg/01.jpg')" } }>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center section-title-white  mb-60">
                <h2>Our learner’s appraisal</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
            <Slider {...settings} className="testimonial-active">
                <div className="testimonial-wrapper mb-30">
                  <div className="testimonial-text">
                    <span>The courses were filled with strong entrepreneurial theories and practical examples of the entrepreneurial world. I benefited from this course a lot and enjoyed it too. </span>
                    <p>Rnimad minima veniam quis nostreercit ationem ullam corporis suscipit laboriosam
                      nisiut</p>
                    <div className="clientsay-name">
                      <div className="client-say-img">
                        <img src="assets/img/testimonial/01.png" alt="" />
                      </div>
                      <div className="client-say-content">
                        <h4>Sousa Fernandes</h4>
                        <span>CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-wrapper mb-30">
                  <div className="testimonial-text">
                    <span>Excellent courses with clear and precise contents. Recommended to all the aspiring entrepreneurs.</span>
                    <p>Rnimad minima veniam quis nostreercit ationem ullam corporis suscipit laboriosam
                      nisiut</p>
                    <div className="clientsay-name">
                      <div className="client-say-img">
                        <img src="assets/img/testimonial/01.png" alt="" />
                      </div>
                      <div className="client-say-content">
                        <h4>Sousa Fernandes</h4>
                        <span>CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-wrapper mb-30">
                  <div className="testimonial-text">
                    <span>Sed ut perspiciatis unde omnis
                      natus error sit voluptatem accusa
                      ntium dolore mque lauda enim ad
                      minima veniam quis nostrumexe
                      rcitationem ullam corporise</span>
                    <p>Rnimad minima veniam quis nostreercit ationem ullam corporis suscipit laboriosam
                      nisiut</p>
                    <div className="clientsay-name">
                      <div className="client-say-img">
                        <img src="assets/img/testimonial/01.png" alt="" />
                      </div>
                      <div className="client-say-content">
                        <h4>Sousa Fernandes</h4>
                        <span>CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="test-img mb-30">
                <img src="assets/img/testimonial/test.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
  

  export default Testimonial;