import React from 'react'
import './accordion.scss'
import Accordion from 'react-bootstrap/Accordion';
function Accordionn() {
  return (
    <div>
        <section className="faq section-padding">
        
            <div className="container">
                
                <div className="row">

                    <div className="col-lg-12 col-12">

                        <h3 className="mb-5">Frequently Asked Questions</h3>

                        <Accordion  className="accordion" id="accordionExample">

                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>
                                    Are those HTML templates absolutely free for any kind of usage?
                                </Accordion.Header>

                                <Accordion.Body>
                                    <p>Yes, they are 100% free and there is no hidden charge.</p>
                                    <p>They can be used for your commercial websites.</p>
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1" >
                                <Accordion.Header>
                                    Can I use them as a CMS theme or a part of website builder?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Yes, you can use them.</p>
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="2" >
                                <Accordion.Header>
                                    Can I use them as a CMS theme or a part of website builder?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Yes, please tell us what you need. We will try our best to fulfill it.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3" >
                                <Accordion.Header>
                                    I cannot find a suitable HTML template. Can I request new template?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Yes, please tell us what you need. We will try our best to fulfill it.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4" >
                                <Accordion.Header>
                                    How do I support Tooplate?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Yes, you can use them.</p>
                                </Accordion.Body>
                            </Accordion.Item>

                        <span className="faq-info-text">Please send us a message if you have anything to say. Send an email message to <strong>contact (at) tooplate (dot) com</strong></span>

                        </Accordion>
                    </div>
                </div>
            </div>
         </section>
    </div>
  )
}

export default Accordionn