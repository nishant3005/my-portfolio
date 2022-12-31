import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ClientCarousel from '../components/ClientCarousel';
import ProgressBar1 from '../components/ProgressBar/ProgressBar1';
import ProgressBar2 from '../components/ProgressBar/ProgressBar2';
import ProgressBar3 from '../components/ProgressBar/ProgressBar3';
import Footer from '../components/Footer';
import { EducationData } from '../components/Data/EducationData';
import { Helmet } from 'react-helmet-async';

export default function AboutScreen() {
  return (
    <div className="body-background-color">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h2 className="text-center heading-spacing heading-secondary mb-0">
        About
      </h2>
      <Container>
        <Container className="card-container pb-5">
          <Row>
            <Col md={6} className="d-flex flex-wrap">
              <img
                className="profile-img m-auto"
                src="/images/profile.png"
                alt="about-img"
              />
            </Col>
            <Col md={6}>
              <p className="heading-primary" style={{ textAlign: 'start' }}>
                ABOUT ME
              </p>
              <h2 className="heading-secondary" style={{ textAlign: 'start' }}>
                A UI/UX Designer & Web Developer Based in India
              </h2>

              <Row className="about-info pt-4">
                <Col md={12}>
                  <p>
                    Name:{' '}
                    <span className="about-info-detail px-2">Nishant Raj</span>
                  </p>
                  <p>
                    Address:{' '}
                    <span className="about-info-detail px-2">
                      New Delhi, India
                    </span>
                  </p>
                </Col>
                <Col md={12}>
                  <p>
                    Email:{' '}
                    <span className="about-info-detail px-2">
                      nishantraj3051@gmail.com
                    </span>
                  </p>
                  <p>
                    Phone:{' '}
                    <span className="about-info-detail px-2">
                      +91 9636126427
                    </span>
                  </p>
                </Col>
              </Row>

              <a
                className="btn btn-1 mt-4"
                href="https://drive.google.com/file/d/1PEkeFtNSQYv___mxVY_D8RUvPwXVaRlS/view?usp=sharing"
                target="_blank"
                download="Resume"
                rel="noreferrer"
              >
                Download CV
              </a>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <p className="heading-primary">EDUCATION</p>
          <h2 className="heading-secondary pb-5">My Education</h2>
          <div className="education-section">
            {EducationData.map((education) => (
              <div
                key={education.id}
                className="d-flex align-items-center education-card"
              >
                <img
                  src={education.image}
                  alt="icon"
                  className="education-icon"
                />
                <div className="d-flex flex-column education-details">
                  <strong className="about-info-detail">
                    {education.year}
                  </strong>
                  <h4>{education.standard}</h4>
                  <div className="institute-details">
                    <p>{education.institute}</p>
                    <p>{education.place}</p>
                    <p>
                      Result: <strong>{education.grade}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <Container className="py-5 skill-info">
          <p className="heading-primary">SKILLS</p>
          <h2 className="heading-secondary pb-5">My skills</h2>
          <Row>
            <Col md={4}>
              <ProgressBar1 />
            </Col>
            <Col md={4}>
              <ProgressBar2 />
            </Col>
            <Col md={4}>
              <ProgressBar3 />
            </Col>
          </Row>
        </Container>

        <Container className="pt-5 testimonial-container">
          <p className="heading-primary">TESTIMONIALS</p>
          <h2 className="heading-secondary pb-5">Happy Guests</h2>
          <ClientCarousel />
        </Container>

        <Footer />
      </Container>
    </div>
  );
}
