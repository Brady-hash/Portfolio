import React from  'react';
import { Container , Row, Col } from "react-bootstrap";

function AboutMe(){
    return (
        <Container className = "about pages">
            <h2>About Me</h2>
            <Row>
                <Col className = "sm={12} md={10} lg={8}">

                </Col>

            <Row>
                <Col className = "sm={12} md={8} lg={6}">
                    <p>
                        Hi, I'm Brady Davis, a Full Stack Developer based in Nashville, TN. I specialize in creating seamless, responsive, and efficient web applications. My technical expertise includes JavaScript, React, Node.js, and more.
                    </p>

                </Col>
            </Row>
            </Row>
        </Container>
    );

}

export default AboutMe;