import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/imgs/Social-Media-API.jpg';
import img2 from '../../assets/imgs/Dog-Boarding-Ez.jpg';
import img3 from '../../assets/imgs/Text-Editor.jpg';
import img4 from '../../assets/imgs/Employee-Tracker.jpg';
import img5 from '../../assets/imgs/Getting-Out-The-Door.jpg';
import img6 from '../../assets/imgs/Note-Taker.jpg';

function Portfolio() {
    const projects = [
        { id: 1, name: 'Social Media Api', imgUrl: img1, url: 'https://github.com/Brady-hash/NoSql-SocialMedia-Api' },
        { id: 2, name: 'Dog Boarding Ez', imgUrl: img2, url: 'https://github.com/Brady-hash/DB-Easy' },
        { id: 3, name: 'Text Editor PWA', imgUrl: img3, url: 'https://github.com/Brady-hash/Text-Editor-PWA' },
        { id: 4, name: 'Employee Tracker', imgUrl: img4, url: 'https://github.com/Brady-hash/Employee-Tracker' },
        { id: 5, name: 'Getting Out The Door', imgUrl: img5, url: 'https://brady-hash.github.io/Get-Out-The-Door/' },
        { id: 6, name: 'Note Taker', imgUrl: img6, url: 'https://note-taker-mod11-e18acf55443e.herokuapp.com/' },
    ];

    return (
        <Container className="portfolio pages">
            <h2>Portfolio</h2>
            <Row>
                {projects.map(project => (
                    <Col xs={12} md={6} lg={4} key={project.id} className="mb-4 d-flex justify-content-center">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-center">
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                                <img src={project.imgUrl} alt={project.name} className="img-fluid" />
                            </div>
                            <h4>{project.name}</h4>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Portfolio;
