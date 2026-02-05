import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryVisas = {
    germany: [
      { title: 'Opportunity Card', description: 'Seek employment with points-based eligibility', route: '/opportunity' },
      { title: 'Au Pair', description: 'Live with host family and assist childcare', route: '/au-pair' },
      { title: 'Ausbuildung', description: 'Vocational training pathway', route: '/ausbuildung' },
      { title: 'Study Visa', description: 'Enroll in a German university', route: '/study' },
      { title: 'Volunteer', description: 'Voluntary service programs', route: '/volunteer' }
    ],
    malta: [
      { title: 'Work Visa', description: 'Employment visa for Malta', route: '/malta-work' }
    ]
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 className="mb-3">Select Country</h1>
          <p className="text-muted">Choose a country to view available visa options.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <Card>
            <Card.Header as="h5">Germany</Card.Header>
            <Card.Body>
              <Card.Text>Information and visa pathways for Germany.</Card.Text>
              <Button variant="primary" onClick={() => setSelectedCountry('germany')}>Select</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Header as="h5">Malta</Card.Header>
            <Card.Body>
              <Card.Text>Information and visa pathways for Malta.</Card.Text>
              <Button variant="primary" onClick={() => setSelectedCountry('malta')}>Select</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {selectedCountry && (
        <Row>
          <Col>
            <h2 className="mb-3">Visa Options – {selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}</h2>
          </Col>
        </Row>
      )}

      {selectedCountry && (
        <Row>
          {countryVisas[selectedCountry].map((opt) => (
            <Col md={6} className="mb-3" key={opt.title}>
              <Card>
                <Card.Header as="h6">{opt.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{opt.description}</Card.Text>
                  {opt.route ? (
                    <Button as={Link} to={opt.route} variant="success">Open</Button>
                  ) : (
                    <Button variant="secondary" disabled>Coming Soon</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;