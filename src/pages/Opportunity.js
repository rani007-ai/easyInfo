import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const Opportunity = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-3">Opportunity Card</h1>
          <p className="text-muted mb-4">
            Pathway for qualified professionals from non-EU countries to seek employment in Germany.
          </p>

         

          <Card className="mb-4">
            <Card.Header as="h5">The Opportunity Card – Overview</Card.Header>
            <Card.Body>
              <p>
                The Opportunity Card is a residence permit that allows workers from third countries to
                enter Germany in order to seek employment. It can also be used to search for measures to
                recognise foreign professional qualifications in Germany.
              </p>
              <p>
                A points system is used to determine whether you are eligible for the Opportunity Card based
                on your qualifications, knowledge and circumstances. A minimum score of six points is required
                for this.
              </p>
              <p>
                If you have a vocational qualification or degree obtained or recognised in Germany, you can
                apply for the Opportunity Card as a skilled worker without having to achieve a minimum number
                of points.
              </p>
              <p>
                In both cases, you must also fulfil the basic requirements listed below.
              </p>
              <p>
                Please also note the further information at the bottom of this page on the recognition of your
                vocational qualification or degree and on the proof of securing your livelihood.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Application Process</Card.Header>
            <Card.Body>
              <p>
                You can apply for the Opportunity Card online in the Consular Services Portal or locally at your
                German mission. When applying online, you can use a points calculator to determine how many points
                you will receive for your qualifications, knowledge and living conditions, unless you already qualify
                directly as a skilled worker. You will also be asked whether you fulfil the necessary basic requirements.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Validity and Follow-up</Card.Header>
            <Card.Body>
              <p>
                The Opportunity Card is issued for a period of up to one year. If you receive an employment contract
                or a binding job offer for qualified employment during your stay, you can obtain a follow-up Opportunity
                Card or another residence permit for the purpose of gainful employment from the local foreigners authority
                in Germany, provided you fulfill the relevant requirements.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header as="h5">Useful Links</Card.Header>
            <Card.Body>
              <ul className="mb-0">
                <li>
                  <a
                    href="https://digital.diplo.de/chancenkarte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to the official website of Germany
                  </a>
                   
                </li>
                <li>
                  <a
                    href="https://www.make-it-in-germany.com/fileadmin/1_Rebrush_2022/a_Fachkraefte/PDF-Dateien/3_Visum_u_Aufenthalt/2024_Mangelberufe_EN.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  List of shortage occupations
                  </a>
                   
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Alert variant="info">
            <strong>Note:</strong> Some German missions abroad work together with service providers to check applications.
            These service providers help to ensure that applications are processed quickly and smoothly and may charge a
            service fee for this. You will find out during the application process whether the German mission or consulate
            responsible for you works with a service provider and what service fee is charged.
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Opportunity;