import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Nav, Tab, ListGroup, Form, Button, Alert, InputGroup } from 'react-bootstrap';
 
const Home = () => {
  const [showAllDocuments, setShowAllDocuments] = useState(false);
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [visaType, setVisaType] = useState('student');
  const [isSearching, setIsSearching] = useState(false);

  // Germany visa document information
  const visaDocuments = {
    student: {
      general: [
        { title: 'Valid Passport', description: 'Valid for at least 6 months beyond your intended stay' },
        { title: 'Visa Application Form', description: 'Completed National Visa Application form' },
        { title: 'Passport Photos', description: '2 biometric passport photos (35mm x 45mm), not older than 6 months' },
        { title: 'Visa Fee Payment', description: '€75 (may vary, check current fees)' }
      ],
      academic: [
        { title: 'University Admission Letter', description: 'Official admission letter (Zulassungsbescheid) from a German university' },
        { title: 'Academic Transcripts', description: 'Certified copies of previous academic records and degrees' },
        { title: 'Language Proficiency', description: 'German language certificate (usually B1/B2 level) or English proficiency for English-taught programs' },
        { title: 'CV/Resume', description: 'Updated curriculum vitae' }
      ],
      financial: [
        { title: 'Proof of Financial Resources', description: 'Evidence of sufficient funds (€10,332 per year) through:' },
        { title: 'Blocked Account', description: 'A German blocked account (Sperrkonto) with the required amount' },
        { title: 'Scholarship Confirmation', description: 'Official scholarship award letter, if applicable' },
        { title: 'Financial Guarantee', description: 'Declaration of commitment by a sponsor in Germany (Verpflichtungserklärung)' }
      ],
      insurance: [
        { title: 'Health Insurance', description: 'Proof of health insurance valid in Germany' },
        { title: 'Travel Insurance', description: 'For the initial period until university enrollment' }
      ],
      accommodation: [
        { title: 'Proof of Accommodation', description: 'Rental contract, student dormitory confirmation, or invitation letter' }
      ],
      additional: [
        { title: 'Motivation Letter', description: 'Letter explaining your study plans and goals in Germany' },
        { title: 'APS Certificate', description: 'For students from certain countries (e.g., China, Vietnam)' },
        { title: 'Previous Visa Copies', description: 'Copies of previous Schengen visas, if applicable' }
      ]
    },
    work: {
      general: [
        { title: 'Valid Passport', description: 'Valid for at least 6 months beyond your intended stay' },
        { title: 'Visa Application Form', description: 'Completed National Visa Application form' },
        { title: 'Passport Photos', description: '2 biometric passport photos (35mm x 45mm), not older than 6 months' },
        { title: 'Visa Fee Payment', description: '€75 (may vary, check current fees)' }
      ],
      employment: [
        { title: 'Employment Contract', description: 'Signed contract from a German employer' },
        { title: 'Job Description', description: 'Detailed description of your position and responsibilities' },
        { title: 'Qualification Documents', description: 'Proof of qualifications, degrees, and work experience' }
      ],
      financial: [
        { title: 'Salary Information', description: 'Proof of adequate salary according to German standards' },
        { title: 'Tax ID Number', description: 'If already available' }
      ],
      insurance: [
        { title: 'Health Insurance', description: 'Proof of health insurance valid in Germany' }
      ],
      accommodation: [
        { title: 'Proof of Accommodation', description: 'Rental contract or property ownership documents' }
      ],
      additional: [
        { title: 'CV/Resume', description: 'Updated curriculum vitae' },
        { title: 'Blue Card Requirements', description: 'For highly qualified professionals (if applicable)' }
      ]
    },
    family: {
      general: [
        { title: 'Valid Passport', description: 'Valid for at least 6 months beyond your intended stay' },
        { title: 'Visa Application Form', description: 'Completed National Visa Application form' },
        { title: 'Passport Photos', description: '2 biometric passport photos (35mm x 45mm), not older than 6 months' },
        { title: 'Visa Fee Payment', description: '€75 (may vary, check current fees)' }
      ],
      relationship: [
        { title: 'Marriage Certificate', description: 'For spouses - officially translated and apostilled' },
        { title: 'Birth Certificate', description: 'For children - officially translated and apostilled' },
        { title: 'Family Register', description: 'If applicable in your country' }
      ],
      sponsor: [
        { title: 'Residence Permit of Sponsor', description: 'Copy of the German residence permit of the family member in Germany' },
        { title: 'Invitation Letter', description: 'Letter from the family member in Germany' },
        { title: 'Proof of Financial Resources', description: 'Evidence that the sponsor can support you financially' }
      ],
      language: [
        { title: 'German Language Certificate', description: 'Usually A1 level for spouses (with some exceptions)' }
      ],
      accommodation: [
        { title: 'Proof of Accommodation', description: 'Showing sufficient space for all family members' }
      ],
      insurance: [
        { title: 'Health Insurance', description: 'Proof of health insurance valid in Germany' }
      ]
    },
    opportunity: {
      general: [
        { title: 'Valid Passport', description: 'Valid for at least 6 months beyond your intended stay' },
        { title: 'Visa Application Form', description: 'Completed National Visa Application form' },
        { title: 'Passport Photos', description: '2 biometric passport photos (35mm x 45mm), not older than 6 months' },
        { title: 'Visa Fee Payment', description: '€75 (may vary, check current fees)' }
      ],
      qualification: [
        { title: 'Vocational Qualification', description: 'Proof of recognized vocational qualification (minimum 2 years of training)' },
        { title: 'Qualification Assessment', description: 'Official assessment of your foreign qualification by a German authority' },
        { title: 'Professional Experience', description: 'Documentation of relevant professional experience in your field' }
      ],
      language: [
        { title: 'Language Course Registration', description: 'If applicable, registration for a language course in Germany' }
      ],
      financial: [
        { title: 'Proof of Financial Resources', description: 'Evidence of sufficient funds to support yourself during job search' },
        { title: 'Blocked Account', description: 'A German blocked account (Sperrkonto) with the required amount' }
      ],
      insurance: [
        { title: 'Health Insurance', description: 'Proof of comprehensive health insurance valid in Germany' }
      ],
      accommodation: [
        { title: 'Proof of Accommodation', description: 'Rental contract or proof of accommodation in Germany' }
      ],
      additional: [
        { title: 'CV/Resume', description: 'Updated curriculum vitae detailing your professional experience' },
        { title: 'Job Search Plan', description: 'Letter explaining your job search strategy in Germany' },
        { title: 'Previous Visa Copies', description: 'Copies of previous Schengen visas, if applicable' }
      ]
    }
  };

  // Search function
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = [];
    
    // Search through all visa types and categories
    Object.entries(visaDocuments).forEach(([type, categories]) => {
      Object.entries(categories).forEach(([category, documents]) => {
        documents.forEach(doc => {
          if (
            doc.title.toLowerCase().includes(query) || 
            doc.description.toLowerCase().includes(query)
          ) {
            results.push({
              visaType: type,
              category,
              ...doc
            });
          }
        });
      });
    });
    
    setSearchResults(results);
  };
  
  // Reset search
  const resetSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };
  
  // Handle visa type change
  const handleVisaTypeChange = (type) => {
    setVisaType(type);
    setActiveCategory(Object.keys(visaDocuments[type])[0]);
  };

  return (
    <div>
      {/* Search Bar */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1054040651597650"
     crossorigin="anonymous"></script>
     
      {/* Visa Type Selection */}
      <Card className="mb-4">
        <Card.Header as="h5">Select Visa Type</Card.Header>
        <Card.Body>
          <Nav variant="pills" className="mb-3">
            <Nav.Item>
              <Nav.Link 
                active={visaType === 'student'} 
                onClick={() => handleVisaTypeChange('student')}
              >
                Student Visa
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={visaType === 'work'} 
                onClick={() => handleVisaTypeChange('work')}
              >
                Work Visa
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={visaType === 'family'} 
                onClick={() => handleVisaTypeChange('family')}
              >
                Family Reunion Visa
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={visaType === 'opportunity'} 
                onClick={() => handleVisaTypeChange('opportunity')}
              >
                Opportunity Card
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Body>
      </Card>
      
      {/* Document Requirements */}
      <Card className="mb-4">
        <Card.Header as="h5">Documents Required for German {visaType.charAt(0).toUpperCase() + visaType.slice(1)} Visa</Card.Header>
        <Card.Body>
          <Card.Text>
            Below is a comprehensive list of documents required for a {visaType} visa application to Germany. 
            Please ensure all documents are complete before submitting your application.
          </Card.Text>
          
          <Row className="mb-4">
            <Col md={3} className="mb-3 mb-md-0">
              <ListGroup>
                {Object.keys(visaDocuments[visaType]).map(category => (
                  <ListGroup.Item 
                    key={category}
                    action 
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)} {category === 'employment' ? 'Documents' : 
                      category === 'relationship' ? 'Documents' : 
                      category === 'sponsor' ? 'Documents' : 
                      category === 'language' ? 'Requirements' : 'Documents'}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={9}>
              <h4>{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} {activeCategory === 'employment' ? 'Documents' : 
                activeCategory === 'relationship' ? 'Documents' : 
                activeCategory === 'sponsor' ? 'Documents' : 
                activeCategory === 'language' ? 'Requirements' : 'Documents'}</h4>
              <ListGroup variant="flush">
                {visaDocuments[visaType][activeCategory].map((doc, index) => (
                  <ListGroup.Item key={index}>
                    <strong>{doc.title}</strong>
                    <p className="mb-0">{doc.description}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          
          <Button 
            variant="primary" 
            onClick={() => setShowAllDocuments(!showAllDocuments)}
            className="me-2"
          >
            {showAllDocuments ? 'Hide' : 'Show'} All Documents
          </Button>
          
          {visaType === 'opportunity' && (
            <Button 
              variant="success" 
              href="https://digital.diplo.de/chancenkarte" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Official Website of Germany
            </Button>
          )}
        </Card.Body>
      </Card>

      {showAllDocuments && (
        <Card>
          <Card.Header as="h5">Complete Document Checklist</Card.Header>
          <Card.Body>
            {Object.entries(visaDocuments[visaType]).map(([category, docs]) => (
              <div key={category} className="mb-4">
                <h5>{category.charAt(0).toUpperCase() + category.slice(1)} Documents</h5>
                <ListGroup variant="flush">
                  {docs.map((doc, index) => (
                    <ListGroup.Item key={index}>
                      <strong>{doc.title}</strong>
                      <p className="mb-0 text-muted">{doc.description}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ))}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Home;