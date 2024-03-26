import React from 'react';
import MyResumeImage from '../../assets/imgs/Resume.jpg';
import MyResumePDF from '../../assets/imgs/Resume.pdf';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

function Resume() {
  return (
    <Container className="resume pages">
      <h2>Resume</h2>
      <Row className="justify-content-center">
        <Col sm={12} md={10} lg={8}>
          <Image src={MyResumeImage} alt="Resume" fluid />
        </Col>
        <Col sm={12} md={8} lg={6} className="text-start mt-3">
          <Button
            href={MyResumePDF}
            download="Resume.pdf"
            variant="primary"
          >
            Download Resume (PDF)
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
