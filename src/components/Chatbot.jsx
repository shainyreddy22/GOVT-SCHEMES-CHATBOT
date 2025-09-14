import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Minimize2, Mic, MicOff, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: t('chatbot.welcome'),
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-IN'; // Default to Indian English

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      // Stop any ongoing speech synthesis
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const startVoiceRecognition = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopVoiceRecognition = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel();
      
      // Clean text for speech (remove URLs and special characters)
      const cleanText = text.replace(/https?:\/\/[^\s]+/g, 'link').replace(/[\u2022\u2023\u25E6\u2043\u2219]/g, '');
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-IN';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await axios.post('http://localhost:3001/api/chat', {
        message: inputValue
      }, {
        timeout: 30000 // 30 second timeout for AI responses
      });

      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: response.data.response,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);

    } catch (error) {
      console.error('Error sending message:', error);
      
      let errorMessage = "I'm sorry, I'm having trouble connecting right now. Please try again later.";
      
      if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
        errorMessage = "The chatbot service is currently unavailable. Please make sure the backend server is running on port 3001.";
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = "The request timed out. The AI is taking longer than usual to respond. Please try again.";
      }
      
      setTimeout(() => {
        const errorBotMessage = {
          id: messages.length + 2,
          text: errorMessage,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorBotMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatMessageText = (text) => {
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a 
            key={index} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className="message-link"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  if (!isOpen) return null;

  return (
    <div className={`chatbot-overlay ${isOpen ? 'open' : ''}`}>
      <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="bot-avatar">
              <Bot size={20} />
            </div>
            <div className="bot-info">
              <span className="bot-name">{t('chatbot.title')}</span>
              <span className="bot-status">{t('chatbot.status')}</span>
            </div>
          </div>
          <div className="chatbot-controls">
            <button 
              className="control-btn"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Minimize2 size={16} />
            </button>
            <button className="control-btn" onClick={onClose}>
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div className="chatbot-messages">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}>
                  <div className="message-avatar">
                    {message.isBot ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className="message-content">
                    <div className="message-text">
                      {formatMessageText(message.text)}
                    </div>
                    <div className="message-actions">
                      <div className="message-time">
                        {formatTime(message.timestamp)}
                      </div>
                      {message.isBot && (
                        <button 
                          className="speak-btn"
                          onClick={() => isSpeaking ? stopSpeaking() : speakText(message.text)}
                          title={t('chatbot.speakResponse')}
                        >
                          <Volume2 size={14} className={isSpeaking ? 'speaking' : ''} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message bot-message">
                  <div className="message-avatar">
                    <Bot size={16} />
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-area">
              <div className="input-container">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isListening ? t('chatbot.voiceListening') : t('chatbot.placeholder')}
                  rows="1"
                  className={`message-input ${isListening ? 'listening' : ''}`}
                />
                <div className="input-controls">
                  {recognitionRef.current && (
                    <button 
                      onClick={isListening ? stopVoiceRecognition : startVoiceRecognition}
                      className={`voice-btn ${isListening ? 'listening' : ''}`}
                      title={isListening ? t('chatbot.voiceStop') : t('chatbot.voiceStart')}
                    >
                      {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                    </button>
                  )}
                  <button 
                    onClick={handleSendMessage}
                    className="send-button"
                    disabled={inputValue.trim() === '' || isTyping}
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
              <div className="input-footer">
                <span>{t('chatbot.sendHint')}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;