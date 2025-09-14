import React from 'react';
import { Globe, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Globe className="logo-icon" />
          <span className="logo-text">Gov Schemes India</span>
        </div>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="/schemes" 
            className={`nav-link ${location.pathname === '/schemes' ? 'active' : ''}`}
          >
            {t('nav.schemes')}
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            {t('nav.about')}
          </Link>
        </nav>
        
        <div className="header-actions">
          <LanguageSwitcher />
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;