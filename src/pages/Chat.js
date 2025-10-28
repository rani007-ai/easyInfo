import React, { useState } from 'react';
import { Card, Form, Button, Alert, ListGroup } from 'react-bootstrap';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) {
      setError('Please enter a message');
      return;
    }

    setMessages([...messages, { 
      type: 'text', 
      content: newMessage, 
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    }]);
    setNewMessage('');
    setError('');

    // Simulate response (in a real app, this would come from a backend)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'text',
        content: 'Thank you for your message. I will get back to you shortly.',
        sender: 'admin',
        timestamp: new Date().toLocaleTimeString()
      }]);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Validate file types (PDF and images only)
    const validFiles = selectedFiles.filter(file => 
      file.type === 'application/pdf' || file.type.startsWith('image/')
    );
    
    if (validFiles.length !== selectedFiles.length) {
      setError('Only PDF and image files are allowed');
    } else {
      setError('');
    }
    
    setFiles(validFiles);
  };

  const handleFileUpload = () => {
    if (files.length === 0) {
      setError('Please select files to share');
      return;
    }

    // In a real app, you would upload these files to a server
    // For now, we'll just add them to the chat
    files.forEach(file => {
      const fileMessage = {
        type: file.type.startsWith('image/') ? 'image' : 'pdf',
        content: file.name,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
        fileObject: file
      };
      
      setMessages(prev => [...prev, fileMessage]);
    });

    // Clear files after upload
    setFiles([]);
    setError('');

    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'text',
        content: 'I received your files. Thank you!',
        sender: 'admin',
        timestamp: new Date().toLocaleTimeString()
      }]);
    }, 1000);
  };

  // Function to render message based on type
  const renderMessage = (message, index) => {
    const isUser = message.sender === 'user';
    const messageClass = isUser ? 'text-end' : 'text-start';
    const bubbleClass = isUser ? 'bg-primary text-white' : 'bg-light';

    return (
      <ListGroup.Item key={index} className={`border-0 ${messageClass}`}>
        <div className={`d-inline-block p-2 rounded mb-1 ${bubbleClass}`} style={{maxWidth: '75%'}}>
          {message.type === 'text' && <p className="mb-0">{message.content}</p>}
          
          {message.type === 'image' && (
            <div>
              <p className="mb-1">Image: {message.content}</p>
              {message.fileObject && (
                <img 
                  src={URL.createObjectURL(message.fileObject)} 
                  alt={message.content}
                  className="img-fluid rounded"
                  style={{maxHeight: '200px'}}
                />
              )}
            </div>
          )}
          
          {message.type === 'pdf' && (
            <div>
              <p className="mb-0">PDF: {message.content}</p>
              {/* In a real app, you might add a preview or download link */}
            </div>
          )}
        </div>
        <div className="small text-muted">{message.timestamp}</div>
      </ListGroup.Item>
    );
  };

  return (
    <div>
      <h1 className="mb-4">Chat</h1>
      
      <Card className="mb-4">
        <Card.Header as="h5">Chat Messages</Card.Header>
        <Card.Body className="p-0">
          <ListGroup className="chat-messages" style={{maxHeight: '400px', overflowY: 'auto'}}>
            {messages.length === 0 ? (
              <ListGroup.Item className="text-center text-muted">
                No messages yet. Start a conversation!
              </ListGroup.Item>
            ) : (
              messages.map((message, index) => renderMessage(message, index))
            )}
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <Form onSubmit={handleSendMessage}>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type your message here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </Form.Group>
            
            {error && <Alert variant="danger">{error}</Alert>}
            
            <div className="d-flex justify-content-between">
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Share Files (PDF or Images)</Form.Label>
                  <Form.Control 
                    type="file" 
                    multiple
                    accept=".pdf,image/*"
                    onChange={handleFileChange}
                  />
                  <Form.Text className="text-muted">
                    Only PDF and image files are supported
                  </Form.Text>
                </Form.Group>
                
                {files.length > 0 && (
                  <Button 
                    variant="secondary" 
                    className="me-2"
                    onClick={handleFileUpload}
                  >
                    Upload {files.length} file(s)
                  </Button>
                )}
              </div>
              
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Chat;