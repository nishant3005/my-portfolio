import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { ClientData } from './Data/ClientData';

export default function ClientCarousel() {
  return (
    <div>
      <Container className="card-container">
        {ClientData.map((client) => (
          <Card className="carousel-style " key={client.id}>
            <Card.Body className="client-card">
              <div className="d-flex">
                <Card.Img
                  variant="top"
                  src={client.image}
                  className="client-img"
                />
                <div className="px-3 pt-3">
                  <Card.Title className="client-name">{client.name}</Card.Title>
                  <p className="mb-0 client-profession">{client.profession}</p>
                </div>
              </div>
              <Card.Text className="text-style pt-2 client-testimonial">
                {client.testimonial}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
