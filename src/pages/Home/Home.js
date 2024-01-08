import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Home= () => {
    return(
        <div>
            <div className="content">
                <Container fluid>
                    <Card className="text-center">
                        <Card.Header as="h1">Our Companies</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Agriculture impacts society in supporting livelihoods through food, habitat, and jobs
                            </Card.Text>
                            <Row lg={4} md={2} sm={1}>
                                <Col md={4} style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                                    <Card style={{ width: 'relative', height: '30rem' }} >
                                        <Card.Img variant="top" src="/enzzofarm-logo-500x500.png" />
                                        <Card.Body>
                                            <Card.Title>Enzzo Farm</Card.Title>
                                            <Button variant="light">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} className="text-center" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                                    <Card style={{ width: 'relative', height: '30rem' }} >
                                        <Card.Img variant="top" src="/naturesharbest-logo-500x500.png" />
                                        <Card.Body>
                                            <Card.Title>Nature's Harbest</Card.Title>
                                            <Button variant="light">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} className="text-center" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                                    <Card style={{ width: 'relative', height: '30rem' }}>
                                        <Card.Img variant="top" src="/nutrishape-logo-500x500.png" />
                                        <Card.Body>
                                            <Card.Title>NutriShape</Card.Title>
                                            <Button variant="light">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} className="text-center" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                                    <Card style={{ width: 'relative', height: '30rem' }}>
                                        <Card.Img variant="top" src="/onepreneur-logo-500x500.png" />
                                        <Card.Body>
                                            <Card.Title>OnePreneur</Card.Title>
                                            <Button variant="light">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Container>
                
            </div>
        </div>
    );
};

export default Home;