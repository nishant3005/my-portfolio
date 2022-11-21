import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HomeScreen() {
  return (
    <div>
      <Helmet>
        <title>My Portfolio</title>
      </Helmet>
      <Row>
        <Col md={6} className="left-col pb-5">
          <Container className="home-info">
            <h5 className="heading-1">UI/UX Designer & Developer</h5>
            <h1 className="heading-2">I'm Nishant</h1>
            <Link to="/about">
              <button className="btn-1">More about me</button>
            </Link>
            {'  '}
            <Link to="/contact">
              <button className="btn-2">Hire me</button>
            </Link>
          </Container>
        </Col>
        <Col md={6} className="right-col">
          <img
            src="/images/home-min.png"
            alt="profile-pic"
            className="img-style"
          />
        </Col>
      </Row>
    </div>
  );
}
