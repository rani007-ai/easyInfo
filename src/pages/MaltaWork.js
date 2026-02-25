import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

const MaltaWork = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-3">Malta Work Visa – Employment</h1>
          <p className="text-muted mb-4">Checklist and guidance for applying for a Malta Employment (National D) visa.</p>

          <Card className="mb-4">
            <Card.Header as="h5">Required Documents</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Visa application form completed and signed</ListGroup.Item>
                <ListGroup.Item>Valid passport (sufficient validity and pages) and full passport copy</ListGroup.Item>
                <ListGroup.Item>Biometric photograph (as per specifications)</ListGroup.Item>
                <ListGroup.Item>Original work permit/approval from Identità Malta (AIP/permit)</ListGroup.Item>
                <ListGroup.Item>Signed employment contract, certified true copy by a Maltese Public Notary</ListGroup.Item>
                <ListGroup.Item>Signed reference letter from past employer</ListGroup.Item>
                <ListGroup.Item>Curriculum Vitae (CV)</ListGroup.Item>
                <ListGroup.Item>Educational qualification certificates and transcripts</ListGroup.Item>
                <ListGroup.Item>Police clearance certificate (legalized/apostilled as applicable)</ListGroup.Item>
                <ListGroup.Item>Travel health insurance for the period until residence documentation</ListGroup.Item>
                <ListGroup.Item>Visa fee payable as per current exchange rate and mission guidelines</ListGroup.Item>
              </ListGroup>
              <div className="mt-3">
                <Button
                  variant="link"
                  href="https://visa.vfsglobal.com/one-pager/malta/india/english/pdf/Mt-EMPLOYMENT-VISA-CHECKLIST.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Checklist (PDF)
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Notes</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Documents should not be printed back-to-back.</ListGroup.Item>
                <ListGroup.Item>Incomplete applications will not be accepted; original work permit is required.</ListGroup.Item>
                <ListGroup.Item>Processing time for long-stay visas may be 6–8 weeks; timelines can vary.</ListGroup.Item>
                <ListGroup.Item>Submission of documents does not guarantee a visa; additional verification may be requested.</ListGroup.Item>
              </ListGroup>
              <Button variant="secondary" className="mt-3" onClick={() => window.print()}>Download this page as PDF</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MaltaWork;
