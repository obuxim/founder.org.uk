import React from 'react'

const AboutCounter = () => {
    return (
        <>
            <div className="counter-area pb-100">
        <div className="container">
          <div className="counter-bg">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-users" />
                  </div>
                  <div className="counter-text">
                    <h1 style={{fontSize: 17}}>
                      <span className="counter">Quality <br/>eLearning</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-books" />
                  </div>
                  <div className="counter-text">
                  <h1 style={{fontSize: 17}}>
                      <span className="counter">Best entrepreneurial solution</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-graduation-cap" />
                  </div>
                  <div className="counter-text">
                  <h1 style={{fontSize: 17}}>
                      <span className="counter">Expert <br/>assistance</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <div className="counter-text">
                  <h1 style={{fontSize: 17}}>
                      <span className="counter">Affordable <br/>course</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
        </>
    )
}

export default AboutCounter;
