import React from "react";
import { Row, Col } from 'react-bootstrap';
import githubLogo from '../assets/svgs/github.svg';
import linkedinLogo from '../assets/svgs/linkedin.svg';

function Footer() {
  return (
    <Row className="footer-content">
      <Col className="footer-logos text-center">
        <a href="https://github.com/Brady-hash" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/brady-davis-j/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </Col>
    </Row>
  );
}

export default Footer;
