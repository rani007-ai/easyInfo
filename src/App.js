import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Opportunity from './pages/Opportunity';
import Chat from './pages/Chat';
import Contact from './pages/Contact';
import AuPair from './pages/AuPair';
import Ausbildung from './pages/Ausbildung';
import Volunteer from './pages/Volunteer';
import Study from './pages/Study';
import MaltaWork from './pages/MaltaWork';
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
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/au-pair" element={<AuPair />} />
            <Route path="/ausbuildung" element={<Ausbildung />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/study" element={<Study />} />
            <Route path="/malta-work" element={<MaltaWork />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
