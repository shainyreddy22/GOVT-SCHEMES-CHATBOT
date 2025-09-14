import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SchemesPage from './pages/SchemesPage';
import AboutPage from './pages/AboutPage';
import Chatbot from './components/Chatbot';
import FloatingChatButton from './components/FloatingChatButton';
import './App.css';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch initial notifications
    fetchNotifications();
    
    // Set up periodic notification updates
    const interval = setInterval(fetchNotifications, 300000); // Every 5 minutes
    
    return () => clearInterval(interval);
  }, []);

  const fetchNotifications = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/notifications`);
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onChatbotToggle={toggleChatbot} 
                notifications={notifications} 
              />
            } 
          />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
        
        {/* Floating Chat Button - only show when chatbot is closed */}
        {!isChatbotOpen && (
          <FloatingChatButton 
            onClick={toggleChatbot}
            hasNewMessage={notifications.length > 0}
          />
        )}
      </div>
    </Router>
  );
}

export default App;