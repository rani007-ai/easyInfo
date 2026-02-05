import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

const Study = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-3">Study Visa – Germany</h1>
          <p className="text-muted mb-4">Checklist and guidance for applying for a German student (national) visa.</p>

          <Card className="mb-4">
            <Card.Header as="h5">Before You Apply</Card.Header>
            <Card.Body>
              <p>Prepare two identical sets of all documents and bring originals. Do not staple documents.</p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Required Documents (2 copies each)</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Valid passport (issued within the last 10 years) with at least two empty pages</ListGroup.Item>
                <ListGroup.Item>Application form and declaration (Section 54 Residence Act), duly signed</ListGroup.Item>
                <ListGroup.Item>Declaration regarding additional contact and legal representation information</ListGroup.Item>
                <ListGroup.Item>Copy of passport data page (A4 size)</ListGroup.Item>
                <ListGroup.Item>3 passport photos complying with biometric specifications</ListGroup.Item>
                <ListGroup.Item>
                  University admission: letter of admission or conditional admission; alternatively confirmation of Studienkolleg/preparatory course
                </ListGroup.Item>
                <ListGroup.Item>APS certificate (applicants educated in India)</ListGroup.Item>
                <ListGroup.Item>Academic certificates and transcripts</ListGroup.Item>
                <ListGroup.Item>Language proficiency: German (usually B1/B2) or English (e.g., IELTS/TOEFL) as required by the program</ListGroup.Item>
                <ListGroup.Item>Curriculum vitae (CV)</ListGroup.Item>
                <ListGroup.Item>Motivation letter</ListGroup.Item>
                <ListGroup.Item>
                  Proof of financial resources: blocked account covering annual living costs (e.g., €11,208 per year) or formal obligation (Verpflichtungserklärung)
                </ListGroup.Item>
                <ListGroup.Item>Health insurance: travel health insurance valid until enrollment; statutory or private thereafter</ListGroup.Item>
                <ListGroup.Item>Proof of accommodation</ListGroup.Item>
                <ListGroup.Item>Visa fee: €75 (check mission website for payment options and exchange rate)</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Notes</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>The mission may request additional documents or verification of certificates.</ListGroup.Item>
                <ListGroup.Item>Submission of documents does not guarantee a visa; incomplete documentation or refusal to attend interview can result in rejection.</ListGroup.Item>
              </ListGroup>
              <div className="mt-3">
                <Button variant="secondary" className="me-2" onClick={() => window.print()}>Download this page as PDF</Button>
                <Button
                  variant="link"
                  href="https://india.diplo.de/resource/blob/2667080/85ccf154e38cd7c5c36721503a49774c/infostudents-data.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Checklist (PDF)
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Study;