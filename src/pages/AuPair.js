import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const AuPair = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-3">Au Pair Visa – Germany</h1>
          <p>An Au Pair Visa for Germany allows young people (typically 18-26) to live with a host family for 6-12 months to improve German language skills and cultural knowledge by helping with childcare and light housework, requiring basic German skills (A1 level) and a signed contract, with the stay generally limited to once in Germany.</p>
          <p className="text-muted mb-4">Step-by-step procedure for applying for an Au Pair visa in Germany.</p>

          <Card className="mb-4">
            <Card.Header as="h5">Step 1: Meet Eligibility Criteria  </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Age: 18-26 years</ListGroup.Item>
                <ListGroup.Item>Nationality: Non-EU citizen</ListGroup.Item>
                <ListGroup.Item>Education: At least 10th standard pass</ListGroup.Item>
                <ListGroup.Item>Language: Basic German language skills (A1 level)</ListGroup.Item>
                <ListGroup.Item>Experience: Childcare experience (not mandatory but preferred)</ListGroup.Item>
              <ListGroupItem> Host Family: Must provide a signed contract, pocket money, and cover expenses like language course fees and insurance. </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Step 2: Find an Au Pair Family </Card.Header>
            <Card.Body>
              <p className="mb-2">Websites:</p>
              <ul>
                <li><a href="https://www.aupairworld.com/en" target="_blank" rel="noopener noreferrer">aupairworld.com</a></li>
                <li><a href="https://www.aupair.com" target="_blank" rel="noopener noreferrer">aupair.com</a></li>
                <li><a href="https://www.findaupair.com" target="_blank" rel="noopener noreferrer">findaupair.com/</a></li>
                <li><a href="https://en.familienservice.de" target="_blank" rel="noopener noreferrer">PME Family Service Agent </a></li>
               
                
              </ul>
              <ListGroup variant="flush">
                <ListGroup.Item>Search for Au Pair families in Germany</ListGroup.Item>
                <ListGroup.Item>Contact families and discuss terms</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Step 3: Create a Profile and Apply to Families (Time: 1-2 weeks)</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Create a profile on Au Pair websites</ListGroup.Item>
                <ListGroup.Item>Upload profile photo, introduction, and childcare experience</ListGroup.Item>
                <ListGroup.Item>Apply to selected Au Pair families</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Step 4: Get Accepted by an Au Pair Family (Time: 1-2 weeks)</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Receive acceptance letter from an Au Pair family</ListGroup.Item>
                <ListGroup.Item>Discuss and agree on terms (salary, duties, etc.)</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Step 5: Gather Required Documents (Time: 1-2 weeks)</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Passport</ListGroup.Item>
                 <ListGroupItem> 3 Biometric Photos: Recent, conforming to German specifications (35x45mm).</ListGroupItem> 
                <ListGroupItem>Proof of Address: For your residence in your home country.</ListGroupItem>
                <ListGroup.Item>Birth certificate</ListGroup.Item>
                <ListGroup.Item>Police clearance certificate</ListGroup.Item>
                <ListGroup.Item>Health insurance certificate  
            </ListGroup.Item>
                 <ListGroup.Item>Motivation Letter: Explaining your reasons for the au pair stay and future plans.
  </ListGroup.Item>
    <ListGroup.Item>Curriculum Vitae (CV) : detailing education and childcare experience.</ListGroup.Item>
   <ListGroup.Item><a href="https://visa.vfsglobal.com/one-pager/germany/india/kolkata/english/pdf/germany-form-fillup.pdf" target="_blank" rel="noopener noreferrer">Application form & declarations duly signed </a></ListGroup.Item>
               
               
                <ListGroup.Item>Proof of childcare experience (not mandatory)</ListGroup.Item>
                <ListGroup.Item> <a href="https://www.arbeitsagentur.de/unternehmen/arbeitskraefte/au-pair"> Au Pair Contract with a German family along with completed questionnaire </a></ListGroup.Item>
                 <ListGroupItem>Informal invitation letter from the German family</ListGroupItem>
                 <ListGroupItem>Demand Draft or cash for the visa fees</ListGroupItem>
                 <ListGroupItem>Please prepare two application sets with the above-mentioned documents and bring your original certificates along. Please do not staple any documents.</ListGroupItem> 
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Step 6: Apply for Au Pair Visa (Time: 2-6 weeks)</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Book an appointment in nearby Embassy and Submit application at German embassy/consulate</ListGroup.Item>
                <ListGroup.Item>Pay visa fee (€75)</ListGroup.Item>
                <ListGroup.Item>Attend visa interview </ListGroup.Item>
                <ListGroupItem> <a href="https://india.diplo.de/in-en/service/2539258-2539258"> Official website </a>   </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuPair;