import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { WorkData } from '../components/Data/WorkData';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function WorkScreen() {
  return (
    <div>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <div className="body-background-color">
        <h2 className="text-center align-items-center heading-secondary heading-spacing">
          Portfolio
        </h2>

        <Container className="card-container pb-5 mb-5">
          {WorkData.map((work) => (
            <Card className="text-center card-style mx-3 my-4">
              <Card.Img
                src={work.image}
                alt="project"
                className="work-img pb-2"
              ></Card.Img>
              <Card.Body>
                <a href={work.link} target="_blank" rel="noreferrer">
                  <Card.Title>{work.name}</Card.Title>
                </a>
                <Card.Text className="text-style p-3 pt-1">
                  {work.description}
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
