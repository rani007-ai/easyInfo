import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const basename = process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL).pathname : '/';
  return (
    <Router basename={basename}>
      <div className="App d-flex flex-column min-vh-100">
        <Navigation />
        <div className="container flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
