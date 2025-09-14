import React from 'react';
import { Globe, Users, Target, Award, Shield, Clock, Mic, Languages, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import usePageTitle from '../hooks/usePageTitle';
import './AboutPage.css';

const AboutPage = () => {
  const { t } = useTranslation();
  usePageTitle('page.about');
  
  const features = [
    {
      icon: <Globe size={24} />,
      title: "Comprehensive Database",
      description: "Access information about 500+ Indian Government schemes across various categories including education, health, agriculture, and employment."
    },
    {
      icon: <Users size={24} />,
      title: "AI-Powered Assistance",
      description: "Get instant, accurate responses about scheme eligibility, application processes, and deadlines through our intelligent chatbot powered by Google's Gemini AI."
    },
    {
      icon: <Search size={24} />,
      title: "Smart AI Search",
      description: "Find schemes beyond our database using AI-powered search that discovers relevant government programs based on your specific needs and descriptions."
    },
    {
      icon: <Languages size={24} />,
      title: "Multilingual Support",
      description: "Access the platform in multiple Indian languages including English, Hindi, Telugu, and Tamil for better accessibility across diverse communities."
    },
    {
      icon: <Mic size={24} />,
      title: "Voice Interaction",
      description: "Communicate with the chatbot using voice commands with speech-to-text input and text-to-speech responses for hands-free interaction."
    },
    {
      icon: <Target size={24} />,
      title: "Smart Search & Browse",
      description: "Easily find relevant schemes using our advanced search functionality and category-based browsing system."
    },
    {
      icon: <Award size={24} />,
      title: "Real-time Updates",
      description: "Stay informed with live notifications about new schemes, deadline reminders, and important updates."
    },
    {
      icon: <Shield size={24} />,
      title: "Reliable Information",
      description: "All scheme information is sourced from official government websites and regularly updated to ensure accuracy."
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Availability",
      description: "Access government scheme information anytime, anywhere with our responsive web platform."
    }
  ];

  const stats = [
    { number: "500+", label: "Government Schemes" },
    { number: "4", label: "Languages Supported" },
    { number: "24/7", label: "Voice & Chat Support" },
    { number: "100%", label: "Free to Use" }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-content">
          <h1>About Gov Schemes India</h1>
          <p className="hero-subtitle">
            Your trusted companion for navigating Indian Government schemes and policies
          </p>
        </div>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <div className="container">
            <h2>{t('about.mission')}</h2>
            <p className="mission-text">
              Gov Schemes India is dedicated to bridging the information gap between citizens and government schemes. 
              We believe that every Indian citizen should have easy access to information about government benefits, 
              subsidies, and support programs that can improve their lives.
            </p>
            <p className="mission-text">
              Our platform combines the power of artificial intelligence with comprehensive government data to provide 
              instant, accurate, and personalized information about schemes that match your specific needs and eligibility criteria. 
              With multilingual support and voice interaction capabilities, we ensure accessibility for all communities across India.
            </p>
          </div>
        </section>

        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2>Key Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <h2>{t('about.howItWorks')}</h2>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Ask Questions</h3>
                <p>Use our AI chatbot with voice commands or text to ask questions about government schemes, eligibility criteria, or application processes in your preferred language.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>AI-Powered Search</h3>
                <p>Explore our comprehensive database or use AI search to discover schemes beyond our catalog based on your specific needs and circumstances.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Get Personalized Info</h3>
                <p>Receive detailed information about schemes that match your profile, including eligibility, benefits, and application steps with official links.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Voice Interaction</h3>
                <p>Use voice commands to interact hands-free and listen to responses spoken back to you for better accessibility and convenience.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="technology-section">
          <div className="container">
            <h2>{t('about.technology')}</h2>
            <div className="tech-content">
              <div className="tech-text">
                <p>
                  Our platform leverages cutting-edge artificial intelligence technology from Google's Gemini AI 
                  to provide intelligent, context-aware responses to your queries about government schemes. 
                  Advanced speech recognition and synthesis technologies enable seamless voice interaction.
                </p>
                <p>
                  Built with modern web technologies including React, Node.js, and i18next for internationalization, 
                  our platform ensures fast, reliable, and accurate information delivery across all devices and languages. 
                  The AI search engine can discover schemes beyond our predefined database using intelligent query processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Explore Government Schemes?</h2>
              <p>Start your journey towards accessing government benefits and support programs.</p>
              <div className="cta-buttons">
                <a href="/schemes" className="cta-btn primary">Browse Schemes</a>
                <button className="cta-btn secondary" onClick={() => window.history.back()}>
                  Start Chatting
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;