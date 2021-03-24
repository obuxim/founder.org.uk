import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <footer className="footer-area pt-65 pb-45" data-background="" style ={ { backgroundImage: "url('assets/img/bg/fot-01-bg.png')" } }>
        <div className="container">
          <div className="row mb-55 no-gutters align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="footer-logo">
               <Link href="/"><a>
                  <img src="assets/img/logo/footer-01-logo.png" alt />
                </a></Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
              <div className="footer-social-icon text-right pb-70">
                <Link href="/">
                <a className="fot-fb active pb-70">
                  <i className="fab fa-facebook-f" /> Facebook
                </a>
                </Link>
                <Link href="/">
                <a className="fot-twitter pb-70">
                  <i className="fab fa-twitter" /> Twitter
                </a>
                </Link>
                <Link href="/">
                  <a className="fot-google pb-70">
                    <i className="fab fa-youtube" /> Youtube
                  </a>
                </Link>
                <Link href=""><a className="fot-insta pb-70">
                  <i className="fab fa-instagram" /> Instagram
                </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-8 col-12">
              <div className="footer-widget mb-30">
                <h4 className="footer-widget-title mb-25">About</h4>
                <ul className="footer-list">
                  <li><Link href="/courses">
                    <a>All Courses</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/aboutus">
                    <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/contact">
                    <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                    <a>Free Quizzes</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/resourse">
                    <a>Free Resources</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/blog">
                  <a>Blogs</a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/privacy">
                  <a>Privacy Policy</a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/term">
                  <a>Terms & Condition</a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/redeem">
                  <a>Redeem Voucher</a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/certificate">
                  <a>Certificate Validate</a>
                  </Link>
                  </li>
                  <li>

                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-12">
              <div className="footer-widget mb-30">
                <h4 className="footer-widget-title mb-25">Newsletters</h4>
                <p className="mb-25">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accu santium doloremque laudantium totam rem aperiam{" "}
                </p>
                <form className="slider-search-form">
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="submit">
                    <i className="far fa-long-arrow-alt-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="copyright-area mt-15 text-center pt-20 pb-20">
            <div className="row">
              <div className="col-xl-12">
                <div className="copyright-text">
                  <p>
                    Copyright © 2020 <a href="#">BDevs</a> All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
