import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

const Volunteer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-3">Volunteer Visa – Germany</h1>
          <p className="text-muted mb-4">Overview and checklist for applying for a volunteer (voluntary service) visa to Germany.</p>

          <Card className="mb-4">
            <Card.Header as="h5">Before You Apply</Card.Header>
            <Card.Body>
              <p>
                Before filling out the application form and booking an appointment, prepare two identical sets of the following documents and bring originals along. Do not staple documents.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Required Documents (2 copies each)</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Valid passport (issued within the last 10 years) with at least two empty pages</ListGroup.Item>
                <ListGroup.Item>Application form and declaration (Section 54 Residence Act), duly signed (2 copies)</ListGroup.Item>
                <ListGroup.Item>Declaration regarding additional contact and legal representation information (2 copies)</ListGroup.Item>
                <ListGroup.Item>Copy of passport data page (A4 size) (2 copies)</ListGroup.Item>
                <ListGroup.Item>Letter of motivation (expectations, German skills, benefits, plans) (2 copies)</ListGroup.Item>
                <ListGroup.Item>Curriculum vitae (2 copies)</ListGroup.Item>
                <ListGroup.Item>
                  Contract/Agreement for voluntary service in Germany (2 copies), stating parties, duration, type of service, activity/project, place of work, and remuneration
                </ListGroup.Item>
                <ListGroup.Item>
                  Proof of basic German language knowledge or confirmation from the assignment location/provider that language skills are not required or will be taught
                </ListGroup.Item>
                <ListGroup.Item>3 passport photos complying with biometric specifications (not older than 6 months)</ListGroup.Item>
                <ListGroup.Item>Visa fee: €75 payable in INR (check mission website for payment options and exchange rate)</ListGroup.Item>
                <ListGroup.Item>
                  Travel health insurance valid from arrival in Germany to the start of voluntary service (ensure insurer is accepted by the mission)
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Program-Specific Contract Requirements</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Bundesfreiwilligendienst (incl. weltwärts): Contract signed by you, the German Federal Office of Family Affairs and Civil Society Functions (Bundesamt für Familie und zivilgesellschaftliche Aufgaben), the assignment location, their central office, and if applicable the provider (Träger)
                </ListGroup.Item>
                <ListGroup.Item>
                  Youth Voluntary Services (FSJ/FÖJ): Contract signed by you, the provider organizing the service, and if applicable the assignment location
                </ListGroup.Item>
                <ListGroup.Item>
                  European Voluntary Service (EVS/EFD): Contract signed by you, a national Erasmus+ Jugend in Aktion agency, and the coordinating organization; plus agreement on tasks and planned outcome signed by you and the coordinating organization
                </ListGroup.Item>
              </ListGroup>
              <p className="mt-3">
                Remuneration guidance: applicants generally need to receive 812€ per month (cash and non-cash benefits) excluding insurance. If free accommodation is provided, 452€ suffices; if accommodation and board are free, 302€ suffices. Provide explicit confirmations when applicable.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Notes</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>The mission may request additional documents or verification of certificates (additional fees may apply).</ListGroup.Item>
                <ListGroup.Item>Submission of documents does not guarantee a visa; incomplete documentation or refusal to attend interview can result in rejection.</ListGroup.Item>
                              <ListGroup.Item><a href="https://india.diplo.de/in-en/service/2539364-2539364" > Official Website </a></ListGroup.Item>
              </ListGroup>
              <Button variant="secondary" className="mt-3" onClick={() => window.print()}>Download this page as PDF</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Volunteer;