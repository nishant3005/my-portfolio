import React from 'react';
import { SkillData3 } from '../Data/SkillData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ProgressBar3() {
  return (
    <div>
      {SkillData3.map((skill) => (
        <Row className="progress-bar-style" key={skill.id}>
          <Col>
            <p
              style={{
                marginBottom: '0.4rem',
              }}
            >
              {skill.skill}
            </p>
            <div
              className="progress"
              style={{ height: '10px', marginBottom: '0.8rem' }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={skill.rating}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  backgroundColor: '#d5c455',
                  width: `${skill.rating}%`,
                }}
              ></div>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}
