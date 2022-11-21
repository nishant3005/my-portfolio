import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import { ServiceData } from '../components/Data/ServiceData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ServicesScreen() {
  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="body-background-color">
        <h2 className="text-center align-items-center heading-secondary heading-spacing">
          What I do?
        </h2>

        <Container className="card-container pb-5 mb-5">
          {ServiceData.map((service) => (
            <Card className="text-center card-style p-1 mx-3 my-4">
              <img src={service.icon} alt="icon" className="icon-style pt-3" />
              <Card.Body>
                <Card.Title className="pt-4">{service.name}</Card.Title>
                <Card.Text className="text-style pt-1">
                  {service.description}
                  <Link to="/contact">here</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>

        <Footer />
      </div>
    </div>
  );
}
