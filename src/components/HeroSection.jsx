import React from 'react';
import { MessageCircle, Search, Clock, Award, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = ({ onChatbotToggle }) => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-subtitle">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="hero-description">
            {t('hero.description')}
          </p>
          
          <div className="hero-actions">
            <button className="cta-button primary" onClick={onChatbotToggle}>
              <MessageCircle size={20} />
              {t('hero.startChatting')}
            </button>
            <a href="/schemes" className="cta-button secondary">
              <Search size={20} />
              {t('hero.browseSchemes')}
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <Clock className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">24/7</span>
                <span className="stat-label">{t('hero.available')}</span>
              </div>
            </div>
            <div className="stat">
              <Award className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">500+</span>
                <span className="stat-label">{t('hero.schemes')}</span>
              </div>
            </div>
            <div className="stat">
              <Users className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">10K+</span>
                <span className="stat-label">{t('hero.queriesSolved')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-header">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="card-title">Gov Schemes AI</span>
            </div>
            <div className="card-content">
              <div className="message bot-message">
                <div className="message-avatar">🤖</div>
                <div className="message-text">
                  Hello! I can help you find government schemes. What are you looking for?
                </div>
              </div>
              <div className="message user-message">
                <div className="message-text">
                  I need information about education schemes
                </div>
                <div className="message-avatar">👤</div>
              </div>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;