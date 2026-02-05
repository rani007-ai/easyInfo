import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, ListGroupItem } from 'react-bootstrap';

const Ausbildung = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-3">Ausbuildung Visa – Germany</h1>
          <p className="text-muted mb-4">Ausbildung is Germany's "dual vocational training" system, combining practical, on-the-job learning at a company with theoretical study at a vocational school (Berufsschule) to train skilled professionals. Participants, called Azubis, earn a salary while learning, typically over 2-3.5 years, and finish with a final exam, providing a direct path to employment in fields like IT, healthcare, engineering, and more, unlike traditional university studies. </p>

          <Card className="mb-4">
            <Card.Header as="h5">Step 1: Meet Eligibility Criteria</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Age: typically 18 to 35 </ListGroup.Item>
                 <ListGroup.Item>Education: 10+2 completion</ListGroup.Item>
                <ListGroup.Item>Language:   German Language Minimum B1</ListGroup.Item>
                 <ListGroup.Item>All documents must be translated into German</ListGroup.Item>
                
                 
              </ListGroup>
            </Card.Body>
          </Card>

         

          <Card className="mb-4">
            <Card.Header as="h5">Step 2: Required Documents</Card.Header>
            <Card.Body>
              <p className="mb-2">Before filling out the application form (step 2) and booking an appointment (step 3), please prepare the following documentation for your vocational training (Ausbildung) visa:</p>
              <p><strong>2 copies of each item</strong></p>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Visa Application Form: Completed and signed, typically via the
                  <a href="https://videx.diplo.de/videx/" target="_blank" rel="noopener noreferrer"> VIDEX portal</a>.
                </ListGroup.Item>
                <ListGroup.Item>Valid passport (issued within the last 10 years and with at least 12 months validity left)</ListGroup.Item>
                <ListGroup.Item>1 copy of your passport’s data page (A4 size copy)</ListGroup.Item>
                <ListGroup.Item>3 passport pictures according to biometric specifications</ListGroup.Item>
                <ListGroup.Item>Motivation letter</ListGroup.Item>
                <ListGroup.Item>Training contract (Ausbildungsvertrag) signed by the German employer and the employee (if applicable with IHK recognition)</ListGroup.Item>
                <ListGroup.Item>Training plan (Ausbildungsplan)</ListGroup.Item>
                <ListGroup.Item>
                  Financing gap closure if salary is low:
                  <ul className="mb-0">
                    <li>Entirely in school facilities and salary less than €903</li>
                    <li>In-firm facilities (+ Berufsschule) and salary less than €927</li>
                    <li>Close the gap with a blocked account (Sperrkonto) or a declaration of commitment (Verpflichtungserklärung)</li>
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item>Pre-approval by the Federal Employment Agency (optional but can shorten processing time)</ListGroup.Item>
                <ListGroup.Item>Personal CV containing full education and employment history</ListGroup.Item>
                <ListGroup.Item>Academic qualification or school leaving certificate</ListGroup.Item>
                <ListGroup.Item>
                  Certificate of German language skills (at least B1)
                  <div>OR confirmation from school facility/employer that language skills were checked and found sufficient</div>
                  <div>OR confirmation of preparatory language class</div>
                </ListGroup.Item>
                <ListGroup.Item>
                  Certificate about compulsory health insurance (Gesetzliche oder private Krankenversicherung) from German employer valid from date of employment.
                  <div>Please note: If not already included in the compulsory health insurance, a separate travel health insurance has to be presented for the time frame from arrival in Germany until beginning of employment.</div>
                </ListGroup.Item>
              </ListGroup>
              <p className="mt-3">Kindly note that the German Mission reserves the right to ask for additional documents. The submission of the above-mentioned documents does not guarantee that a visa is granted. Submission of incomplete documentation or refusal to appear for a visa interview may result in the rejection of your application.</p>
     
              <Button variant="secondary" onClick={() => window.print()}>Download this page as PDF</Button>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Step 3: Apply for Visa</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Submit application at German embassy/consulate</ListGroup.Item>
                <ListGroup.Item>Pay visa fee</ListGroup.Item>
                <ListGroup.Item>Attend visa interview  </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

           <Card className="mb-4">
            <Card.Header as="h5">Step 4: Important Notes  </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Translation: All documents not in German/English must be translated into German. </ListGroup.Item>
                <ListGroup.Item> Visa Type: National Visa (Type D) is needed for vocational training. </ListGroup.Item>
              <ListGroup.Item><a href="https://india.diplo.de/in-en/service/2554108-2554108" > Official Website </a></ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ausbildung;