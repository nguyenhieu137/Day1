import React from 'react'
import './contact.scss'
function Contact() {
  return (
    <div>
        <section className="contact section-padding pt-0" id="contact">
        <div className="container">
            <div className="row">

            <div className="col-lg-6 col-md-6 col-12">
                <form action="#" method="get" className="contact-form webform"  role="form">
                    
                    <div className="form-group d-flex flex-column-reverse">
                        <input type="text" className="form-control" name="cf-name" id="cf-name" placeholder="Your Name"/>

                        <label htmlFor="cf-name" className="webform-label">Full Name</label>
                    </div>

                    <div className="form-group d-flex flex-column-reverse">
                        <input type="email" className="form-control" name="cf-email" id="cf-email" placeholder="Your Email"/>

                        <label htmlFor="cf-email" className="webform-label">Your Email</label>
                    </div>

                    <div className="form-group d-flex flex-column-reverse">
                        <textarea className="form-control" rows="5" name="cf-message" id="cf-message" placeholder="Your Message"></textarea>

                        <label htmlFor="cf-message" className="webform-label">Message</label>
                    </div>

                    <button type="submit" className="form-control" id="submit-button" name="submit">Send</button>
                </form>
            </div>

                <div className="mx-auto col-lg-4 col-md-6 col-12">
                    <h3 className="my-4 pt-4 pt-lg-0">Say hello</h3>

                    <p className="mb-1">010-020-0340</p>

                    <p>
                        <a href="#">
                            hello@company.co
                        <i className="fas fa-arrow-right custom-icon"></i>
                        </a>
                    </p>

                    <ul className="social-links mt-2">
                        <li><a href="https://fb.com/tooplate" rel="noopener" className="fab fa-facebook"></a></li>
                        <li><a href="#" rel="noopener" className="fab fa-twitter"></a></li>
                        <li><a href="#" rel="noopener" className="fab fa-instagram"></a></li>
                        <li><a href="#" rel="noopener" className="fab fa-linkedin"></a></li>
                        <li><a href="#" rel="noopener" className="fab fa-youtube"></a></li>
                    </ul>
                    
                <p className="copyright-text mt-5 pt-3">Copyright &copy; 2020 Ben Resume Page</p>
                    
                    <p>Design: <a href="https://www.tooplate.com" title="free HTML templates" target="_blank">Tooplate</a></p>
                </div>

            </div>
        </div>
        </section>
    </div>
  )
}

export default Contact