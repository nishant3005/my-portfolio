import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

export default function ContactScreen() {
  const formData = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        formData.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Please try again!');
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="body-background-color">
        <h2 className="text-center align-items-center heading-secondary heading-spacing">
          Contact
        </h2>
        <Container fluid>
          <Row>
            <Col md={6} className="img-container">
              <img
                src="/images/contact-min.png"
                className="contact-img"
                alt="contact"
              />
            </Col>
            <Col md={6}>
              <Form ref={formData} onSubmit={sendEmail}>
                <Row>
                  <Col className="p-3">
                    <h5 style={{ fontWeight: 'bold' }}>Contact me</h5>
                    <p>I'm open for any suggestion or just to have a chat</p>
                    <div className="about-info px-0">
                      <p>
                        <i className="fa fa-solid fa-phone info-icon-style"></i>
                        Phone:{' '}
                        <span className="about-info-detail">
                          <a
                            href="tel:+919636126427"
                            style={{ color: '#d5c455', textDecoration: 'none' }}
                          >
                            +91 9636126427
                          </a>
                        </span>
                      </p>

                      <p>
                        <i className="fa fa-solid fa-envelope info-icon-style"></i>
                        Email:{' '}
                        <span className="about-info-detail">
                          <a
                            href="mailto:nishantraj3051@gmail.com"
                            style={{ color: '#d5c455', textDecoration: 'none' }}
                          >
                            nishantraj3051@gmail.com{' '}
                          </a>
                        </span>
                      </p>

                      <p>
                        <i className="fa fa-duotone fa-map-pin info-icon-style"></i>
                        Address:{' '}
                        <span className="about-info-detail">
                          New Delhi, India
                        </span>
                      </p>
                    </div>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Control
                        type="text"
                        placeholder="Your name"
                        required
                        name="user_name"
                        autoComplete="off"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="Your email"
                        required
                        name="user_email"
                        autoComplete="off"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                      {
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Write your message here..."
                          required
                          autoComplete="off"
                        ></textarea>
                      }
                    </Form.Group>
                    <Button
                      style={{ backgroundColor: '#d5c455', margin: '0' }}
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Container className="px-0 pb-5 m-0">
                <strong>Connect with me here</strong>

                <div className="icon-section">
                  <span>
                    <a
                      href="https://www.linkedin.com/in/nishant-raj-5650011ba/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/images/icons/linkedin.png"
                        alt="linkedin-icon"
                        className="contact-icon"
                      />
                    </a>
                  </span>
                  <span className="mx-3">
                    <a
                      href="https://twitter.com/nishantr30"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/images/icons/twitter.png"
                        alt="twitter-icon"
                        className="contact-icon"
                      />
                    </a>
                  </span>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
}
