
import Link from 'next/link';
import HeaderAside from "./Header-aside"

const Header = () => {
    return (
        <>
      <header className="header-transparent">
        <div id="sticky-header" className="main-menu-area menu-padding pl-55 pr-55">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-7 col-md-6 col-8">
                <div className="logo">
                  <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                </div>
              </div>
              <div className="col-xl-7 d-none d-xl-block">
                <div className="main-menu text-left ml-15">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="active"><Link href="/"><a>Home</a></Link>
                      </li>
                      <li><Link href="/courses"><a>All Courses </a></Link>
                        
                      </li>
                      <li><a href="#">Special Deal </a>
                      </li>
                      <li><Link href="/blog"><a>Blog </a></Link>
                        
                      </li>
                      <li><a href="#">Free Resources <i className="far fa-angle-down" /></a>
                      </li>
                      <li><a href="contact.html">Login</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-6 col-4">
                <div className="header-right d-sm-flex align-items-center justify-content-end">
                  <div className="header-icon d-none d-md-inline-block">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-youtube" /></a>
                  </div>
                  <div className="header-sing d-none d-md-inline-block">
                    <a href="contact.html"> <i className="far fa-user-circle" />sing in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderAside />
        </>
    )
}

export default Header;