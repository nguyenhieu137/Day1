import React, { useEffect, useState } from 'react';
import './navbar.scss';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let a = window.pageYOffset;
      console.log(a)
      if (a > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Thêm trình nghe sự kiện scroll
    window.addEventListener('scroll', handleScroll);

    // Xóa trình nghe sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Kích hoạt chỉ một lần sau khi component mount

  const handleNavClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scroll' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          Ben Resume
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#intro" className="nav-link smoothScroll" onClick={handleNavClick}>
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link smoothScroll" onClick={handleNavClick}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link smoothScroll" onClick={handleNavClick}>
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link smoothScroll" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-lg-0 mt-3 mb-4 mb-lg-0">
            <a href="#" className="custom-btn btn" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
